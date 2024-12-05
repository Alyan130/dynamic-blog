import Link from "next/link";

export default function Hero() {
  return (
        <>
      <section className="bg-[url('https://images.unsplash.com/photo-1534609200248-c73305824a85?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover w-[100%] h-[650px] flex items-center justify-center">
      <div className="text-center mb-16">
        <h1 className="text-white text-[26px] font-bold mb-5 md:text-[35px] md:leading-[42px]">TRAVEL BLOGS</h1>
        <p className="text-white text-[24px] leading-[46px] font-bold mb-[50px] md:text-[40px] md:leading-[58px] ">&quot;Discover the World with Our Travel Blogs&quot;</p>
        <Link href={"/blogs"}>
          <button className="text-[18px] text-white w-[200px] p-3 rounded-[25px] bg-transparent hover:bg-blue-900 border-2 border-white">Start your journey</button>
        </Link>
      </div>
    </section>
                 </>
  );
}
