"use client";
import React, { useRef, useState } from "react";
import { Editor as TinyMCEEditor } from "@tinymce/tinymce-react";

const MyComponent: React.FC = () => {
  const editorRef = useRef<TinyMCEEditor | null>(null);
  const [htmlContent, setHtmlContent] = useState<string | null>(null);

  const logContent = () => {
    if (editorRef.current) {
      const content = editorRef.current.getContent();
      setHtmlContent(content);
    }
  };

  return (
    <div>
      <TinyMCEEditor
        onInit={(evt, editor) => (editorRef.current = editor)}
        apiKey="2t68xf3j1yezzrjxs5jiw5csm05o6g072fmq5rbcdlrts13p"
        init={{
          plugins:
            "lists advlist autosave code autoresize charmap accordion anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown latex",
          toolbar:
            "mathjax | code | charmap | restoredraft | anchor | undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat | accordion | latex",
          tinycomments_mode: "embedded",
          external_plugins: {
            mathjax:
              "../../../../node_modules/@dimakorotkov/tinymce-mathjax/plugin.min.js",
          },
          mathjax: {
            lib: "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js", //required path to mathjax
            //symbols: {start: '\\(', end: '\\)'}, //optional: mathjax symbols
            //className: "math-tex", //optional: mathjax element class
            //configUrl: '/your-path-to-plugin/@dimakorotkov/tinymce-mathjax/config.js' //optional: mathjax config js
          },
          tinycomments_author: "Author name",
          mergetags_list: [
            { value: "First.Name", title: "First Name" },
            { value: "Email", title: "Email" },
          ],
          ai_request: (request, respondWith) =>
            respondWith.string(() =>
              Promise.reject("See docs to implement AI Assistant")
            ),
          min_height: 400,
          max_height: 1000,
        }}
        initialValue="Welcome to TinyMCE!"
      />
      <button onClick={logContent}>Log Content</button>
      {htmlContent && (
        <div>
          <h3>HTML Content:</h3>
          <pre>{htmlContent}</pre>
        </div>
      )}
    </div>
  );
};

export default MyComponent;
