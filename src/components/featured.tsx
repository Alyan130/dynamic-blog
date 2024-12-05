
import Image from "next/image";
import blogs from "@/blog/data"
import Link from "next/link";

export default function Featured() {
  const featuredBlogs = blogs.slice(0, 3);

  return (
    <section className="bg-gray-200 py-[60px] flex items-center flex-col w-full"> 
      <h1 className="text-center text-[25px] font-bold text-gray-700 mb-1">FEATURED BLOGS</h1>
      <h2 className="text-center text-[28px] font-bold text-gray-700">Most recent blogs can be shown</h2>

      <div className="w-[100%] p-[15px] flex items-center justify-evenly flex-wrap gap-14 md:gap-8 py-[40px]">
        {featuredBlogs.map((blog) => (
          <div key={blog.id} data-aos="zoom-in" className="shadow-lg w-[370px] p-[12px] bg-white flex flex-col items-center rounded-[10px]">
            <Image
              src={blog.imageSrc}
              alt={blog.altText}
              width={350}
              height={210}
              className="w-[350px] h-[210px] rounded-[8px]"
            />
            <h3 className="text-[20px] font-bold mt-5">{blog.title}</h3>
            <p className="text-[16px] mt-4 leading-[26px]">{blog.description}</p>
            <Link href={`/blogs/${blog.id}`}>
              <button className="text-[16px] font-bold text-white bg-blue-500 rounded-[25px] w-[170px] py-2 mt-4 hover:bg-blue-700">
                Read more
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
