import { monasans, quicksand } from "@/lib/fonts";
import { Element } from "react-scroll";
import Link from 'next/link'
import { ArrowUpRight, ArrowDownFromLine, MoveRight } from "lucide-react";





export default function ContactSection() {
    return (
        <Element name="contact">
            <section className="relative px-1 py-20 bg-black-100 mx-20">
                <div className="flex flex-row justify-center items-end  bg-white">
                    <div className="flex flex-col p-10 mr-32">
                        <h1 className={`text-7xl font-bold text-black ${monasans.className}`}>Let's get<br></br>in touch</h1>

                        <p className={`font-bold text-2xl mt-20 ${monasans.className}`}>Don't be afraid to <br></br>say hello to us</p>

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

                    <div className="flex flex-col  border-r-[0.5px] border-l-[0.5px] border-gray-500">
                        <div className="flex flex-row justify-start items-center gap-4">
                            {<MoveRight size={100} />}

                            <p className={`${monasans.className}`}>Great! We are excited to hear from you and<br></br> let's start something special together<br></br> Reach out to us for enquiry </p>

                        </div>

                        <div>
                            <div className="bg-black  flex flex-col mt-10 py-20 px-9 mx-w-2xl rounded ">
                                <div >
                                    <p className="font-semibold text-white mb-8 text-2xl">Contact Us</p>
                                   <div className="flex flex-col gap-7">
                                   <div className="flex flex-row  justify-center items-center gap-7">
                                      <div className="border-[0.3px] border-gray rounded">
                                      <input className="rounded px-4 py-3 bg-transparent text-[14px]" type="email" placeholder="Name" />
                                      </div>
                                        
                                      <div className="border-[0.3px] border-gray rounded">
                                      <input className="rounded px-4 text-[14px] py-3 bg-transparent" type="email" placeholder="Email" />
                                      </div>                                    </div>
                                    <div className="flex flex-row  justify-center items-center gap-7 ">
                                    <div className="border-[0.3px] border-gray rounded">
                                      <input className="rounded px-4 py-3 bg-transparent text-[14px]" type="email" placeholder="Phone" />
                                      </div>                                       
                                      <div className="border-[0.3px] border-gray rounded">
                                      <input className="rounded px-4 py-3 bg-transparent text-[14px]" type="email" placeholder="Subject" />
                                      </div>

                                    </div>
                                   </div>
                                </div>

                                <div className="flex justify-center w-full items-center">
                                    <div className="flex justify-center items-center mt-8 ">
                                        <div className=" bg-[#54EA53] hover:bg-[#54d354] w-full px-16 py-3 rounded">
                                            Submit
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>


            </section>
        </Element>

    )
}