export default function Banners() {
  return (
    <div className="Banners w-[1440px] h-[640px] flex">
      <div className="BigBanner1 w-[360px] gap-y-[24px] pr-[32px] pb-[56px]">
        <div className="Img1 w-[360.06px] h-[327px]">
          <img src="/Images/Group 1.png" alt="Popular Products" />
        </div>

        <div className="TT1 pl-10 ">
          <h2 className="H1 w-[296px] h-[48px] text-[33px] font-light text-black mt-10">
            Popular Products
          </h2>
          <p className="Para1 w-[296px] h-[72px] opacity-70 mt-5 mb-5">
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </p>
          <button className="B1 px-[56px] py-[16px] outline outline-black outline-1 rounded-[6px]">
            Shop Now
          </button>
        </div>
      </div>

      <div className="BigBanner2 w-[360px] gap-y-[24px] pr-[32px] pb-[56px] bg-[#F9F9F9]">
        <div className="Img2 w-[360px] h-[366px]">
          <img src="/Images/image 64.png" alt="Ipad" />
        </div>
        <div className="TT2 pl-10 ">
          <h2 className="H2 w-[296px] h-[48px] text-[33px] font-light text-black">
            Ipad Pro
          </h2>
          <p className="Para1 w-[296px] h-[72px] opacity-70 mt-5 mb-5">
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </p>
          <button className="B2 px-[56px] py-[16px] outline outline-black outline-1 rounded-[6px]">
            Shop Now
          </button>
        </div>
      </div>

      <div className="BigBanner3 w-[360px] gap-y-[24px] pr-[32px] pb-[56px] bg-[#EAEAEA]">
        <div className="Img3 w-[360px] h-[360px]">
          <img src="/Images/image 41.png" alt="Samsung Galaxy" />
        </div>
        <div className="TT3 pl-10 ">
          <h2 className="H3 w-[296px] h-[48px] text-[33px] font-light text-black">
            Samsung Galaxy
          </h2>
          <p className="Para1 w-[296px] h-[72px] opacity-70 mt-5 mb-5">
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </p>
          <button className="B3 px-[56px] py-[16px] outline outline-black outline-1 rounded-[6px]">
            Shop Now
          </button>
        </div>
      </div>

      <div className="BigBanner4 w-[360px] gap-y-[24px] pr-[32px] pb-[50px] bg-[#2C2C2C] text-white">
        <div className="Img4 w-[360px] h-[376px] ">
          <img src="/Images/Macbook 1.png" alt="Macbook" />
        </div>
        <div className="TT4 pl-10">
          <h2 className="H4 w-[296px] h-[48px] text-[33px] font-light leading-3">
            Macbook Pro
          </h2>
          <p className="Para1 w-[296px] h-[72px] opacity-70 mb-5">
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </p>
          <button className="B4 px-[56px] py-[16px] outline outline-white outline-1 rounded-[6px] ">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
