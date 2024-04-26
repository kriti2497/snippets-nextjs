import React from "react";
import { db } from "@/db";
import { redirect } from "next/navigation";

const NewSnippet = () => {
  async function createNewSnippet(formData: FormData) {
    // This should be a server action

    "use server";

    // Make sure the inputs in form are valid

    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    // Create a new record in DB

    const snippet = await db.snippets.create({
      data: {
        title,
        code,
      },
    });

    console.log(snippet);

    // navigate user to home page upon successful submission

    redirect("/");
  }

  return (
    <form action={createNewSnippet} className="py-10">
      <h4 className="mb-5 text-2xl ">Create a snippet</h4>
      <div className="flex flex-col gap-8">
        <div className="flex gap-4">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            className="border rounded p-2 w-full"
          />
        </div>

        <div className="flex gap-4">
          <label htmlFor="code">Code</label>
          <textarea
            rows={5}
            name="code"
            id="code"
            className="border rounded p-2 w-full"
          />
        </div>

        <button className="bg-slate-600 text-white px-5 py-3" type="submit">
          Create
        </button>
      </div>
    </form>
  );
};

export default NewSnippet;
