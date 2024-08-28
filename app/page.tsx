"use client"
import DotPattern from "@/components/magicui/dot-pattern";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="text-3xl font-bold mb-10"><span className=" bg-purple-500 bg-clip-text text-transparent">Best</span> Education For All</div>
      <BackgroundBeams/>
      <PlaceholdersAndVanishInput placeholders={["hello","hii"]} onChange={()=>{}} onSubmit={()=>{}} />

    </main>
  );
}
