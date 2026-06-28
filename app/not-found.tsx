import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-pearl px-4">
      <div className="text-center max-w-md">
        <div className="font-display text-8xl text-navy/10 mb-4">404</div>
        <h1 className="font-display text-3xl text-navy mb-3">
          Page Not Found
        </h1>
        <p className="text-slate-dark mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-emerald text-white font-medium hover:bg-emerald-dark transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
