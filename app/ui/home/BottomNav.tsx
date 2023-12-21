export default function BottomNav() {
  return (
    <div className="bg-[#1a1a1aee] flex p-2 gap-2 w-full items-center justify-between font-mono shadow-md text-gray-50">
      <input
        type="text"
        placeholder="search..."
        className="outline-none bg-transparent border-b border-gray-50"
      />
      <div className="filter">Filter</div>
    </div>
  );
}
