import { Element } from "@/lib/types/element";
import { formatElementPropertiesWithUnits } from "@/lib/utils/format-element";

export function ElementCard({ element }: { element: Element }) {
  const classifications = [
    element.groupBlock,
    element.bondingType,
    element.standardState,
  ];
  const allProperties = formatElementPropertiesWithUnits(element);
  return (
    <div className="flex flex-col items-center gap-4">
      <header className="w-full flex flex-col items-center gap-2 border border-gray-200 bg-gray-100 rounded-xl dark:bg-gray-50 dark:text-gray-900">
        <div className="flex flex-col items-center gap-2 ">
          <span className="inline-block text-center text-sm text-gray-600 mt-2">
            Atomic number
          </span>
          <span className="inline-block text-center text-3xl">
            {element.atomicNumber}
          </span>
          <span className="inline-block text-center text-7xl my-2">
            {element.symbol}
          </span>
          <h2 className="inline-block text-center text-5xl font-bold my-4">
            {element.name}
          </h2>
        </div>
        <p className="flex-col gap-4 md:flex-row">
          {classifications
            .filter((value) => value !== null)
            .map((value, i) => (
              <span
                key={i}
                className={`block md:inline-block text-center text-sm text-gray-600 dark:text-gray-900 rounded-xl bg-white px-3 m-2 py-2 min-w-24`}
              >
                {value}
              </span>
            ))}
        </p>
      </header>
      <section className="w-full grid grid-cols-1 gap-4 lg:grid-cols-2">
        {allProperties.map((property, i) => (
          <article
            key={i}
            className="p-4 border border-gray-200 bg-gray-100 rounded-xl dark:bg-gray-50 dark:text-gray-900"
          >
            <h3 className="text-left text-lg font-bold text-gray-600 dark:text-gray-900">
              {property.tag.toUpperCase()}
            </h3>
            <ul className="grid grid-cols-2 gap-4 ">
              {Object.entries(property.properties).map(([key, value]) => (
                <li key={key} className="">
                  {key ? (
                    <h4 className="text-left text-sm text-gray-600 my-4">
                      {key}
                    </h4>
                  ) : null}
                  {""}
                  <p className="text-left text-sm font-bold">
                    {value ? value : "-"}
                  </p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </div>
  );
}
