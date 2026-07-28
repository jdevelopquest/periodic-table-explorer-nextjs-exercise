"use client";
import { useFormStatus } from "react-dom";
import { MagnifyingGlassIcon, ArrowPathIcon } from "@heroicons/react/24/outline";

export default function SearchButton() {
  const status = useFormStatus();
  return (
    <button type="submit">
      {status.pending ? <ArrowPathIcon className="w-8 h-8" /> : <MagnifyingGlassIcon className="w-8 h-8" />}
    </button>
  );
}
