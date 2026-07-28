import { XCircleIcon } from "@heroicons/react/24/outline";

export default function ClearButton() {
  return (
    <button type="reset" className="cursor-pointer">
      <XCircleIcon className="w-8 h-8" />
    </button>
  );
}
