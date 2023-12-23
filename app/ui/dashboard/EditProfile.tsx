"use client";
import { UserType } from "@/types/userType";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function EditProfile({ user }: { user: UserType | null }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const defaultValues = () => {
      if (user) {
        setName(user.name || "");
        setPhone(user.phone || "");
      }
    };
    defaultValues();
  }, [user?.name, user?.phone]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      setError("Name and Phone Number are Mandatory!");
      return;
    }
    if (phone.length < 10) {
      setError("Invalid Phone number!");
      return;
    }
    // try to separate this data fetching logic from here
    try {
      const res = await fetch(`/api/edituser/${user?.email}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
        }),
      });
      if (res.ok) {
        router.push("/dashboard/inventory");
        router.refresh();
      }
    } catch (error) {
      console.log("error updating user at frontend", error);
    }
  };

  return (
    <div className="dark font-mono text-gray-50 h-screen flex flex-col gap-2 p-8">
      <h1 className="text-center">Edit Details</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="edit-form-input"
          type="text"
          name="username"
          placeholder="username"
          defaultValue={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="edit-form-input"
          placeholder="phone number"
          type="text"
          name="phone"
          defaultValue={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {error && (
          <div className="text-red-500 text-center font-semibold">{error}</div>
        )}
        <button className="btn-cyan">Submit</button>
      </form>
    </div>
  );
}
