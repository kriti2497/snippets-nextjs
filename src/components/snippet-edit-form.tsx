"use client";

import React, { useState } from "react";

import { Editor } from "@monaco-editor/react";
import type { Snippets } from "@prisma/client";

interface SnippetEditProps {
  snippet: Snippets;
}

const SnippetEditForm = ({ snippet }: SnippetEditProps) => {
  const [code, setCode] = useState(snippet.code);

  const handleEditorChange = (value: string = "") => {
    setCode(value);
    console.log(value);
  };
  return (
    <div className="py-8 px-5">
      <Editor
        height="30vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default SnippetEditForm;
