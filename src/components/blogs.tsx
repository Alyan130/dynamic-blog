import Image from "next/image";
import blogs from "@/blog/data";
import Link from "next/link";

export default function ShowBlogs() {
    return (
      <section className="bg-gray-100 py-20 w-full">
        <div className="pt-5 md:py-20 md:ml-32 ml-4 mb-16">
          <h2 className="text-[28px] md:text-[38px] font-bold mb-5">TRAVEL</h2>
          <p className="text-[16px] md:text-[20px]">
            <i>&quot;Traveling – it leaves you speechless, then turns you into a storyteller.&quot;</i>
          </p>
        </div>
  
        <div className="flex flex-col items-center gap-14 md:gap-10 px-4">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              data-aos="fade-right"
              className="flex flex-col p-2 rounded-[5px] w-full md:w-[660px] lg:w-[1000px] bg-white shadow-md"
            >
              <Image
                src={blog.imageSrc}
                alt={blog.title}
                width={660}
                height={400}
                className="w-full rounded-t-[5px] md:w-[660px] md:h-[400px] lg:w-[1000px] lg:h-[600px]"
              />
              <div className="p-5">
                <h3 className="text-[18px] md:text-[22px] font-bold mt-3 text-left">
                  &quot;{blog.title}&quot;
                </h3>
                <p className="text-[14px] md:text-[16px] mt-4 leading-[25px]">
                  {blog.description}
                  <br />
                  <Link href={`/blogs/${blog.id}`} className="hover:text-blue-800 text-blue-600">
                    Continue reading...
                  </Link>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }