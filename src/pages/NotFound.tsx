import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-site flex-col justify-center px-5 py-24 md:px-8">
      <p className="font-mono-ui text-xs uppercase tracking-[0.16em] text-muted">404</p>
      <h1 className="font-display mt-3 text-4xl font-bold tracking-tight text-ink md:text-5xl">
        Page not found
      </h1>
      <div className="mt-5 h-[3px] w-16 bg-signal" />
      <p className="mt-6 text-muted">That route doesn&apos;t exist in this build.</p>
      <Link
        to="/"
        className="mt-8 inline-flex w-fit bg-ink px-6 py-3 font-mono-ui text-xs uppercase tracking-[0.16em] text-paper hover:bg-signal"
      >
        Back home
      </Link>
    </div>
  );
};

export default NotFound;
