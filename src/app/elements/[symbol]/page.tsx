import { notFound } from "next/navigation";

export default async function Element({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const element = null;
  // const element = await fetch(`https://periodic-table-api.vercel.app/elements/${slug}`).then((res) => res.json());


  if (!element) {
    notFound();
  }

  return <></>;
}
