import { monasans, quicksand } from "@/lib/fonts";
import { Element } from "react-scroll";


export default function ContactSection(){
    return(
        <Element name="contact">
            <section>
                <div className="flex flex-col">
                    <h1 className="font-bold text-black">Let's get <br>in touch</br></h1>
                    <p>Don't be afraid to say hello to us</p>

                    <p className="mt-6">Phone</p>
                    <p>+254 7686 44556</p>

                    <p className="mt-6">Email</p>
                    <p>inyuat@gmail.com</p>

                    <p className="mt-6">Office</p>
                    

                </div>
            </section>
        </Element>

    )
}