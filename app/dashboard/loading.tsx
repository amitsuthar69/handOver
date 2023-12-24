export default function Loading() {
  return (
    <div className="flex bg-[#1a1a1ae8] font-mono text-gray-50 items-center justify-center h-screen">
      <div className="spinner-container flex gap-2 items-center">
        <div
          className="h-4 w-4 animate-spin rounded-full border border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status">
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
        <h1>Fetching your items...</h1>
      </div>
    </div>
  );
}
