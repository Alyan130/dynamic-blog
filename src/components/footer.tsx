
export default function Footer(){
    return(
        <footer className="w-full bg-slate-300 pt-10 pb-2">
        <div className="ml-4 md:ml-16">
         <h2 className="text-[25px] font-bold">Explore More with Us</h2>
         <p className="text-[16px]  mb-6">Stay connected and never miss an adventure. Follow us for travel inspiration, tips, and stories from around the globe.</p>
         <h3 className="text-[20px] font-boldext-[20px] font-bold">Quick links</h3>
         <ul className="text-[16px] mb-5">
            <li>Home</li>
            <li>Blogs</li>
            <li>Contact us</li>
         </ul>
         <h3 className="text-[20px] font-bold">Follow</h3>
         <ul className="text-[16px] mb-12">
            <li>Facebook</li>
            <li>Github</li>
            <li>Linkedin</li>
         </ul>
    <p className="text-[16px] font-bold text-center mr-4 md:mr-0 ">© 2024 Your Travel Blog | Designed with ❤ for explorers like you</p>
        </div>
        </footer>
    );
}