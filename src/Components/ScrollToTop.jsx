import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ offset = 0 }) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // if there's a hash (anchor), let browser handle it (or scroll to anchor)
    if (hash) {
      // remove leading '#'
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
        return;
      }
    }

    // default: scroll to top
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname, hash, offset]);

  return null;
}