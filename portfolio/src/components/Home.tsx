import VtrImg from "../assets/vtr-alpha.png";

const Home = () => {
  return (
    <section className="bg-primary text-white px-5 py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center jusify-center md:justify-between">
        <div className="home-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl mb-10">
            Hi, <br />
            I'm <span className="text-accent">K</span>enko <br />
            Backend Developer
          </h1>

          <a
            href="/#about"
            className="btn bg-accent border-2 border-[#FF9036] text-white px-6 py-3 hover:bg-transparent"
          >
            See About Me
          </a>
        </div>

        <div className="home-img">
          <img
            src={VtrImg}
            alt="icon illustration"
            className="w-[80%] ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
