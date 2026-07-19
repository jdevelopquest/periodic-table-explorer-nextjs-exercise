export default async function Element({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  // const element = await fetch(`https://periodic-table-api.vercel.app/elements/${slug}`).then((res) => res.json());

  return <></>;
}
