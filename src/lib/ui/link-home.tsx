import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/outline";

export default function LinkHome() {
  return (
    <Link href="/">
      <HomeIcon className="w-8 h-8" />
    </Link>
  );
}
