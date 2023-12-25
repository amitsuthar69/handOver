"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { deleteItem } from "../utils/deleteItem";

export default function EditDeleteButton({ id }: { id: string }) {
  const router = useRouter();
  const handleDelete = async () => {
    const confirmed = window.confirm("Are you sure to delete this item?");
    if (confirmed) {
      try {
        const res = await deleteItem(id);
        if (res?.ok) {
          console.log("Post deleted");
          const item = await res.json();
          const { publicId } = item;
          await deleteImage(publicId);
          router.refresh();
        }
      } catch (error) {
        console.log("Error deleting post in frontend: ", error);
      }
    }
  };

  const deleteImage = async (publicId: string) => {
    try {
      const res = await fetch("/api/removeImage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ publicId }),
      });
    } catch (error) {
      console.log("error in frontend: ", error);
    }
  };

  return (
    <div className="rounded-lg w-full text-center text-sm font-semibold rounded-t-none flex items-center justify-evenly">
      <Link className="btn-edit " href={`/dashboard/edititem/${id}`}>
        <button>Edit</button>
      </Link>
      <button className="btn-delete" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
