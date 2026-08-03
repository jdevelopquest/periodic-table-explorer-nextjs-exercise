import { Element } from "@/lib/types/element";
import { capitalizeFirstLetter } from "./format-string";

type PropertyValue = string | number | null;

const UNIT_MAP: Partial<Record<keyof Element, string>> = {
  atomicMass: "u",
  meltingPoint: "K",
  boilingPoint: "K",
  atomicRadius: "pm",
  vanDelWaalsRadius: "pm",
  ionizationEnergy: "kJ/mol",
  electronAffinity: "kJ/mol",
  density: "g/cm³",
};

function formatValue(value: PropertyValue, unit?: string, capitalize?: boolean): string {
  if (value === null) return "-";
  const formattedValue = unit ? `${value} ${unit}` : String(value);
  return capitalize ? capitalizeFirstLetter(formattedValue) : formattedValue;
}

export function formatElementPropertiesWithUnits(
  element: Element,
): { tag: string; properties: Record<string, string | null> }[] {
  return [
    {
      tag: "basic properties",
      properties: {
        "Atomic mass": formatValue(element.atomicMass, UNIT_MAP.atomicMass),
        "Standard state": formatValue(element.standardState, undefined, true),
        "Melting point": formatValue(element.meltingPoint, UNIT_MAP.meltingPoint),
        "Boiling point": formatValue(element.boilingPoint, UNIT_MAP.boilingPoint),
      },
    },
    {
      tag: "atomic properties",
      properties: {
        Electronegativity: formatValue(element.electronegativity),
        "Atomic radius": formatValue(element.atomicRadius, UNIT_MAP.atomicRadius),
        "Van der Waals radius": formatValue(element.vanDelWaalsRadius, UNIT_MAP.vanDelWaalsRadius),
        "Ionization energy": formatValue(element.ionizationEnergy, UNIT_MAP.ionizationEnergy),
        "Electron affinity": formatValue(element.electronAffinity, UNIT_MAP.electronAffinity),
        Density: formatValue(element.density, UNIT_MAP.density),
      },
    },
    {
      tag: "electron configuration",
      properties: {
        "Electronic configuration": formatValue(element.electronicConfiguration),
      },
    },
    {
      tag: "chemistry",
      properties: {
        "Oxidation states": formatValue(element.oxidationStates),
        "Bonding type": formatValue(element.bondingType, undefined, true),
      },
    },
    {
      tag: "history",
      properties: {
        "Year Discovered": formatValue(element.yearDiscovered),
      },
    },
  ];
}
