import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { ReactNode, SetStateAction } from "react";

const AccordionLayout = ({
  title,
  children,
  index,
  activeIndex,
  setActiveIndex,
}: {
  title: string;
  children: ReactNode;
  index: number;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const handleSetIndex = (index: SetStateAction<number>) =>
    activeIndex !== index && setActiveIndex(index);

  return (
    <>
      <div
        onClick={() => handleSetIndex(index)}
        className={
          activeIndex === index
            ? "accordion bg-accent"
            : "accordion bg-secondary"
        }
      >
        <div className="flex">
          <div className="font-bold pl-5">{title}</div>
        </div>
        <div className="flex items-center justify-center">
          {activeIndex === index ? (
            <MdOutlineKeyboardArrowUp className="w-8 h-8" />
          ) : (
            <MdOutlineKeyboardArrowDown className="w-8 h-8" />
          )}
        </div>
      </div>
      {activeIndex === index && (
        <div className="shadow-3xl rounded-2xl shadow-cyan-500/50 p-4">
          {children}
        </div>
      )}
    </>
  );
};

export default AccordionLayout;
