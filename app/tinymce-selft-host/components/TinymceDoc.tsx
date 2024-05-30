import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

const App = () => {
  const [editorContent, setEditorContent] = useState("");
  console.log("🚀 ~ App ~ editorContent:", editorContent);

  const handleEditorChange = (content, editor) => {
    console.log("🚀 ~ handleEditorChange ~ content:", content);
    setEditorContent(content);
  };

  return (
    <div>
      <h1>Editor 1</h1>
      <Editor
        tinymceScriptSrc="/assets/libs/tinymce/tinymce.min.js"
        initialValue="<p>This is the initial content of the editor</p>"
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
          content_css: "../../globals.css",
        }}
        onEditorChange={handleEditorChange}
      />

      <Editor
        tinymceScriptSrc="/assets/libs/tinymce/tinymce.min.js"
        initialValue="<p>This is the initial content of the editor</p>"
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
          content_css: "../../globals.css",
        }}
        onEditorChange={handleEditorChange}
      />
      <h1>Editor 2</h1>
      <Editor
        tinymceScriptSrc="/assets/libs/tinymce/tinymce.min.js"
        value={editorContent}
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
          content_css: "../../globals.css",
        }}
        onEditorChange={handleEditorChange}
      />
    </div>
  );
};

export default App;
