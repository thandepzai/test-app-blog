"use client";
import { Editor } from "@tinymce/tinymce-react";
import React, { useRef, useEffect, useState } from "react";

const loadMathJax = () => {
  const script = document.createElement("script");
  script.src = "/assets/plugins/mathjax/es5/tex-mml-chtml.js";
  script.async = true;
  document.head.appendChild(script);
};

const useMathJax = () => {
  useEffect(() => {
    loadMathJax();
  }, []);
};

export function CustomEditor(props) {
  const editorRef = useRef(null);
  const [htmlContent, setHtmlContent] = useState<string | null>(null);

  useMathJax(); // Call the useMathJax hook to load MathJax

  useEffect(() => {
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }, [htmlContent]);

  const logContent = () => {
    if (editorRef.current) {
      const content = editorRef.current.getContent();
      setHtmlContent(content);
    }
  };

  useEffect(() => {
    // Clean up function to ensure no memory leaks
    return () => {
      if (editorRef.current) {
        editorRef.current.remove();
        editorRef.current = null;
      }
    };
  }, []);

  const handleEditorChange = (content, editor) => {
    console.log("🚀 ~ handleEditorChange ~ content:", content);
  };

  return (
    <div>
                <div className="off-css"><h1>đấ</h1> <h2>dsadasdasd</h2></div>

      <Editor
        tinymceScriptSrc="/assets/libs/tinymce/tinymce.min.js"
        onInit={(evt, editor) => (editorRef.current = editor)}
        value={props.content}
        init={{
          height: 500,
          menubar: true,
          plugins: [
            "code",
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          external_plugins: {
            mathjax: "/assets/plugins/tinymce-mathjax/plugin.min.js",
          },
          mathjax: {
            lib: "/assets/plugins/mathjax/es5/tex-mml-chtml.js",
            symbols: {
              start: "\\(",
              end: "\\)",
            },
          },
          toolbar:
            " undo redo | blocks | " +
            "bold italic forecolor backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "mathjax code removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
        onEditorChange={handleEditorChange}
      />
      <button onClick={logContent}>Log Content</button>
      {htmlContent && (
        <div>
          <h3>HTML Content:</h3>
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
      )}
    </div>
  );
}
