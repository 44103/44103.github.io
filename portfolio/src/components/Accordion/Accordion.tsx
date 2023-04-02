import { useState } from "react";
import "./Accordion.css";
import AccordionLayout from "./AccordionLayout";
import { MdOutlineEvent } from "react-icons/md";

const Accordion = ({
  events,
}: {
  events: { title: string; date: string; content: JSX.Element | string }[];
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col justify-center">
      {events.map((value, index) => {
        return (
          <AccordionLayout
            title={value.title}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
            <p className="flex items-center">
              <MdOutlineEvent className="mr-1 text-xl" /> {value.date} <br />
            </p>
            {value.content}
          </AccordionLayout>
        );
      })}
    </div>
  );
};

export default Accordion;
