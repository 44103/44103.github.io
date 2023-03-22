import VtrImg from '../images/vtr.png';

const Home = () => {
  return (
    <section className='bg-primary text-white px-5 py-32'>
      <div className='container mx-auto grid md:grid-cols-2 items-center jusify-center md:justify-between'>
        <div className="home-info pb-5 md:pb-0">
          <h1 className='text-4xl lg:text-6xl'>
            Hi, <br />
            I'm <span className='text-accent'>K</span>enko <br />
            Backend Developer
          </h1>

          <p className='py-5'>福岡県出身 東京都在住。どんな技術にも猪突猛進に取り組みます（亥年・牡牛座）。</p>
          <a href="/#about" className='btn bg-accent border-2 border-[#FF9036] text-white px-6 py-3 hover:bg-transparent'>See Projects</a>
        </div>

        <div className="home-img">
          <img src={VtrImg} alt="icon illustration" className='rounded-full w-[80%] ml-auto' />
        </div>
      </div>
    </section>
  );
};

export default Home;
