import { monasans, quicksand } from "@/lib/fonts";
import { Element } from "react-scroll";
import Link from 'next/link'


export default function ContactSection(){
    return(
        <Element name="contact">
            <section>
                <div className="flex flex-col p-10 bg- bg-white">
                    <h1 className="{`fontSize:100 text-black}">Let's get in touch</h1>
                    <p>Don't be afraid to say hello to us</p>

                    <p className="mt-6">Phone</p>
                    <p>+254 7686 44556</p>

                    <p className="mt-6">Email</p>
                    <p>info@inyuatfarmfresh@gmail.com</p>

                    <p className="mt-6">Office</p>
                    <p>Address: Airport North Rd,Nairobi, Kenya</p>
                    <p ><Link href="https://www.google.com/maps/place/Panier+Vert+Fruits+and+Vegetables/@-1.319241,36.905432,14z/data=!4m6!3m5!1s0x182f13214568e0e5:0xb6e0c331012d2323!8m2!3d-1.3192414!4d36.9054322!16s%2Fg%2F11ts01f9sd?hl=en&entry=ttu">See on Google Maps</Link></p>


                </div>
            </section>
        </Element>

    )
}