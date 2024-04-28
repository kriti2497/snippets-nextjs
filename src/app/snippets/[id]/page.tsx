import * as actions from "@/actions";

import Link from "next/link";
import React from "react";
import { db } from "@/db";
import { notFound } from "next/navigation";

interface SnippetDetailProps {
  params: {
    id: string;
  };
}

const SnippetDetails = async (props: SnippetDetailProps) => {
  // adding artificial delay to test loading screen
  // comment it out
  await new Promise((r) => setTimeout(r, 2000));
  const snippet = await db.snippets.findFirst({
    where: {
      id: +props.params.id,
    },
  });

  if (!snippet) return notFound();
  const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id);
  return (
    <div className="py-8 px-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-bold text-xl">{snippet.title}</h1>
        <div className="flex items-center gap-4">
          <Link
            href={`/snippets/${snippet.id}/edit`}
            className="rounded border p-2"
          >
            Edit
          </Link>
          <form action={deleteSnippetAction}>
            <button type="submit" className="rounded border p-2">
              Delete
            </button>
          </form>
        </div>
      </div>
      <pre className="rounded border border-gray-400 p-3 bg-slate-200">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
};

export default SnippetDetails;
