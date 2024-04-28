"use server";

import { db } from "@/db";
import { redirect } from "next/navigation";

export async function editSnippet(id: number, code: string) {
  //   console.log("Edit Snippet triggered", id, code);
  await db.snippets.update({
    where: { id },
    data: { code },
  });
  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippets.delete({
    where: { id },
  });
  redirect(`/`);
}
