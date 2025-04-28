"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* logo */}
        <Link href="/" className="text-2xl font-bold">
          MyApp
        </Link>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>

          {/* Product dropdown */}
          <div className="relative group">
            <button className="inline-flex items-center hover:text-gray-300">
              Product
              <ChevronDownIcon className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-44 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <Link
                href="/product/chart"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Chart Extension
              </Link>
              <Link
                href="/product/alert"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Alert Extension
              </Link>
            </div>
          </div>

          <Link href="/features" className="hover:text-gray-300">
            Features
          </Link>

          <Link href="/pricing" className="hover:text-gray-300">
            Pricing
          </Link>

          {/* Resources dropdown */}
          <div className="relative group">
            <button className="inline-flex items-center hover:text-gray-300">
              Resources
              <ChevronDownIcon className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <Link
                href="/resources/blog"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Blog / Alpha Radar
              </Link>
              <Link
                href="/resources/guides"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Guides & Tutorials
              </Link>
              <Link
                href="/resources/docs"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                (Future) Docs / API
              </Link>
            </div>
          </div>

          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="/faq" className="hover:text-gray-300">
            FAQ
          </Link>
          <Link href="/support" className="hover:text-gray-300">
            Support
          </Link>

          {/* CTA */}
          <Link
            href="/install"
            className="ml-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold"
          >
            Install Extension
          </Link>
        </nav>

        {/* mobile hamburger */}
        <button className="md:hidden" onClick={() => setMobileOpen((o) => !o)}>
          {mobileOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden bg-gray-800 text-white px-6 py-4 space-y-1">
          <Link href="/" className="block py-2">
            Home
          </Link>

          {/* Product accordion */}
          <div>
            <button
              className="w-full flex justify-between py-2"
              onClick={() => setProductOpen((o) => !o)}
            >
              Product
              <ChevronDownIcon
                className={`h-5 w-5 transition-transform ${
                  productOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {productOpen && (
              <div className="pl-4">
                <Link href="/product/chart" className="block py-2">
                  Chart Extension
                </Link>
                <Link href="/product/alert" className="block py-2">
                  Alert Extension
                </Link>
              </div>
            )}
          </div>

          <Link href="/features" className="block py-2">
            Features
          </Link>
          <Link href="/pricing" className="block py-2">
            Pricing
          </Link>

          {/* Resources accordion */}
          <div>
            <button
              className="w-full flex justify-between py-2"
              onClick={() => setResourcesOpen((o) => !o)}
            >
              Resources
              <ChevronDownIcon
                className={`h-5 w-5 transition-transform ${
                  resourcesOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {resourcesOpen && (
              <div className="pl-4">
                <Link href="/resources/blog" className="block py-2">
                  Blog / Alpha Radar
                </Link>
                <Link href="/resources/guides" className="block py-2">
                  Guides & Tutorials
                </Link>
                <Link href="/resources/docs" className="block py-2">
                  (Future) Docs / API
                </Link>
              </div>
            )}
          </div>

          <Link href="/about" className="block py-2">
            About
          </Link>
          <Link href="/faq" className="block py-2">
            FAQ
          </Link>
          <Link href="/support" className="block py-2">
            Support
          </Link>

          <Link
            href="/install"
            className="block mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-center font-semibold"
          >
            Install Extension
          </Link>
        </nav>
      )}
    </header>
  );
}
