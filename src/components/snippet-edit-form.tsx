"use client";

import * as actions from "@/actions";

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

  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code);
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

      {/* Option 1 */}
      <form action={editSnippetAction} className="mt-2">
        <button type="submit" className="p-2 border rounded">
          Save
        </button>
      </form>
    </div>
  );
};

export default SnippetEditForm;
