// src/app/dashboard/LiveTable.tsx
"use client";

import { useEffect, useState, useMemo } from "react";
import { auth } from "@/lib/firebase";
import { io, Socket } from "socket.io-client";

// Include 'id' as the first column; removed 'solVal'
const COLUMNS: Array<Extract<keyof Row, string>> = [
  "id",
  "close",
  "realized_profit",
  "unrealized_profit",
  "realized_loss",
  "unrealized_loss",
  "cSolVal",
  "actor_rank",
  "max_cactor_rank",
  "last5secVol",
  "last10secVol",
  "image",
  "valid_launch",
  "valid_socials",
  "unique_socials",
  "is_pump_dump_risk",
  "bundle_ratio",
];

type Row = {
  id: string;
  time: number;
  open: number;
  high: number;
  low: number;
  close: number;
  solVal: number;
  realized_profit: number;
  realized_loss: number;
  unrealized_profit: number;
  unrealized_loss: number;
  cSolVal: number;
  actor_rank: number;
  max_cactor_rank: number;
  last5secVol: number;
  last10secVol: number;
  image: string;
  valid_launch: boolean;
  valid_socials: boolean;
  unique_socials: boolean;
  is_pump_dump_risk: boolean;
  bundle_ratio: number;
  [key: string]: any;
};

type SortConfig = { key: keyof Row; direction: "asc" | "desc" };
type Filters = { close?: number; cSolVal?: number; actor_rank?: number };

export default function LiveTable() {
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sortConfig, setSortConfig] = useState<SortConfig | null>(null);
  const [filters, setFilters] = useState<Filters>({});
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("liveTableFilters");
      if (stored) setFilters(JSON.parse(stored));
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem("liveTableFilters", JSON.stringify(filters));
  }, [filters]);

  useEffect(() => {
    let socket: Socket;
    async function initSocket() {
      try {
        const user = auth.currentUser;
        if (!user) throw new Error("Not logged in");
        const firebaseToken = await user.getIdToken();
        const res = await fetch(
          `https://profile.onchainrank.com/gen-authkey/${firebaseToken}`
        );
        if (!res.ok) throw new Error(`AuthKey API error: ${res.status}`);
        const { auth_token } = await res.json();
        socket = io("https://api.onchainrank.com", {
          query: { token: auth_token },
        });
        socket.on("connect", () => setLoading(false));
        socket.on("single", (incoming: any) => {
          const payload = incoming as {
            data: Row[];
            [key: string]: any;
          };
          const point = payload.data[0];
          const { data, ...rest } = payload;
          const newRow: Row = { ...rest, ...point };
          setRows((prev) => {
            const exists = prev.find((r) => r.id === newRow.id);
            if (exists)
              return prev.map((r) =>
                r.id === newRow.id ? { ...r, ...newRow } : r
              );
            return [newRow, ...prev];
          });
        });
      } catch (err: any) {
        setError(err.message || "Unknown error");
        setLoading(false);
      }
    }
    initSocket();
    return () => {
      if (socket) socket.disconnect();
    };
  }, []);

  const sortedRows = useMemo(() => {
    let sortable = [...rows];
    if (sortConfig) {
      const { key, direction } = sortConfig;
      sortable.sort((a, b) => {
        const aV = a[key];
        const bV = b[key];
        let comp = 0;
        if (typeof aV === "number" && typeof bV === "number") comp = aV - bV;
        else if (typeof aV === "string" && typeof bV === "string")
          comp = aV.localeCompare(bV);
        else if (typeof aV === "boolean" && typeof bV === "boolean")
          comp = aV === bV ? 0 : aV ? 1 : -1;
        return direction === "asc" ? comp : -comp;
      });
    }
    return sortable;
  }, [rows, sortConfig]);

  const filteredRows = useMemo(
    () =>
      sortedRows.filter((row) => {
        if (filters.close != null && row.close < filters.close) return false;
        if (filters.cSolVal != null && row.cSolVal < filters.cSolVal)
          return false;
        if (filters.actor_rank != null && row.actor_rank < filters.actor_rank)
          return false;
        return true;
      }),
    [sortedRows, filters]
  );

  const handleSort = (key: keyof Row, direction: "asc" | "desc") =>
    setSortConfig({ key, direction });

  if (loading) return <p>Loading data…</p>;
  if (error) return <p className="text-red-600">Error: {error}</p>;

  return (
    <div className="relative">
      <div className="flex items-center justify-between p-4">
        <button
          onClick={() => setShowFilter(true)}
          className="px-3 py-1 bg-blue-500 text-white rounded"
        >
          Filter
        </button>
      </div>
      {showFilter && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-80">
            <h2 className="text-lg font-bold mb-4">Filters</h2>
            <div className="mb-4">
              <label className="block mb-1">Min close</label>
              <input
                type="number"
                value={filters.close ?? ""}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    close: e.target.value
                      ? parseFloat(e.target.value)
                      : undefined,
                  })
                }
                className="w-full border px-2 py-1 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Min cSolVal</label>
              <input
                type="number"
                value={filters.cSolVal ?? ""}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    cSolVal: e.target.value
                      ? parseFloat(e.target.value)
                      : undefined,
                  })
                }
                className="w-full border px-2 py-1 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Min actor rank</label>
              <input
                type="number"
                value={filters.actor_rank ?? ""}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    actor_rank: e.target.value
                      ? parseFloat(e.target.value)
                      : undefined,
                  })
                }
                className="w-full border px-2 py-1 rounded"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowFilter(false)}
                className="px-3 py-1 bg-gray-300 rounded"
              >
                Close
              </button>
              <button
                onClick={() => setShowFilter(false)}
                className="px-3 py-1 bg-blue-500 text-white rounded"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-sm">
          <thead className="bg-gray-100">
            <tr>
              {COLUMNS.map((col) => (
                <th
                  key={col}
                  className="px-3 py-2 text-left font-medium text-gray-700"
                >
                  <div className="flex items-center">
                    <span>{col.replace(/_/g, " ")}</span>
                    <button
                      onClick={() => handleSort(col, "asc")}
                      className="ml-1"
                    >
                      ▲
                    </button>
                    <button
                      onClick={() => handleSort(col, "desc")}
                      className="ml-1"
                    >
                      ▼
                    </button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredRows.map((row) => (
              <tr key={row.id} className="bg-white even:bg-gray-50">
                {COLUMNS.map((col) => {
                  const val = row[col] as any;
                  let content: React.ReactNode = "";
                  if (col === "id") {
                    const s = String(val);
                    content =
                      s.length > 8 ? `${s.slice(0, 3)}...${s.slice(-5)}` : s;
                  } else if (col === "image") {
                    content = (
                      <>
                        <a
                          href={val}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline text-blue-600"
                        >
                          {val}
                        </a>
                        <br />
                        <img
                          src={val}
                          alt="img"
                          className="h-12 w-12 object-contain rounded mt-1"
                        />
                      </>
                    );
                  } else if (typeof val === "boolean") {
                    content = val ? "✔️" : "❌";
                  } else if (typeof val === "number") {
                    const timesTen = val * 10;
                    const rounded = Math.round(timesTen) / 10;
                    content = String(
                      Math.round(timesTen) !== timesTen ? rounded : val
                    );
                  } else {
                    content = String(val);
                  }
                  return (
                    <td key={col} className="px-3 py-2 text-gray-800 align-top">
                      {content}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
