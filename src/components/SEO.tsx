import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  type?: 'website' | 'profile' | 'article';
  schema?: Record<string, unknown>;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalPath = '',
  type = 'website',
  schema
}) => {
  useEffect(() => {
    // 1. Title
    document.title = title;

    // 2. Helper to set or create meta tag
    const setMeta = (nameAttr: 'name' | 'property', nameVal: string, content: string) => {
      let element = document.querySelector(`meta[${nameAttr}="${nameVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, nameVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMeta('name', 'description', description);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', type);

    const fullUrl = `https://adeelsajjad.engineering${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;
    setMeta('property', 'og:url', fullUrl);
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);

    // 3. Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);

    // 4. Schema JSON-LD
    let scriptTag = document.getElementById('dynamic-json-ld') as HTMLScriptElement | null;
    if (schema) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'dynamic-json-ld';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.text = JSON.stringify(schema);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [title, description, canonicalPath, type, schema]);

  return null;
};
