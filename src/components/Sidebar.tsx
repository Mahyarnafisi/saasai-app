"use client";
import Image from "next/image";
import Link from "next/link";
import { Nunito } from "next/font/google";
import {
  Code,
  FileVideo2Icon,
  ImageIcon,
  LayoutDashboard,
  LucideVideo,
  MessageSquare,
  Music2Icon,
  Router,
  Settings,
  Videotape,
} from "lucide-react";
import { cn } from "@/lib/utils";
const nunito = Nunito({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

const routes = [
  {
    label: "Dashboard",
    href: "/dashboard",
    color: "text-sky-500",
    icon: LayoutDashboard,
    hoverColor: "hover:bg-sky-500/25 ",
  },
  {
    label: "Conversation",
    href: "/conversation",
    color: "text-violet-500",
    icon: MessageSquare,
    hoverColor: "hover:bg-violet-500/25 ",
  },

  {
    label: "Image Generator",
    href: "/image",
    color: "text-pink-500",
    icon: ImageIcon,
    hoverColor: "hover:bg-pink-500/25 ",
  },
  {
    label: "Video Generator AI",
    href: "/video",
    color: "text-orange-500",
    icon: LucideVideo,
    hoverColor: "hover:bg-orange-500/25 ",
  },

  {
    label: "Music Generator AI",
    href: "/music",
    color: "text-green-500",
    icon: Music2Icon,
    hoverColor: "hover:bg-green-500/25 ",
  },
  {
    label: "Code Generator AI",
    href: "/code",
    color: "text-red-500",
    icon: Code,
    hoverColor: "hover:bg-red-500/25 ",
  },
  {
    label: "Settings",
    href: "/settings",
    color: "text-white",
    icon: Settings,
    hoverColor: "hover:bg-white/10",
  },
];

export default function Sidebar() {
  return (
    <div className="w-full relative">
      <div className="">
        <Link href="/" className="flex items-start gap-2 py-2">
          <div className="relative w-10 h-10">
            <Image className=" hover:animate-pulse" fill src="/logo.png" alt="logo of business" />
          </div>
          <div className="flex items-start flex-col gap-1">
            <h1 className={`${nunito.className} text-white text-2xl font-bold`}>
              GMO AI Assistance
            </h1>
            <sub className="text-white">The AI can make your life easier.</sub>
          </div>
        </Link>
        <div className="my-10 space-y-2">
          {routes.map((route) => {
            return (
              <Link
                className={cn(
                  `flex hover:bg-white/10 text-lg rounded-lg p-4  gap-2 items-center transition-all duration-300 ease-in-out`,
                  route.hoverColor
                )}
                href={route.href}
                key={route.label}
              >
                <div className="flex gap-4 items-center">
                  <route.icon className={`w-6 h-6 ${route.color}`} />
                  <span className="text-white">{route.label}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
