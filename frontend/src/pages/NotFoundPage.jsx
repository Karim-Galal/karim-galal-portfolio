import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-20">
      <div className="w-full max-w-xl text-center">
        <p className="font-mono text-sm text-primary">
          $ cd /requested-page
        </p>

        <div className="mt-6">
          <h1 className="font-mono text-7xl font-bold tracking-tight text-foreground sm:text-8xl">
            404
          </h1>

          <p className="mt-4 text-xl font-semibold text-foreground sm:text-2xl">
            Page not found
          </p>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-foreground-muted">
            Looks like this route doesn't exist. The page may have been moved,
            removed, or never existed in the first place.
          </p>
        </div>

        <Link
          to="/"
          className="mt-8 inline-flex h-10 items-center justify-center rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors duration-200 hover:bg-primary/90"
        >
          Back Home
        </Link>
      </div>
    </main>
  );
}

export default NotFoundPage;