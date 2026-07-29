import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getElementBySymbol } from "@/lib/db/get-element-by-symbol";
import { Element } from "@/lib/types/element";
import { ElementCard } from "@/lib/ui/element-card";

export const metadata: Metadata = {
  title: "Element Details",
  description: "Expose details about a specific element",
};

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
    <section className="mx-auto">
      <ElementCard element={element} />
    </section>
  );
}
