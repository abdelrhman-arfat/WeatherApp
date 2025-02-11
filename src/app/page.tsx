import Navbar from "./_Components/navbar/Navbar";
import MainSection from "./_Components/sections/MainSection";

export default function Home() {
  return (
    <div className="w-full min-h-screen py-8 px-4 ">
      <Navbar />
      <MainSection />
    </div>
  );
}
