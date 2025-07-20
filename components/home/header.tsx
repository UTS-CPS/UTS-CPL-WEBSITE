"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Menu,
  X,
  Code,
  Trophy,
  Users,
  Calendar,
  Info,
  BarChart3,
  FileText,
  Send,
  Zap,
} from "lucide-react";
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "PROBLEMS", href: "/problems", icon: FileText },
    { name: "SUBMISSIONS", href: "/submissions", icon: Send },
    { name: "USERS", href: "/users", icon: Users },
    { name: "SPONSORS", href: "/sponsors", icon: Trophy },
    { name: "CONTESTS", href: "/contests", icon: Calendar },
    { name: "IDE", href: "/code-editor", icon: Code },
    { name: "ABOUT", href: "/about", icon: Info },
    { name: "LEADERBOARD", href: "/leaderboard", icon: BarChart3 },
  ];

  return (
    <header className="bg-white shadow-lg border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/cps-logo.png"
              alt="UTS CPL Logo"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="text-2xl font-bold text-gray-900">UTS CPL</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.name} href={item.href}>
                  <Button
                    variant="ghost"
                    className="flex items-center space-x-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                    <span className="font-medium">{item.name}</span>
                  </Button>
                </Link>
              );
            })}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link href="/login">
              <Button
                variant="ghost"
                className="text-slate-700 hover:text-white"
              >
                Log in
              </Button>
            </Link>
            <Button variant="ghost" className="text-slate-700 hover:text-white">
              Sign up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link key={item.name} href={item.href}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start space-x-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50"
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </Button>
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-slate-200 space-y-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-slate-700"
                >
                  Log in
                </Button>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                  Sign up
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
