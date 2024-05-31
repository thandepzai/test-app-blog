"use client";
import { Editor } from "@tinymce/tinymce-react";
import { MathJax } from "better-react-mathjax";
import React, { useRef, useEffect, useState } from "react";



export function CustomEditor(props) {
  const editorRef = useRef(null);
  const [htmlContent, setHtmlContent] = useState<string | null>(null);

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
          content_style: `
            body { line-height:1 }
            @import url('../../abc.css');
          `,
          content_css: ["_next/static/css/app/layout.css"],
          body_class: "prose max-w-full p-2 focus:border-none",
        }}
        onEditorChange={handleEditorChange}
      />
      <button onClick={logContent}>Log Content</button>
      {htmlContent && (
        <MathJax>
          <article
            className="prose"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </MathJax>
      )}
      {/* {htmlContent && (
        <iframe className="w-full h-auto" srcDoc={htmlContent} />
      )} */}
    </div>
  );
}
