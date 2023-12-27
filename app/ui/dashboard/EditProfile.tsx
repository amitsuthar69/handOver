"use client";
import { UserType } from "@/types/userType";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { setUser } from "@/app/utils/setUser";
import toast from "react-hot-toast";

export default function EditProfile({ user }: { user: UserType | null }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
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
      toast.error("Name and Phone Number are Mandatory!");
      return;
    }
    if (phone.length < 10) {
      toast.error("Invalid Phone number!");
      return;
    }
    try {
      const res = await setUser(user?.email, name, phone);
      if (res?.ok) {
        router.push("/dashboard/inventory");
        router.refresh();
      }
    } catch (error) {
      console.log("error updating user at frontend", error);
    }
  };

  return (
    <div className="bg-[#1a1a1ae8] font-mono text-gray-50 h-screen flex flex-col gap-2 p-8">
      <h1 className="text-center">Edit Details</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          maxLength={17}
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
        <button className="btn-cyan">Submit</button>
      </form>
    </div>
  );
}
