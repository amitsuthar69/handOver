"use client";
import { Category } from "@/types/itemType";
import React, { useEffect, useState } from "react";
import { getCategories } from "@/app/utils/getCategoriesForItem";
import { useRouter } from "next/navigation";
import setItems from "@/app/utils/setItems";

export default function HandOverForm() {
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState<Category[] | null>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [price, setPrice] = useState("0");
  const [publicId, setPublicId] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");

  // console.log(selectedCategory);

  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategories();
      setCategories(categories);
    };
    fetchCategories();
  }, []);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!description) {
      setError("Description is required!");
      return;
    }
    try {
      await setItems(
        {
          description,
          selectedCategory,
          publicId,
          price,
          imageUrl,
        },
        router
      );
      router.refresh();
    } catch (error) {
      console.log("Error handling form submit: ", error);
    }
  };

  return (
    <div className="dark font-mono text-gray-50 h-screen flex flex-col gap-2 p-8">
      <h1 className="text-center mb-4">What you got to exchange?</h1>
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          maxLength={100}
          minLength={10}
          className="edit-form-input"
          name="description"
          placeholder="describle your item... (atleast 10 characters)"></textarea>
        <select
          required
          onChange={handleSelectChange}
          className="bg-transparent outline-none border p-2 rounded"
          name="sell or exchange?"
          id="cars">
          <option className="bg-[#1e1e1ec0]" selected disabled hidden>
            sell or exchange?
          </option>
          {categories &&
            categories.map((category) => (
              <option
                className="bg-[#1e1e1ec0]"
                key={category.id}
                value={category.catName}>
                {category.catName}
              </option>
            ))}
        </select>
        {selectedCategory === "sell" && (
          <input
            required
            onChange={(e) => setPrice(e.target.value)}
            className="edit-form-input"
            type="text"
            name="amount"
            placeholder="what's the price? (if selling)"
          />
        )}
        <input type="file" name="item-img" accept="image/png, image/jpeg" />{" "}
        {/* this file input is temporary, we'll have a better one! */}
        {error && (
          <div className="text-red-500 text-center font-semibold">{error}</div>
        )}
        <button className="btn-cyan">
          Open for {selectedCategory === "sell" ? "sell" : "Exchange"}
        </button>
      </form>
    </div>
  );
}
