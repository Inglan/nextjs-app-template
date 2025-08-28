import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <div className="flex w-full h-screen justify-center items-center text-center p-2">
      <Link
        href="https://github.com/Inglan/nextjs-app-template"
        target="_blank"
      >
        <h1 className="text-4xl">
          nextjs-app-template <ExternalLink className="inline-block" />
        </h1>
      </Link>
    </div>
  );
}
