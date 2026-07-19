import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1>Element not found</h1>
      <p>
        The element you're looking for doesn't exist. It might have been moved
        or the address was entered incorrectly.
      </p>
      <p>Error 404</p>
      <Link href="/">Back to Home</Link>
      <Link href="/elements">Search elements</Link>
      <p>Try searching by element name or atomic number</p>
    </>
  );
}
