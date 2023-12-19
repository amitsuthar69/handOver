import BottomNav from "../ui/home/BottomNav";
import MiddleNav from "../ui/home/MiddleNav";
import TopNav from "../ui/home/TopNav";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <TopNav />
      <MiddleNav />
      <BottomNav />
      {children}
    </div>
  );
}
