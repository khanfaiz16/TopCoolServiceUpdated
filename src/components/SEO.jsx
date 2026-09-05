import { useEffect } from 'react';

export default function SEO({ title, description, keywords }) {
  useEffect(() => {
    if (title) {
      document.title = `${title} | Top Cool Service Mumbai`;
    }
    
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      }
    }

    if (keywords) {
      let metaKey = document.querySelector('meta[name="keywords"]');
      if (metaKey) {
        metaKey.setAttribute('content', keywords);
      }
    }
  }, [title, description, keywords]);

  return null;
}