"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { deleteItem } from "../utils/deleteItem";
import toast from "react-hot-toast";
import { removeImg } from "@/app/utils/removeImage";
import { useState } from "react";

export default function EditDeleteButton({ id }: { id: string }) {
  const [deleting, setDeleting] = useState(false);
  const router = useRouter();
  const handleDelete = async () => {
    const confirmed = window.confirm("Are you sure to delete this item?");
    if (confirmed) {
      setDeleting(true);
      try {
        const res = await deleteItem(id);
        if (res?.ok) {
          console.log("Post deleted");
          const item = await res.json();
          const { publicId } = item;
          await deleteImage(publicId);
          toast.success("Item Deleted!");
          router.refresh();
        }
      } catch (error) {
        setDeleting(false);
        toast.error("Something went wrong :(");
        console.log("Error deleting post in frontend: ", error);
      }
    }
  };

  const deleteImage = async (publicId: string) => {
    try {
      const res = await removeImg(publicId);
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
        {deleting ? (
          <div className="flex gap-2">
            <img
              className="animate-spin w-5"
              src="/loader.svg"
              alt="deleting"
            />
            <h1>Deleting...</h1>
          </div>
        ) : (
          "Delete"
        )}
      </button>
    </div>
  );
}
