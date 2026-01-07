import SideBar from "@/components/SideBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full">
      <aside className="w-64 shrink-0 border-r">
        <SideBar />
      </aside>
      <main className="flex-1">{children}</main>
    </div>
  );
}
