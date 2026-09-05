import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-5 text-center text-foreground">
      <h1 className="font-mono text-7xl font-bold text-primary">404</h1>
      <p className="text-muted-foreground">This page doesn't exist.</p>
      <Link to="/" className="rounded-full bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground">
        Back home
      </Link>
    </div>
  );
}
