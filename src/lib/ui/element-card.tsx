import { Element } from "@/lib/types/element";

export function ElementCard({ element }: { element: Element }) {
  const classifications = [
    element.groupBlock,
    element.bondingType,
    element.standardState,
  ];
  const basicProperties = {
    tag: "basic properties",
    properties: {
      "Atomic mass": element.atomicMass,
      "Standard state": element.standardState,
      "Melting point": element.meltingPoint,
      "Boiling point": element.boilingPoint,
    },
  };
  const atomicProperties = {
    tag: "atomic properties",
    properties: {
      Electronegativity: element.electronegativity,
      "Atomic radius": element.atomicRadius,
      "Van der Waals radius": element.vanDelWaalsRadius,
      "Ionization energy": element.ionizationEnergy,
      "Electron affinity": element.electronAffinity,
      Density: element.density,
    },
  };
  const allProperties = [basicProperties, atomicProperties];
  return (
    <>
      <header className="flex flex-col items-center gap-2 w-full mx-auto p-3 border border-gray-200 rounded-xl  bg-gray-100">
        <div className="flex flex-col items-center gap-2 w-full">
          <span className="inline-block w-full m-auto text-center text-sm text-gray-600">
            Atomic number
          </span>
          <span className="inline-block w-full m-auto text-center text-3xl">
            {element.atomicNumber}
          </span>
          <span className="inline-block w-full m-auto text-center text-7xl my-2">
            {element.symbol}
          </span>
          <h2 className="inline-block w-full m-auto text-center text-5xl font-bold my-4">
            {element.name}
          </h2>
        </div>
        <p className="mx-auto flex-col gap-4 md:flex-row">
          {classifications
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
      <section className="mx-auto flex flex-col gap-4 lg:flex-row">
        {allProperties.map((property, i) => (
          <article key={i} className="my-4 p-4 mx-auto w-full">
            <h3 className="text-left text-lg font-bold text-gray-600 w-full mb-4">
              {property.tag.toUpperCase()}
            </h3>
            <ul className="grid grid-cols-2 gap-4 w-full">
              {Object.entries(property.properties).map(([key, value]) => (
                <li key={key} className="w-full">
                  {key ? (
                    <h4 className="text-left text-sm text-gray-600 my-4">
                      {key}
                    </h4>
                  ) : null}{" "}
                  <p className="text-left text-sm font-bold">{value}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </>
  );
}
