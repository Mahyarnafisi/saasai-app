import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-100">
      <div className="h-full p-4 bg-zinc-900 relative z-40 w-80 max-md:hidden">
        <Sidebar />
      </div>
      <main className="h-screen flex-1 ">
        <Navbar />
        {children}
      </main>
    </div>
  );
}
