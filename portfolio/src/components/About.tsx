const About = () => {
  return (
    <section className="bg-secondary text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[170px] pb-2 border-[#FF9036]">
            About Me
          </h2>

          <p className="pb-5">
            福岡県出身、東京都在住。亥年・牡牛座なだけあって、どんな技術にも猪突猛進に取り組みます。
          </p>

          <p className="pb-5">
            ガジェット集めが趣味の一つで、最近は自作キーボードを作りました。
            <br />
            Arch Linux + i3wm + Vimium + VSCodeで9割の操作はキーボードのみです。
          </p>

          <p className="pb-5">
            環境構築に苦しむのは嫌なので、軽量で他のマシンでも再現性のあるDockerに興味をもち、個人ではすべての開発環境をDockerで用意しています。
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
