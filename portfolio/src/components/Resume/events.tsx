import { BsTrophyFill } from "react-icons/bs";

const events = [
  {
    title: "JPHACKS 2018",
    date: "2018年10月27・28日 11月18日",
    content: (
      <>
        HACK DAY @福岡 <br />
        <a
          href="https://jphacks.com/2018/result/"
          className="text-accent underline"
        >
          AWARD DAY @東京
        </a>{" "}
        <br />
        <p className="pl-5 flex items-center">
          <BsTrophyFill className="mr-1" /> イノベーター認定
        </p>
        <p className="pl-5 flex items-center">
          <BsTrophyFill className="mr-1" /> 企業賞：AJS賞
        </p>
      </>
    ),
  },
  {
    title: "AsoAlpha Hackason",
    date: "2018年11月24・25日",
    content: (
      <>
        <p className="pl-5 flex items-center">
          <BsTrophyFill className="mr-1" /> 優勝
        </p>
      </>
    ),
  },
];

export default events;
