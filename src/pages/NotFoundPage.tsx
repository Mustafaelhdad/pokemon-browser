import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <main>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="text-blue-500 hover:text-blue-600">
        Go back to the home page
      </Link>
    </main>
  );
}
