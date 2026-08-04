import Link from "next/link";

export function ElementResumeCard({
  symbol,
  name,
  atomicNumber,
}: {
  symbol: string;
  name: string;
  atomicNumber: number;
}) {
  return (
    <Link
      href={`/elements/${symbol}`}
      aria-label={`Link to ${name} element page`}
      className="max-w-3xs flex flex-col items-center gap-2 mx-auto p-3 rounded-xl w-full border border-gray-200 dark:bg-amber-50"
    >
      <span className="inline-block w-full m-auto text-center text-2xl py-2 bg-gray-100 dark:bg-amber-50 rounded-xl dark:text-gray-600">
        {atomicNumber}
      </span>
      <span className="inline-block w-full m-auto text-center text-3xl dark:text-gray-900">
        {symbol}
      </span>
      <span className="inline-block w-full m-auto text-center text-md text-gray-600 dark:text-gray-600">
        {name}
      </span>
    </Link>
  );
}
