import Link from "next/link";
import MyFirstComponent from "./_components/my-first-component";

export default function Home() {
  return (
    <main>
      <h1>CPRG306 Class Examples</h1>
      <p>Hello World!</p>
      <MyFirstComponent />
      <h2>Example Links</h2>
      <ul>
        <li>
          <Link className="underline text-cyan-600 hover:text-cyan-300" href="./week-2/">
            Week 2 Content
          </Link>
        </li>
        <li>
          <Link className="underline text-cyan-600 hover:text-cyan-300" href="./week-3/" >
            Week 3 Content
          </Link>
        </li>
      </ul>
    </main>
  );
}
