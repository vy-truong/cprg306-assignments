import Link from "next/link";
 
export default function Home() {
  return (
      <main>
        <h1>CPRG 306:  Web Development 2 - Assignments</h1>
        <div>
          <Link className="underline text-cyan-600 hover:text-cyan-300" href="./week-2">Week 2 Assignment</Link>
        </div>
        <div>
          <Link className="underline text-cyan-600 hover:text-cyan-300" href="./week-3">Week 3 Assignment</Link>
        </div>

        <div>
          <Link className="underline text-cyan-600 hover:text-cyan-300" href="./week-4">Week 4 Assignment</Link>
        </div>
      </main>
  );
}