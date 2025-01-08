import Link from "next/link";

export default function Custom404() {
  return (
    <div className="my-[150px] text-center space-y-20">
      <h1 className="mb-4">404 - Page Not Found</h1>
      <Link href="/" className="bg-primary text-white rounded-lg px-8 py-2">
        Go Home
      </Link>
    </div>
  );
}
