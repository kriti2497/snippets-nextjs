"use client";

import * as actions from "@/actions";

import React from "react";
import { db } from "@/db";
import { redirect } from "next/navigation";
import { useFormState } from "react-dom";

const NewSnippet = () => {
  const [formState, action] = useFormState(actions.createNewSnippet, {
    message: "",
  });
  return (
    <form action={action} className="py-10">
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

        {formState.message && (
          <div className="bg-red-300 text-red-700 p-2 border rounded">
            {formState.message}
          </div>
        )}

        <button className="bg-slate-600 text-white px-5 py-3" type="submit">
          Create
        </button>
      </div>
    </form>
  );
};

export default NewSnippet;
