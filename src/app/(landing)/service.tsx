import { monasans } from "@/lib/fonts";
import {Element} from "react-scroll";


export function ServiceSection(){
    return(
        <Element name="service">
            <section>
                <div className="flex bg-[#004D3F] p-16 w-full items-center justify-center">
                    <h3 className={`font-semibold text-[40px] text-white ${monasans.className}`}>We offer a wide range of products</h3>

                </div>

            </section>

        </Element>
        
    );
}