import { defineQuery } from "next-sanity";

// ============================================
// ARTÍCULOS
// ============================================

export const ARTICLES_QUERY = defineQuery(`
  *[_type == "article"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    category,
    publishedAt,
    readTime,
    featured,
    mainImage {
      asset->{
        _id,
        url,
        metadata { lqip, dimensions }
      },
      alt
    }
  }
`);

export const ARTICLE_BY_SLUG_QUERY = defineQuery(`
  *[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    category,
    publishedAt,
    readTime,
    featured,
    mainImage {
      asset->{
        _id,
        url,
        metadata { lqip, dimensions }
      },
      alt
    },
    body
  }
`);

export const ARTICLES_BY_CATEGORY_QUERY = defineQuery(`
  *[_type == "article" && category == $category] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    category,
    publishedAt,
    readTime,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    }
  }
`);

// ============================================
// WORKSHOPS
// ============================================

export const FEATURED_WORKSHOP_QUERY = defineQuery(`
  *[_type == "workshop" && featured == true][0] {
    _id,
    title,
    "slug": slug.current,
    subtitle,
    description,
    date,
    price,
    duration,
    topics,
    limitedSeats,
    mainImage {
      asset->{
        _id,
        url
      }
    }
  }
`);

export const WORKSHOP_BY_SLUG_QUERY = defineQuery(`
  *[_type == "workshop" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    subtitle,
    description,
    date,
    price,
    duration,
    topics,
    limitedSeats,
    mainImage {
      asset->{
        _id,
        url
      }
    },
    body
  }
`);

// ============================================
// SITE SETTINGS
// ============================================

export const SITE_SETTINGS_QUERY = defineQuery(`
  *[_type == "siteSettings"][0] {
    title,
    description,
    heroTitle,
    heroSubtitle,
    logo {
      asset->{
        url
      }
    },
    socialLinks {
      whatsapp,
      youtube,
      instagram,
      email
    }
  }
`);
