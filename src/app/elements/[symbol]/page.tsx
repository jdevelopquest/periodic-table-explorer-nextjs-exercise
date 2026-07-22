import { getElementBySymbol } from "@/db/queries";
import { notFound } from "next/navigation";
import { Element } from "@/lib/types";

export default async function Page({
  params,
}: {
  params: Promise<{ symbol: string }>;
}) {
  const { symbol } = await params;

  const element: Element | undefined = await getElementBySymbol(symbol);

  if (!element) {
    notFound();
  }

  return (
    <div>
      <p>{symbol}</p>
      <p>{element.name}</p>
      <p>{element.atomicNumber}</p>
      <p>{element.symbol}</p>
      <p>{element.atomicMass}</p>
      <p>{element.cpkHexColor}</p>
      <p>{element.electronicConfiguration}</p>
      <p>{element.electronegativity}</p>
      <p>{element.atomicRadius}</p>
      <p>{element.ionRadius}</p>
      <p>{element.vanDelWaalsRadius}</p>
      <p>{element.ionizationEnergy}</p>
      <p>{element.electronAffinity}</p>
      <p>{element.oxidationStates}</p>
      <p>{element.standardState}</p>
      <p>{element.bondingType}</p>
      <p>{element.meltingPoint}</p>
      <p>{element.boilingPoint}</p>
      <p>{element.density}</p>
      <p>{element.groupBlock}</p>
      <p>{element.yearDiscovered}</p>
    </div>
  );
}
