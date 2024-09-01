import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-5 items-center justify-center text-center mt-32">
        <h2 className="text-[#ebebeb] text-3xl md:text-4xl lg:text-6xl font-semibold">
          Speak Your Mind <br /><span className="bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text">Anonymously</span>,<br />Connect with Campus
        </h2>
        <h2 className="w-full md:w-2/3 lg:w-1/3 text-[#a1a1a1] mt-5 opacity-60">
        A safe space to voice your thoughts and experiences.
        Share your feelings, discuss campus life, and connect with others anonymously.
        </h2>
        <Link href="/confessions"><button className="text-white px-3 py-1 rounded-full font-bold border-[0.5px] border-gray-500 bg-[#fafafa]"><span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">See Confessions</span></button></Link>
      </div>
      <div>
      </div>
    </>
  );
}
