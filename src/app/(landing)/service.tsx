import { monasans } from "@/lib/fonts";
import {Element} from "react-scroll";


export function ServiceSection(){
    return(
        <Element name="service">
            <section>
                <div className="flex flex-col bg-[#004D3F] p-16 w-full items-center justify-center">
                    <h3 className={`font-medium text-[35px] text-white ${monasans.className}`}>We offer a wide range of products</h3>
                    <h3 className={`text-[15px] font-normal max-w-3xl text-center gap-3 text-[#f9fAfA] ${monasans.className}`}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h3>

                </div>

            </section>

        </Element>
        
    );
}

function ServiceContainer(){
    return(
        <div className="flex flex-col">
          <div className="rounded-full ">
           
          </div>
        </div>

    );
}