import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full items-center flex justify-center flex-col gap-6">
      <h1 className="text-2xl font-bold">Get connected!</h1>
      {children}
      <Link href="/">
        <Button className="flex gap-2">
          <HomeIcon className="w-5" />
          Get back to home
        </Button>
      </Link>
    </div>
  );
}
