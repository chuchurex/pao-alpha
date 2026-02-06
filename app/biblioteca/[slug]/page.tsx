import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { sanityFetch } from "@/sanity/lib/fetch";
import { ARTICLE_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import { categoryStyles } from "@/lib/content";
import PortableTextRenderer from "@/components/content/PortableTextRenderer";
import ArticleProgress from "./ArticleProgress";

export const revalidate = 60;

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;

  const article = await sanityFetch<any>({
    query: ARTICLE_BY_SLUG_QUERY,
    params: { slug },
    tags: [`article:${slug}`],
  });

  if (!article) {
    notFound();
  }

  const styles = categoryStyles[article.category as keyof typeof categoryStyles];

  // Formatear fecha
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("es-CL", { month: "long", year: "numeric" });
  };

  return (
    <article className="min-h-screen bg-paper">
      <ArticleProgress />

      {/* Header */}
      <header className="pt-32 pb-12 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Back Link */}
          <Link
            href="/biblioteca"
            className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors mb-8 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Biblioteca
          </Link>

          {/* Category Badge */}
          {styles && (
            <span
              className={`inline-block px-4 py-1.5 text-sm font-medium rounded-full mb-6 ${styles.bg} ${styles.text}`}
            >
              {styles.label}
            </span>
          )}

          {/* Title */}
          <h1 className="font-serif text-4xl md:text-5xl text-ink leading-tight mb-6">
            {article.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-muted">
            <span>{formatDate(article.publishedAt)}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {article.readTime} de lectura
            </span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="px-4 md:px-8 pb-20">
        <div className="max-w-3xl mx-auto">
          {/* Article Body */}
          <div className="prose prose-lg prose-stone max-w-none">
            <PortableTextRenderer value={article.body} />
          </div>

          {/* Footer Navigation */}
          <div className="mt-16 pt-8 border-t border-ink/10">
            <Link
              href="/biblioteca"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver a Biblioteca
            </Link>
          </div>
        </div>
      </main>
    </article>
  );
}
