"use client";

import { useState } from "react";
import { X, Search } from "lucide-react";

export default function SearchInput() {
  const [value, setValue] = useState("");

  return (
    <div className="flex items-center border-2 border-blue-400 rounded-lg px-3 py-2 bg-white shadow-sm focus-within:ring-2 focus-within:ring-blue-300">
      <Search className="w-5 h-5 text-gray-500 mr-2" />
      <input
        type="text"
        className="flex-1 outline-none bg-transparent placeholder-gray-500 text-gray-700"
        placeholder="Search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {value && (
        <button onClick={() => setValue("")}>
          <X className="border-2 border-gray-500 w-5 h-5 text-gray-500 rounded-full" />
        </button>
      )}
    </div>
  );
}
