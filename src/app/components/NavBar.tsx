"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
    <header className="bg-background-surface shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo (2:1 ratio) */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="OnchainRank Logo"
            width={64}
            height={32}
            priority
          />
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center space-x-6 text-text">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <div className="relative group">
            <button className="inline-flex items-center hover:text-primary">
              Product
              <ChevronDownIcon className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-44 bg-background-surface text-text rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <Link
                href="/product/chart"
                className="block px-4 py-2 hover:bg-background-muted"
              >
                Chart Extension
              </Link>
              <Link
                href="/product/alert"
                className="block px-4 py-2 hover:bg-background-muted"
              >
                Alert Extension
              </Link>
            </div>
          </div>
          <Link href="/features" className="hover:text-primary">
            Features
          </Link>
          <Link href="/pricing" className="hover:text-primary">
            Pricing
          </Link>
          <div className="relative group">
            <button className="inline-flex items-center hover:text-primary">
              Resources
              <ChevronDownIcon className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-background-surface text-text rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <Link
                href="/resources/blog"
                className="block px-4 py-2 hover:bg-background-muted"
              >
                Blog / Alpha Radar
              </Link>
              <Link
                href="/resources/guides"
                className="block px-4 py-2 hover:bg-background-muted"
              >
                Guides & Tutorials
              </Link>
              <Link
                href="/resources/docs"
                className="block px-4 py-2 hover:bg-background-muted"
              >
                (Future) Docs / API
              </Link>
            </div>
          </div>
          <Link href="/about" className="hover:text-primary">
            About
          </Link>
          <Link href="/faq" className="hover:text-primary">
            FAQ
          </Link>
          <Link href="/support" className="hover:text-primary">
            Support
          </Link>
          <Link
            href="/install"
            className="ml-4 px-4 py-2 bg-primary text-text-inverse rounded-md font-semibold hover:bg-primary-dark transition"
          >
            Install Extension
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-text"
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden bg-background-surface text-text px-6 py-4 space-y-2 border-t border-background-muted">
          <Link href="/" className="block py-2 hover:text-primary">
            Home
          </Link>

          <div>
            <button
              className="w-full flex justify-between py-2 hover:text-primary"
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
                <Link
                  href="/product/chart"
                  className="block py-2 hover:text-primary"
                >
                  Chart Extension
                </Link>
                <Link
                  href="/product/alert"
                  className="block py-2 hover:text-primary"
                >
                  Alert Extension
                </Link>
              </div>
            )}
          </div>

          <Link href="/features" className="block py-2 hover:text-primary">
            Features
          </Link>
          <Link href="/pricing" className="block py-2 hover:text-primary">
            Pricing
          </Link>

          <div>
            <button
              className="w-full flex justify-between py-2 hover:text-primary"
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
                <Link
                  href="/resources/blog"
                  className="block py-2 hover:text-primary"
                >
                  Blog / Alpha Radar
                </Link>
                <Link
                  href="/resources/guides"
                  className="block py-2 hover:text-primary"
                >
                  Guides & Tutorials
                </Link>
                <Link
                  href="/resources/docs"
                  className="block py-2 hover:text-primary"
                >
                  (Future) Docs / API
                </Link>
              </div>
            )}
          </div>

          <Link href="/about" className="block py-2 hover:text-primary">
            About
          </Link>
          <Link href="/faq" className="block py-2 hover:text-primary">
            FAQ
          </Link>
          <Link href="/support" className="block py-2 hover:text-primary">
            Support
          </Link>
          <Link
            href="/install"
            className="block mt-4 px-4 py-2 bg-primary text-text-inverse rounded-md text-center font-semibold hover:bg-primary-dark transition"
          >
            Install Extension
          </Link>
        </nav>
      )}
    </header>
  );
}
