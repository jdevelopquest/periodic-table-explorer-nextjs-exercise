import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/outline";

export default function LinkHome() {
  return (
    <Link
      href="/"
      aria-label="Link to Home page"
      className="flex items-center gap-4"
    >
      <HomeIcon className="w-8 h-8" />
    </Link>
  );
}
