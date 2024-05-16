import Link from "next/link";


export default function StudentInfo() {

    const name = "Vy Truong";
    const gitHub = "https://github.com/vy-truong/cprg306-assignments";
    return (
        <main>
            <h1>{name}</h1>
            <p>Vy pronounces as the letter V</p>
            {/* <Link className="underline text-cyan-600  hover:text-cyan-300" href={gitHub}>My GitHub repository</Link> */}
            <Link  href={gitHub} className="underline text-cyan-600  hover:text-cyan-300">My GitHub repository</Link>
        </main>
       
    );
}