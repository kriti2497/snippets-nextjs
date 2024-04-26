import Link from "next/link";
import { db } from "@/db";

export default async function Home() {
  const snippetsData = await db.snippets.findMany();

  const renderedSnippets = snippetsData.map((eachSnippet) => (
    <Link
      href={`/snippets/${eachSnippet.id}`}
      key={eachSnippet.id}
      className="flex items-center justify-between p-2 rounded-md border-black gap-4 border-2"
    >
      <div>{eachSnippet.title}</div>
      <button>View</button>
    </Link>
  ));
  return (
    <div>
      <div className="flex  items-center justify-between p-5">
        <div>Snippets List</div>
        <Link
          href={`/snippets/new`}
          className="rounded-md border-black p-2 border-2"
        >
          Create
        </Link>
      </div>
      <div className="flex flex-col gap-4 p-5">{renderedSnippets}</div>
    </div>
  );
}
