export default function Small_Banner() {
  return (
    <div className="SmallBanner flex w-[1440px] h-[600px]">
      <div className="LeftBanne w-[720px] h-[600px] flex-wrap">
        <div className="WideSquare flex">
          <img
            src="/Images/PlayStation.png"
            alt="Play Station"
            className="PlayStation w-[360px] h-[343px] "
          ></img>
          <div className="Content mt-[100px]">
            <h2 className="Heading font-medium text-[46px]">Playstation 5</h2>
            <p className="Para1 text-[14px] opacity-70 w-[328px]">
              Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
              will redefine your PlayStation experience.
            </p>
          </div>
        </div>
        <div className="Squares flex">
          <div className="SquareBanner1 flex bg-[#EDEDED] w-[360px] h-[272px]">
            <div className="AirPods w-[104px] h-[272px]">
              <img src="/Images/AppleAirpods.png" alt="Air Pods"></img>
            </div>
            <div className="Content gap-y-[8px] pl-14 pr-8 mt-11">
              <h2 className="H2 text-[29px] w-[160px] h-[143px] font-light">
                Apple AirPods <br />
                <b className="B font-medium">Max</b>
              </h2>
              <p className="Para2 text-[14px] opacity-70 w-[160px] h-[48px]">
                Computational audio. Listen, it's powerful
              </p>
            </div>
          </div>
          <div className="SquareBanner2 flex w-[360px] h-[272px] bg-[#353535] text-white">
            <div className="VisionProImg w-[136px] h-[190px] mt-10">
              <img src="/Images/VisionPro.png"></img>
            </div>
            <div className="Content w-[160px] h-[80px] pl-6 pr-2 mt-14 gap-y-[8px]">
              <h2 className="H3 text-[29px] font-light">
                Apple Vision <b className="Pro font-medium">Pro</b>
              </h2>
              <p className="Para text-[14px] opacity-70">
                An immersive way to experience entertainment
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="BigBanner w-[720px] h-[615px] bg-[#EDEDED] gap-x-1 pl-[56px] pt-[50px] pb-[44px] flex">
        <div className="Content w-[360px] h-[272px] gap-y-[16px] mr-2 mt-[100px]">
          <h2 className="HMA font-thin text-[64px] gap-y-1 leading-[60px]">
            Macbook <br />
            <b className="B font-medium">Air</b>
          </h2>
          <p className="Para h-[72px] w-[360px] text-[14px] opacity-70 mt-14 mb-2">
            The new 15‑inch MacBook Air makes room for more
            <br /> of what you love with a spacious Liquid Retina
            <br /> display.
          </p>
          <button className="Button w-[191px] h-[56px] outline outline-black outline-1 px-[56px] py-[16px]  rounded-[6px]">
            Shop Now
          </button>
        </div>
        <div className="MacBook w-[292px] h-[502px]">
          <img src="/Images/MacBook Pro 14.png" alt="MacBook Pro 14"></img>
        </div>
      </div>
    </div>
  );
}
