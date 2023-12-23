import Link from "next/link";

export default function EditDeleteButton() {
  return (
    <div className="rounded-lg w-full text-center text-sm font-semibold rounded-t-none flex items-center justify-evenly">
      <Link
        className="btn-edit "
        href={`${process.env.NEXTAUTH_URL}/dashboard/inventory`}>
        Edit
      </Link>
      <Link
        className="btn-delete "
        href={`${process.env.NEXTAUTH_URL}/dashboard/inventory`}>
        Delete
      </Link>
    </div>
  );
}
