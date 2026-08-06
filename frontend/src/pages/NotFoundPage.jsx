import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-6xl font-bold">404</h1>

      <p>Page Not Found</p>

      <Link to="/">Back Home</Link>
    </div>
  );
}

export default NotFoundPage;