"use client";
import React, { useEffect, useRef } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
// import Paragraph from "@editorjs/paragraph";
import Paragraph from "editorjs-paragraph-with-alignment";
import LinkTool from "@editorjs/link";
import ToggleBlock from "editorjs-toggle-block";

const EditorComponent: React.FC = () => {
  const editor = new EditorJS({
    holder: "editorjs",
    tools: {
      header: {
        class: Header,
        shortcut: "CMD+SHIFT+H",
        inlineToolbar: true,
        config: {
          placeholder: "Enter header",
          levels: [1, 2, 3, 4, 5, 6],
          defaultLevel: 3,
          defaultAlignment: "left",
        },
      },
      paragraph: {
        class: Paragraph,
        inlineToolbar: true,
      },
      linkTool: {
        class: LinkTool,
        config: {
          fetchData: async (url: string) => {
            // Chuyển đổi URL thành oEmbed API endpoint
            const apiUrl = `https://www.youtube.com/oembed?url=${encodeURIComponent(
              url
            )}&format=json`;

            const response = await fetch(apiUrl);
            const data = await response.json();

            return {
              success: 1,
              meta: {
                title: data.title,
                description: data.author_name,
                image: data.thumbnail_url,
              },
            };
          },
        },
      },
      toggle: {
        class: ToggleBlock,
        inlineToolbar: true,
      },
      //   list: List,
    },
    data: {
      blocks: [
        {
          type: "header",
          data: {
            text: "Editor.js in React with TypeScript and TailwindCSS",
            level: 1,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "This is a sample paragraph. You can add your content here.",
          },
        },
      ],
    },
  });

  return (
    <div className="container mx-auto p-4">
      <div id="editorjs" className="border border-gray-300 p-4 rounded-lg" />
      <button
        // onClick={handleSave}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Save Data
      </button>
    </div>
  );
};

export default EditorComponent;
