import Link from "next/link";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";

export default function LinkParams() {
  return (
    <Link href="/params" aria-label="Link to Params page">
      <Cog6ToothIcon className="w-8 h-8" />
    </Link>
  );
}
