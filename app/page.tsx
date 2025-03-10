import Demo from "@/components/demo";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="w-screen flex flex-col items-center justify-center min-h-screen">
      <Hero />
      <Demo />
    </div>
  );
}
