import Hello from "../components/hello";
// or import Hello from "@/app/components/hello";

 

export default function Home() {
  console.log("What am i doing here? -- SERVER/CLINENT?");
  return (
    <>
    <Hello/>
    <h1 className="text-5xl"> Welcome to the Youtube Nextjs</h1>
    </>
  );
}
