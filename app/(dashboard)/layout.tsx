import SideNavBar from "../components/SideNavBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-surface">
      {/* Sidebar for Desktop */}
      <SideNavBar />
      
      {/* Main Content Area (padding-left handles the sidebar width on desktop) */}
      <div className="flex-1 w-full lg:pl-64">
        {children}
      </div>
    </div>
  );
}
