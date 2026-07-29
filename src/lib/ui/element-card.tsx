import { Element } from "@/lib/types/element";

export function ElementCard({ element }: { element: Element }) {
  return (
    <div className="flex flex-col items-center gap-2 w-full mx-auto p-3 border border-gray-200 rounded-xl">
      <span className="text-3xl">{element.symbol}</span>
      <h4 className="text-center text-2xl mb-4">{element.name}</h4>
      <div className="w-full flex flex-col gap-2">
        {Object.entries(element).map(([key, value]) => (
          <p key={key} className="w-full flex items-center">
            <span className="text-gray-600 text-sm">{key}:</span>
            <span className="inline-block ml-auto text-right">{value}</span>
          </p>
        ))}
      </div>
    </div>
  );
}
