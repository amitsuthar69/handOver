"use client";
import { useState } from "react";

export default function HandOverForm() {
  const [active, setActive] = useState(false);
  return (
    <div className="dark font-mono text-gray-50 h-screen flex flex-col gap-2 p-8">
      <h1 className="text-center mb-4">What you got to exchange?</h1>
      <form className="flex flex-col gap-4">
        <textarea
          maxLength={50}
          minLength={10}
          required
          className="edit-form-input"
          name="description"
          placeholder="describle your item..."></textarea>
        <select
          required
          onChange={() => setActive((prev) => !prev)}
          className="bg-transparent outline-none border p-2 rounded"
          name="what's your mood?"
          id="cars">
          <option className="dark" value="volvo">
            Exchange
          </option>
          <option className="dark" value="saab">
            Sell
          </option>
        </select>
        {active && (
          <input
            className="edit-form-input"
            type="text"
            name="amount"
            placeholder="what's the price then?"
          />
        )}
        <input type="file" name="item-img" accept="image/png, image/jpeg" />{" "}
        {/* this file input is temporary, we'll have a better one! */}
        <button className="btn-cyan">
          Open for {active ? "sell" : "Exchange"}
        </button>
      </form>
    </div>
  );
}
