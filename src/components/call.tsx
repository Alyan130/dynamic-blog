import Image from "next/image";
import pic from "/contact-helpdesk-customer-service-spaceship-graphic-concept.jpg"
import Link from "next/link";
export default function Cta(){
 return(
    <section className="w-full p-[15px] bg-gradient-to-r from-[#00264F] to-[#002047] flex items-center flex-row justify-evenly p-5 py-12 mt-[-12px] flex-wrap">
    <div className="w-[500px] text-left">
      <h2 className="text-white font-bold text-[28px] leading-[40px] mb-5">Ready to Start Your Adventure? <br/> Contact Us Today!</h2>
      <p className="text-white text-[16px] leading-[30px] mb-6">Whether you’re planning a weekend getaway, a dream vacation, or a cross-country expedition, we’re here to help you every step of the way. Reach out to our travel experts for personalized recommendations, travel tips, or any questions you may have.</p>
      <Link href={"/contact"}><button className="w-[170px] bg-transparent border-2 border-white p-3 rounded-[25px] text-white hover:bg-blue-900">Contact now</button></Link>
      </div>
      <div className="py-12 mr-2 md:py-10 md:mr-0">
     <Image src={"/contact-helpdesk-customer-service-spaceship-graphic-concept.jpg"} width={550} height={200} alt="" className="w-[550px]"></Image>
      </div>
    </section>
 );
}