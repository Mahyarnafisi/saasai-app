"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronRight, Code2, CodeIcon, Image, MessageSquare, Music2, VideoIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
  {
    label: "Chat with AI",
    icon: MessageSquare,
    href: "/conversation",
    bgColor: "bg-sky-500/10",
    color: "text-sky-500",
    bgHover: "hover:bg-sky-500/5",
  },
  {
    label: "Create Image with AI",
    icon: Image,
    href: "/image",
    bgColor: "bg-violet-500/10",
    color: "text-violet-500",
    bgHover: "hover:bg-violet-500/5",
  },
  {
    label: "Create Video with AI",
    icon: VideoIcon,
    href: "/video",
    bgColor: "bg-orange-500/10",
    color: "text-orange-500",
    bgHover: "hover:bg-orange-500/5",
  },
  {
    label: "Compose new music with AI",
    icon: Music2,
    href: "/music",
    bgColor: "bg-green-500/10",
    color: "text-green-500",
    bgHover: "hover:bg-green-500/5",
  },
  {
    label: "Write code with AI",
    icon: CodeIcon,
    href: "/music",
    bgColor: "bg-red-500/10",
    color: "text-red-500",
    bgHover: "hover:bg-red-500/5",
  },
];

export default function DashboardPage() {
  const router = useRouter();
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold md:text-4xl text-center">Explore the Power of AI</h2>
        <p className="text-center text-sm md:text-lg font-medium opacity-75 ">
          Chat with our AI and smartest AI you have been used!
        </p>
      </div>
      <div className="px-4 md:px-24 lg:px-32 xl:px-64 space-y-4  ">
        {tools.map((tool) => {
          return (
            <Card
              onClick={() => router.push(tool.href)}
              key={tool.href}
              className={cn(
                "p-4 flex items-center justify-start gap-x-4 hover:shadow-md transition cursor-pointer",
                tool.bgHover
              )}
            >
              <div className="flex items-center justify-center gap-x-4 ">
                <div className={cn("p-2 rounded-md w-fit", tool.bgColor)}>
                  <tool.icon className={cn("w-8 h-8", tool.color)} />
                </div>
              </div>
              <div className="">
                <h3 className="font-bold">{tool.label}</h3>
              </div>
              <ChevronRight className={cn("w-6 h-6 ml-auto")} />
            </Card>
          );
        })}
      </div>
    </div>
  );
}
