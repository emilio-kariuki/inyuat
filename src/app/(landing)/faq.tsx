import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { monasans } from "@/lib/fonts";
import { Element } from "react-scroll";

const faq = [
  {
    question: "What is Inyuat Farm Fresh?",
    answer:
      "Inyuat Farm Fresh was founded in 2010 with the goal of providing the world with the best quality fruits and vegetables. We are a family-owned business that is dedicated to providing our customers with the freshest home. We are a family-owned business that is dedicated to providing our customers with the freshest home.  We are a family-owned business that is dedicated to providing our customers with the freshest home.  ",
  },
  {
    question: "How do I place an order?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered",
  },
  {
    question: "How do I track my order?",
    answer:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
  },
];

export function FAQ() {
  return (
    <Element name="faq">
      <div className="flex flex-col justify-center items-center px-6 my-20 lg:my-60 lg-40 md:my-60 md:mb-40 h-1/2 w-full md:w-2xl lg:w-2xl">
        <h2
          className={`text-[30px] font-normal max-w-[980px] text-center ${monasans.className}`}
        >
          Frequently Asked Questions
        </h2>
        <h4
          className={`text-[16px] font-normal max-w-2xl text-center mt-5 text-[#677085] ${monasans.className}`}
        >
          Here are some of the most commonly asked questions about Inyuat Farm
          Fresh, please feel free to contact us.
        </h4>
        <div className="mt-10 w-full max-w-[980px] ">
          <Accordion type="single" collapsible>
            {faq.map((item, index) => {
              return (
                <AccordionItem value={item.question} key={index}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </Element>
  );
}
