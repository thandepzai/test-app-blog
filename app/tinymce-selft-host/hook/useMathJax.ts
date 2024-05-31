// hooks/useMathJax.js
import { useEffect } from "react";

export const useMathJax = () => {
  useEffect(() => {
    if (!window.MathJax) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "/assets/plugins/tinymce-mathjax/plugin.min.js";
      script.async = true;

      script.onload = () => {
        if (window.MathJax) {
          window.MathJax = {
            tex: {
              inlineMath: [
                ["$", "$"],
                ["\\(", "\\)"],
              ],
              displayMath: [
                ["$$", "$$"],
                ["\\[", "\\]"],
              ],
            },
            startup: {
              typeset: false,
            },
          };

          window.MathJax.startup.promise.then(() => {
            window.MathJax.typesetPromise();
          });
        }
      };

      document.head.appendChild(script);
    } else {
      window.MathJax.typesetPromise();
    }
  }, []);

  useEffect(() => {
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  });
};
