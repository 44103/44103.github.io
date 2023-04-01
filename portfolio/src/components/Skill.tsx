import TerraformImg from "../assets/terraform-icon.svg";
import CircleCIImg from "../assets/circleci.svg";
import CSharpImg from "../assets/c-sharp.svg";
import DotnetImg from "../assets/dotnet.svg";
import TypeScriptImg from "../assets/typescript-icon.svg";
import PythonImg from "../assets/python.svg";
import ElixirImg from "../assets/elixir-original.svg";
import RustImg from "../assets/rust.svg";
import ReactImg from "../assets/react.svg";

const Skill = () => {
  return (
    <section className="bg-primary text-white px-5 py-32" id="skill">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="skill-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[80px] pb-2 border-[#FF9036]">
            Skill
          </h2>

          <p className="pb-5">
            バックエンドの技術志向が高いです。
            <br />
            得意な言語は、Python・TypeScript・C#ですが、RustやElixirにはポテンシャルを感じており、個人的に勉強しています。
          </p>
          <h3 className="text-2xl font-bold mb-5 border-b-[3px] w-[110px] pb-2 border-[#FF9036]">
            Language
          </h3>
          <div className="container mx-auto grid grid-cols-6">
            <div>
              <img src={PythonImg} alt="icon Python" className="p-3"></img>
            </div>
            <div>
              <img
                src={TypeScriptImg}
                alt="icon TypeScript"
                className="p-3"
              ></img>
            </div>
            <div>
              <img src={CSharpImg} alt="icon C#" className="p-3"></img>
            </div>
            <div>
              <img src={ElixirImg} alt="icon Elixir" className="p-3"></img>
            </div>
            <div>
              <img src={RustImg} alt="icon Rust" className="p-3"></img>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-5 border-b-[3px] w-[130px] pb-2 border-[#FF9036]">
            Framework
          </h3>
          <div className="container mx-auto grid grid-cols-6">
            <div>
              <img
                src={TerraformImg}
                alt="icon Terraform"
                className="p-3"
              ></img>
            </div>
            <div>
              <img src={CircleCIImg} alt="icon CircleCI" className="p-3"></img>
            </div>
            <div>
              <img src={ReactImg} alt="icon React" className="p-3"></img>
            </div>
            <div>
              <img src={DotnetImg} alt="icon .NET" className="p-3"></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
