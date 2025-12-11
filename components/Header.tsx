"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

type ChildItem = {
  label: string;
  href: string;
  description?: string;
  icon?: string; // emoji icon
};

type NavItem =
  | {
      label: string;
      href: string;
      children?: undefined;
    }
  | {
      label: string;
      href?: undefined;
      children: ChildItem[];
    };

// Top navigation structure with icons
const navItems: NavItem[] = [
  { label: "Home", href: "/" },

  {
    label: "Three Worlds",
    children: [
      {
        label: "Vidya–Nirman",
        href: "/worlds/vidya-nirman",
        description: "Learn & Make – labs, makerspaces, incubation",
        icon: "🧪",
      },
      {
        label: "Anubhav–Lok",
        href: "/worlds/anubhav-lok",
        description: "Experience Center – exhibits, VR/AR, galleries",
        icon: "🎭",
      },
      {
        label: "Kreeda–Mandap",
        href: "/worlds/kreeda-mandap",
        description: "Gaming & Competition – leagues, arenas, robo-sports",
        icon: "🎮",
      },
    ],
  },

  {
    label: "Programs",
    children: [
      {
        label: "Workshops & Training",
        href: "/programs/workshops",
        description: "Hands-on training for students, teachers & professionals",
        icon: "🛠️",
      },
      {
        label: "Robo Convention",
        href: "/programs/convention",
        description: "Annual robotics & AI convention, talks & demos",
        icon: "🎤",
      },
      {
        label: "School & College Engagement",
        href: "/programs/education",
        description: "Tie-ups with schools, colleges & universities",
        icon: "🏫",
      },
    ],
  },

  {
    label: "More",
    children: [
      {
        label: "Vision & Story",
        href: "/vision",
        description: "Why Amaravati RoboValley – vision, mission, roadmap",
        icon: "🌟",
      },
      {
        label: "Patrons & Partners",
        href: "/patrons-and-partners",
        description: "Institutions, mentors & sponsors supporting the project",
        icon: "🤝",
      },
	  
      {
        label: "Updates / News",
        href: "/updates",
        description: "Announcements, press coverage & progress updates",
        icon: "📰",
      },
      {
        label: "Robotics Industry & Services",
		href: "/industry",
        description: "Reach us for collaboration, support & queries",
        icon: "📞",
      },
	  {
		label: "Stakeholder Contact & Support",
		href: "/stakeholders-support",
	  },
	 
    ],
  },

  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isActive = (href?: string) =>
    href && (pathname === href || pathname?.startsWith(href));

  const toggleDropdown = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 text-white">
      {/* Desktop / top bar background */}
      <div className="bg-black/70 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo / Brand */}
          <Link href="/" className="font-bold text-xl tracking-wide">
            Amaravati <span className="text-blue-400">RoboValley</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="relative">
                  <button
                    type="button"
                    className="flex items-center gap-1 text-sm uppercase tracking-wide hover:text-blue-300"
                    onClick={() => toggleDropdown(item.label)} // click to open/close
                  >
                    {item.label}
                    <span className="text-xs">▼</span>
                  </button>

                  {/* Mega-style dropdown for desktop */}
                  {openDropdown === item.label && (
                    <div className="absolute left-0 mt-2 w-[320px] md:w-[480px] rounded-2xl bg-slate-900/95 border border-white/10 shadow-xl py-3 px-2 z-[9999]">
                      <div className="grid gap-2 md:grid-cols-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block rounded-xl px-3 py-2 hover:bg-white/10 transition ${
                              isActive(child.href)
                                ? "text-blue-300"
                                : "text-gray-200"
                            }`}
                            onClick={() => setOpenDropdown(null)}
                          >
                            <div className="flex items-start gap-2">
                              {/* Icon */}
                              <span className="mt-0.5 text-lg">
                                {child.icon ?? "•"}
                              </span>
                              {/* Text block */}
                              <div>
                                <div className="text-sm font-semibold">
                                  {child.label}
                                </div>
                                {child.description && (
                                  <div className="text-xs text-gray-400 mt-0.5 leading-snug">
                                    {child.description}
                                  </div>
                                )}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm uppercase tracking-wide hover:text-blue-300 ${
                    isActive(item.href) ? "text-blue-400" : "text-gray-100"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Mobile burger */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span className="w-6 h-0.5 bg-white" />
            <span className="w-6 h-0.5 bg-white" />
            <span className="w-6 h-0.5 bg-white" />
          </button>
        </div>
      </div>

      {/* Mobile menu – with icons too */}
      {mobileOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-3 space-y-2">
            {navItems.map((item) =>
              item.children ? (
                <details key={item.label} className="group">
                  <summary className="flex justify-between items-center cursor-pointer text-sm uppercase tracking-wide text-gray-100 py-1">
                    {item.label}
                    <span className="text-xs">▼</span>
                  </summary>
                  <div className="mt-1 pl-2 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block rounded px-2 py-1.5 text-sm ${
                          isActive(child.href)
                            ? "text-blue-300 bg-white/10"
                            : "text-gray-300"
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        <div className="flex items-start gap-2">
                          <span className="mt-0.5 text-lg">
                            {child.icon ?? "•"}
                          </span>
                          <div>
                            <div>{child.label}</div>
                            {child.description && (
                              <div className="text-[11px] text-gray-400">
                                {child.description}
                              </div>
                            )}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`block text-sm uppercase tracking-wide py-1 ${
                    isActive(item.href) ? "text-blue-300" : "text-gray-200"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}
