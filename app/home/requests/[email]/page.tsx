import RequestCard from "@/app/ui/home/RequestCard";
import { authOptions } from "@/app/utils/authOptions";
import { getUserRequests } from "@/app/utils/getUserRequests";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Wishlist({
  params,
}: {
  params: { email: string };
}) {
  const email = decodeURIComponent(params.email);
  const requests = await getUserRequests(email);

  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/signin");
  }

  return (
    <div className="bg-[#1a1a1ae8] mt-12 p-6 min-h-screen">
      {(requests?.length as number) > 0 ? (
        <h1 className="font-mono text-gray-50/50 text-center">
          Items Requested to you...
        </h1>
      ) : (
        <h1 className="font-mono text-gray-50/50 text-center">
          No Requests made for your items yet.
        </h1>
      )}
      <div className="grid lg:grid-cols-2 gap-4 p-2 md:p-4">
        {requests?.map((req) => (
          <div key={req.id}>
            <RequestCard
              requestId={req.id}
              senderId={req.senderId}
              itemId={req.itemId}
              status={req.status}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
