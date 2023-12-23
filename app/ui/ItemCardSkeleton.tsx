export default function ItemCardSkeleton() {
  return (
    <div className="dark shadow-md rounded-lg grid grid-cols-1 skeleton-card">
      <div className="thumbnail">
        <div className="w-full h-[170px] animate-pulse bg-gray-600/50 rounded-lg rounded-b-none" />
      </div>
      <div className="flex items-center justify-between">
        <span className="w-fit m-2 px-0.5 rounded-md text-xs skeleton-line-text" />
        <div className="mx-2 skeleton-line-text" />
      </div>
      <div className="details flex flex-col gap-1 p-2 animate-pulse">
        <p className="bg-gray-600/50 p-2" />
        <p className="bg-gray-600/50 p-2" />
      </div>
      <p className="text-xs text-gray-50/40 skeleton-line-text" />
      <button className="btn-green rounded-t-none flex items-center justify-center">
        <p className="bg-gray-50/20 w-3/4 animate-pulse p-2" />
      </button>
    </div>
  );
}
