"use client";

import Editor from "@monaco-editor/react";

export default function JsonEditor({ value, onChange }: any) {
  return (
    <div className="h-full border rounded-lg overflow-hidden">
      <Editor
        height="100%"
        defaultLanguage="json"
        value={value}
        onChange={(val) => onChange(val)}
        theme="vs-dark"
      />
    </div>
  );
}