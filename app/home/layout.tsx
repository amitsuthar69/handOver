import BottomNav from "../ui/home/Filter";
import MiddleNav from "../ui/home/MiddleNav";
import TopNav from "../ui/home/TopNav";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="fixed w-full z-10 top-0">
        <TopNav />
      </div>
      <MiddleNav />
      <div className="m-auto">{children}</div>
    </div>
  );
}
