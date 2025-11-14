"use client";

import Link from "next/link";
import { Bell, Search } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavbarComponent() {
  // TODO: Obtener usuario autenticado desde Auth.js
  const user = {
    name: "Cynthia Wolf",
    username: "c_wolf89",
    avatar: "https://placehold.co/32x32", // Placeholder por ahora
    notifications: 3,
  };

  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/trips", label: "Trips" },
    { href: "/explore", label: "Explore" },
    { href: "/community", label: "Community" },
    { href: "/profile", label: "Profile" },
  ];
  return (
    <nav
      aria-label="Primary navigation"
      className="sticky top-0 z-50 border-b border-gray-800 bg-gray-900 shadow-sm"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-3">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-indigo-600/90 text-xs font-bold text-white">
              F
            </span>
            <span className="text-lg font-semibold tracking-tight text-white">
              Frishoo
            </span>
          </Link>

          <div className="flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative pb-1 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-white"
                      : "text-gray-100/80 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-0 h-0.5 w-full rounded-full bg-indigo-600" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end gap-4">
          <div className="flex max-w-sm flex-1 items-center gap-2 rounded-full bg-gray-600/70 px-4 py-2 text-sm text-gray-50">
            <Search className="h-4 w-4 text-gray-100/80" />
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-transparent text-sm text-white placeholder:text-gray-100/70 outline-none"
            />
          </div>

          <button
            className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gray-600/80 text-gray-50 hover:bg-gray-700 transition-colors"
            aria-label="Notifications"
          >
            <Bell className="h-4 w-4 cursor-pointer" />
            {user.notifications > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-bold text-white">
                {user.notifications}
              </span>
            )}
          </button>

          <Link
            href="/profile"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300/60 bg-gray-600/80 hover:bg-gray-700 transition-colors"
          >
            <Image
              src={user.avatar}
              alt={user.name}
              width={32}
              height={32}
              className="h-8 w-8 rounded-full object-cover"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
