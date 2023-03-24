import TerraformImg from '../assets/terraform-icon.svg';
import CircleCIImg from '../assets/circleci.svg';
import CSharpImg from '../assets/c-sharp.svg';
import DotnetImg from '../assets/dotnet.svg';
import TypeScriptImg from '../assets/typescript-icon.svg';
import PythonImg from '../assets/python.svg';
import ElixirImg from '../assets/elixir-original.svg';
import RustImg from '../assets/rust.svg';
import ReactImg from '../assets/react.svg';

const Skill = () => {
  return (
    <section className='bg-primary text-white px-5 py-32' id='skill'>
      <div className='container mx-auto grid md:grid-cols-2 items-center md:justify-between'>
        <div className="skill-info mb-5">
          <h2 className='text-4xl font-bold mb-5 border-b-[5px] w-[80px] pb-2 border-[#FF9036]'>
            Skill
          </h2>

          <p className='pb-5'>
            バックエンドの技術志向が高いです。<br />
            得意な言語は、Python・TypeScript・C#ですが、RustやElixirにはポテンシャルを感じており、個人的に勉強しています。
          </p>
          <h3 className='text-2xl font-bold mb-5 border-b-[3px] w-[110px] pb-2 border-[#FF9036]'>
            Language
          </h3>
          <div className="container mx-auto grid grid-cols-6">
            <div>
              <img src={PythonImg} className="p-3"></img>
            </div>
            <div>
              <img src={TypeScriptImg} className="p-3"></img>
            </div>
            <div>
              <img src={CSharpImg} className="p-3"></img>
            </div>
            <div>
              <img src={ElixirImg} className="p-3"></img>
            </div>
            <div>
              <img src={RustImg} className="p-3"></img>
            </div>
          </div>

          <h3 className='text-2xl font-bold mb-5 border-b-[3px] w-[130px] pb-2 border-[#FF9036]'>
            Framework
          </h3>
          <div className="container mx-auto grid grid-cols-6">
            <div>
              <img src={TerraformImg} className="p-3"></img>
            </div>
            <div>
              <img src={CircleCIImg} className="p-3"></img>
            </div>
            <div>
              <img src={ReactImg} className="p-3"></img>
            </div>
            <div>
              <img src={DotnetImg} className="p-3"></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
