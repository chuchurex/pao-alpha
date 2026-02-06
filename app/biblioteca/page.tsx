import { Suspense } from "react";
import { sanityFetch } from "@/sanity/lib/fetch";
import { ARTICLES_QUERY } from "@/sanity/lib/queries";
import BibliotecaClient from "./BibliotecaClient";

export const revalidate = 60;

export default async function BibliotecaPage() {
  const articles = await sanityFetch<any[]>({
    query: ARTICLES_QUERY,
    tags: ["article"],
  });

  return (
    <div className="min-h-screen bg-paper">
      {/* Header */}
      <section className="pt-32 pb-12 px-4 md:px-8 max-w-6xl mx-auto text-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink mb-4">
          Biblioteca
        </h1>
        <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto font-sans">
          Guías para la transformación personal
        </p>
      </section>

      <Suspense fallback={<BibliotecaLoading />}>
        <BibliotecaClient articles={articles || []} />
      </Suspense>
    </div>
  );
}

function BibliotecaLoading() {
  return (
    <div className="px-4 md:px-8 max-w-6xl mx-auto mb-12">
      <div className="flex flex-wrap justify-center gap-3">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="px-6 py-2.5 rounded-full bg-stone-200 animate-pulse w-20 h-10"
          />
        ))}
      </div>
    </div>
  );
}
