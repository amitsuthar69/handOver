"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { deleteItem } from "../utils/deleteItem";
import toast from "react-hot-toast";
import { removeImg } from "@/app/utils/removeImage";
import { useState } from "react";
import Image from "next/legacy/image";

export default function EditDeleteButton({ id }: { id: string }) {
  const [deleting, setDeleting] = useState(false);
  const [editing, setEditing] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    setDeleting(true);
    const confirmed = window.confirm("Are you sure to delete this item?");
    if (confirmed) {
      try {
        const res = await deleteItem(id);
        if (res?.ok) {
          console.log("Post deleted");
          const item = await res.json();
          const { publicId } = item;
          await deleteImage(publicId);
          toast.success("Item Deleted!");
          router.refresh();
          setDeleting(false);
        }
      } catch (error) {
        toast.error("Something went wrong :(");
        console.log("Error deleting post in frontend: ", error);
      }
    } else {
      setDeleting(false);
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
      <button className="btn-edit">
        <Link
          onClick={() => setEditing(true)}
          href={`/dashboard/edititem/${id}`}
        >
          {editing ? (
            <div className="flex items-center justify-center gap-0.5">
              <Image
                width={15}
                height={15}
                priority={true}
                className="animate-spin w-5"
                src="/loader.svg"
                alt="editing"
              />
              <h1>Edit</h1>
            </div>
          ) : (
            "Edit"
          )}
        </Link>
      </button>
      <button className="btn-delete" onClick={handleDelete}>
        {deleting ? (
          <div className="flex gap-0.5">
            <Image
              width={15}
              height={15}
              priority={true}
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
