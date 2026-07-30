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
      className="max-w-3xs flex flex-col items-center gap-2 mx-auto p-3 border border-gray-200 rounded-xl w-full">
      <span className="inline-block w-full m-auto text-center text-2xl py-2 bg-gray-100 rounded-xl">
        {atomicNumber}
      </span>
      <span className="inline-block w-full m-auto text-center text-3xl">
        {symbol}
      </span>
      <span className="inline-block w-full m-auto text-center text-md text-gray-600">
        {name}
      </span>
    </Link>
  );
}
