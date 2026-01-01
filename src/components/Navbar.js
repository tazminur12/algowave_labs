'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Our Team', href: '/team' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'FAQs', href: '/faq' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav className="relative z-50 w-full bg-black px-6 py-4 md:px-12">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 h-1 w-1/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent blur-xl" />

      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500">
            <span className="text-xl font-bold text-white">A</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-lg font-semibold text-white">Algowave</span>
            <span className="text-lg font-semibold text-cyan-400">Labs</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {navLinks.map(link => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:from-cyan-500 hover:to-blue-600 hover:shadow-lg hover:shadow-cyan-500/50"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden absolute left-0 right-0 top-full bg-black border-t border-slate-800">
          <div className="flex flex-col px-6 py-6 space-y-4">
            {navLinks.map(link => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-gray-300 transition hover:text-white"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 inline-block rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-center text-sm font-semibold text-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
