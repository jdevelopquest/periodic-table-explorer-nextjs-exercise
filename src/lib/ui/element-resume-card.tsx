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
    <div
      key={symbol}
      className="flex flex-col items-center gap-2 w-full mx-auto p-3 border border-gray-200 rounded-xl"
    >
      <span className="text-3xl">{symbol}</span>
      <h4 className="text-center text-2xl">{name}</h4>
      <p className="w-full flex items-center">
        <span className="text-gray-600 text-sm">Atomic Number:</span>
        <span className="inline-block ml-auto text-right">{atomicNumber}</span>
      </p>
    </div>
  );
}
