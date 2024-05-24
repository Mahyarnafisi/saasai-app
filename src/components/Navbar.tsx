import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { UserButton } from "@clerk/nextjs";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./Sidebar";

export default function Navbar() {
  return (
    <div className="w-100 flex p-4 justify-between gap-4 md:justify-end">
      <Sheet>
        <SheetTrigger>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-zinc-900 border-none  ">
          <Sidebar />
        </SheetContent>
      </Sheet>
      <div className="">
        <UserButton afterSignOutUrl="/" showName />
      </div>
    </div>
  );
}
