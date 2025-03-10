import Navbar from "./navbar";

export default function Header() {
  return (
    <>
      <header className="fixed backdrop-blur-[2px] top-0 w-screen bg-transparent min-h-20 flex flex-row flex-nowrap items-center justify-between px-8 z-50">
        <div className="">NexponentUI logo</div>
        {/* <div>NavBar</div> */}
        <Navbar />
      </header>
    </>
  );
}
