"use client";
import { Editor } from "@tinymce/tinymce-react";
import React, { useRef } from "react";

export default function TinymcePage() {
  const editorRef = useRef(null);
  return (
    <div>
      <div className="hidden"></div>
      <Editor
        apiKey="2t68xf3j1yezzrjxs5jiw5csm05o6g072fmq5rbcdlrts13p"
        init={{
          plugins:
            "autosave accordion anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown",
          toolbar:
            "restoredraft | anchor | undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat | accordion",
          tinycomments_mode: "embedded",
          tinycomments_author: "Author name",
          mergetags_list: [
            { value: "First.Name", title: "First Name" },
            { value: "Email", title: "Email" },
          ],
          ai_request: (request, respondWith) =>
            respondWith.string(() =>
              Promise.reject("See docs to implement AI Assistant")
            ),
          // min_height: 400,
          // max_height: 1000,
        }}
        // toolbar={"accordion"}
        initialValue="Welcome to TinyMCE!"
      />
    </div>
  );
}
