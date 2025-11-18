import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <main className="fade-in mx-auto w-full max-w-3xl px-6 py-16 sm:px-10 sm:py-24">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">About</h1>
        <p className="mt-4 text-base">
          This is a placeholder About page. Add your bio, interests, and contact
          details here.
        </p>
        <div className="mt-8">
          <Link href="/" className="underline underline-offset-4">Back to Home</Link>
        </div>
      </main>
    </div>
  );
}

