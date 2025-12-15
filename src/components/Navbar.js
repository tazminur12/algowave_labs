import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="relative w-full bg-black px-6 py-4 md:px-12">
      {/* Gradient glow effect at bottom center */}
      <div className="absolute bottom-0 left-1/2 h-1 w-1/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent blur-xl"></div>
      
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500">
            <span className="text-xl font-bold text-white">A</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-lg font-semibold text-white">Algowave</span>
            <span className="text-lg font-semibold text-cyan-400">Labs</span>
          </div>
        </Link>

        {/* Navigation Links - Centered */}
        <div className="hidden items-center gap-8 md:flex absolute left-1/2 -translate-x-1/2">
          <Link
            href="/"
            className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium text-gray-300 transition-colors hover:text-white flex items-center gap-1"
          >
            Services
            <span className="text-xs">+</span>
          </Link>
          <Link
            href="/team"
            className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
          >
            Our Team
          </Link>
          <Link
            href="/portfolio"
            className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
          >
            Portfolio
          </Link>
          <Link
            href="/faq"
            className="text-sm font-medium text-gray-300 transition-colors hover:text-white relative"
          >
            FAQs
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400"></span>
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
          >
            Contact Us
          </Link>
        </div>

        {/* Get Started Button */}
        <Link
          href="/get-started"
          className="rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:from-cyan-500 hover:to-blue-600 hover:shadow-lg hover:shadow-cyan-500/50"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}

