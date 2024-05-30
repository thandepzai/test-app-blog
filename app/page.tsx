"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex gap-3 mt-4 w-full items-center justify-center">
      <button
        onClick={() => router.push("/tinymce")}
        className="bg-slate-400 px-2 py-2 rounded-md"
      >
        Tinymce
      </button>
      <button
        onClick={() => router.push("/tinymce-selft-host")}
        className="bg-orange-300 px-2 py-2 rounded-md"
      >
        Tinymce-selft
      </button>

      <button
        onClick={() => router.push("/editorjs")}
        className="bg-orange-300 px-2 py-2 rounded-md"
      >
        EditorJS
      </button>
      <button
        onClick={() => router.push("/ckeditor")}
        className="bg-orange-300 px-2 py-2 rounded-md"
      >
        Ckeditor
      </button>
    </div>
  );
}
