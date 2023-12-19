import DashboardNavBar from "../ui/dashboard/Navbar";
import Profile from "../ui/dashboard/Profile";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Profile />
      <DashboardNavBar />
      {children}
    </div>
  );
}
