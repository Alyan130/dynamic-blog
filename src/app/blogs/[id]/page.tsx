"use client";

import posts from "@/blog/post";
import CommentSection from "@/components/comment";
import Image from "next/image";
interface params{
    params:{
        id:number,
    }
}

export default function Post({params}:params){
const {id}=params;
    return(
<div className="flex flex-col items-center justify-center py-10 md:py-20 rounded-[5px] w-full">
            <Image
                src={posts[id-1].imageSrc}  
                alt={posts[id-1].altText}
                width={400}
                height={600}
                className="w-[400px] md:w-[1000px] md:h-[600px] h-[320px] object-cover"
            />
            <div className="w-full sm:w-[90%] lg:w-[1000px] bg-white p-4 sm:pl-5 flex flex-col items-start">
                <h3 className="text-[18px] sm:text-[22px] font-bold mt-6 text-left">
                    {posts[id-1].title}
                </h3>
                <p className="text-[14px] sm:text-[16px] mt-4 leading-[22px] sm:leading-[27px]">
                 {posts[id-1].description1}
                </p>
                <p className="mt-4 text-[14px] sm:text-[16px] leading-[22px] sm:leading-[27px]">
                 {posts[id-1].description2}
                </p> 
                </div>
                <CommentSection/>
            </div>
    );
}