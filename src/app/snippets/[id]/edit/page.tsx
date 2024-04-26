import React from "react";
import SnippetEditForm from "@/components/snippet-edit-form";
import { db } from "@/db";
import { notFound } from "next/navigation";
interface SnippetProps {
  params: {
    id: string;
  };
}

const EditSnippet = async (props: SnippetProps) => {
  const id = +props.params.id;

  const snippet = await db.snippets.findFirst({
    where: {
      id,
    },
  });

  if (!snippet) return notFound();

  return <SnippetEditForm snippet={snippet} />;
};

export default EditSnippet;
