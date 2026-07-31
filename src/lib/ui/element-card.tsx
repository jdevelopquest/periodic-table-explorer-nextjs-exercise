import { Element } from "@/lib/types/element";

export function ElementCard({ element }: { element: Element }) {
  return (
    <header className="flex flex-col items-center gap-2 w-full mx-auto p-3 border border-gray-200 rounded-xl  bg-gray-100">
      <p className="flex flex-col items-center gap-2 w-full">
        <span className="inline-block w-full m-auto text-center text-sm text-gray-600">
          Atomic number
        </span>
        <span className="inline-block w-full m-auto text-center text-3xl">
          {element.atomicNumber}
        </span>
        <span className="inline-block w-full m-auto text-center text-7xl my-2">
          {element.symbol}
        </span>
        <span className="inline-block w-full m-auto text-center text-5xl font-bold my-4">
          {element.name}
        </span>
      </p>
      <p className="mx-auto flex-col gap-4 md:flex-row">
        {[element.groupBlock, element.bondingType, element.standardState]
          .filter((value) => value !== null)
          .map((value, i) => (
            <span
              key={i}
              className={`block md:inline-block text-center text-sm text-gray-600 rounded-xl bg-gray-50 px-3 m-2 py-2 min-w-24`}
            >
              {value}
            </span>
          ))}
      </p>
    </header>
  );
}
