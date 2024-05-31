"use client";

import React from "react";
import { CustomEditor } from "./components";
import { MathJax, MathJaxContext } from "better-react-mathjax";

export default function page() {
  return (
    <div className="mx-40">
      <MathJaxContext>
          <CustomEditor />
      </MathJaxContext>
    </div>
  );
}
