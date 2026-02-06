"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ConceptCard from "@/components/content/ConceptCard";
import { categories, type Category } from "@/lib/content";
import { urlFor } from "@/sanity/lib/image";

interface SanityArticle {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: Category;
  publishedAt: string;
  readTime: string;
  mainImage?: {
    asset: {
      url: string;
    };
    alt?: string;
  };
}

interface BibliotecaClientProps {
  articles: SanityArticle[];
}

export default function BibliotecaClient({ articles }: BibliotecaClientProps) {
  const searchParams = useSearchParams();
  const categoriaParam = searchParams.get("categoria");

  const [activeFilter, setActiveFilter] = useState<Category | "todos">("todos");

  // Sincronizar con query params
  useEffect(() => {
    if (categoriaParam && ["mente", "cuerpo", "espiritu"].includes(categoriaParam)) {
      setActiveFilter(categoriaParam as Category);
    }
  }, [categoriaParam]);

  const filteredArticles =
    activeFilter === "todos"
      ? articles
      : articles.filter((article) => article.category === activeFilter);

  // Formatear fecha
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("es-CL", { month: "long", year: "numeric" });
  };

  return (
    <>
      {/* Filters */}
      <div className="px-4 md:px-8 max-w-6xl mx-auto mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id as Category | "todos")}
              className={`px-6 py-2.5 rounded-full font-sans text-sm font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-white text-ink/70 hover:text-ink border border-ink/10 hover:border-ink/20"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <section className="px-4 md:px-8 max-w-6xl mx-auto pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <ConceptCard
              key={article._id}
              title={article.title}
              excerpt={article.excerpt}
              category={article.category}
              slug={article.slug}
              date={formatDate(article.publishedAt)}
              imageUrl={article.mainImage?.asset?.url || ""}
            />
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted font-sans">
              No hay artículos en esta categoría aún.
            </p>
          </div>
        )}
      </section>
    </>
  );
}
