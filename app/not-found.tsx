import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary-foreground text-white">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-xl mb-8 opacity-90">
          The page you are looking for does not exist.
        </p>
        <Button size="lg" asChild>
          <Link href="/">
            <Home className="mr-2 h-5 w-5" />
            Go Back Home
          </Link>
        </Button>
      </div>
    </div>
  );
}