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

export async function createNewSnippet(
  formState: { message: string },
  formData: FormData
) {
  try {
    // Make sure the inputs in form are valid

    const title = formData.get("title");
    const code = formData.get("code");

    if (typeof title !== "string" || title.length <= 0) {
      return {
        message: "Title is a required field",
      };
    }

    if (typeof code !== "string" || code.length <= 0) {
      return {
        message: "Code is a required field",
      };
    }

    // Create a new record in DB

    const snippet = await db.snippets.create({
      data: {
        title,
        code,
      },
    });

    // throw new Error("Failed to save to DB!");

    console.log(snippet);
  } catch (error) {
    if (error instanceof Error) {
      return {
        message: error.message,
      };
    } else {
      return {
        message: "Something went wrong",
      };
    }
  }
  // navigate user to home page upon successful submission

  redirect("/");
}
