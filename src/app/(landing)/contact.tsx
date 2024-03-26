import { monasans, quicksand } from "@/lib/fonts";
import { Element } from "react-scroll";
import Link from 'next/link'
import { ArrowUpRight, ArrowDownFromLine } from "lucide-react";


export default function ContactSection() {
    return (
        <Element name="contact">
            <section>
                <div className="flex flex-row justify-center items-center  bg-white">
                    <div className="flex flex-col p-10 ">
                        <h1 className="text-7xl font-bold text-black">Let's get<br></br>in touch</h1>

                        <p className="font-bold text-2xl mt-20">Don't be afraid to say hello to us</p>

                        <p className="mt-8 text-gray-500" >Phone</p>
                        <p className="font-semibold">+(254) 7686 44556</p>

                        <p className="mt-8  text-gray-500">Email</p>
                        <p className="font-semibold">info@inyuatfarmfresh@gmail.com</p>

                        <p className="mt-8 text-gray-500">Office</p>
                        <p className="font-semibold">Address: Airport North Rd,<br></br>Nairobi, Kenya</p>
                        <Link href="https://www.google.com/maps/place/Panier+Vert+Fruits+and+Vegetables/@-1.319241,36.905432,14z/data=!4m6!3m5!1s0x182f13214568e0e5:0xb6e0c331012d2323!8m2!3d-1.3192414!4d36.9054322!16s%2Fg%2F11ts01f9sd?hl=en&entry=ttu" style={{
                            textDecoration: 'underline',
                            color: 'black',
                            fontSize: 15,
                        }}> <div className="flex gap-1"> 
                                <p>See on Google Maps</p>
                                <ArrowUpRight size={20} />
                            </div> </Link>



                    </div>
                    <div className="w-2 bg-slate-400 h-full">

                    </div>
                    <div className="flex bg-slate-200 ">

                    </div>
                </div>

            </section>
        </Element>

    )
}