import { useState } from "react";
import "./Accordion.css";
import AccordionLayout from "./AccordionLayout";
import EventIcon from "@mui/icons-material/Event";

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
            <EventIcon /> {value.date} <br />
            {value.content}
          </AccordionLayout>
        );
      })}
    </div>
  );
};

export default Accordion;
