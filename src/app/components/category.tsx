export default function Category() {
  return (
    <div className="Category w-[1440px] h-[352px] gap-y-[32px] px-[160px] py-[80px] bg-[#FAFAFA]">
      <div className="Top w-[1120px] h-[32px] flex space-x-[800px] text-[24px] mb-8">
        <h3 className="Text w-[239px] h-[32px] font-medium">
          Browse By Category
        </h3>
        <img
          src="/Images/Arrow`s.png"
          alt="< >"
          className="Elements w-[80px] h-[32px]"
        ></img>
      </div>
      <div className="Categories w-[1120px] h-[128px] gap-x-[32px] flex">
        <div className="CategoryCard1 w-[160px] h-[128px] px-[52px] py-[24px] rounded-[15px] gap-y-[8px] bg-[#EDEDED] items-center justify-center flex flex-wrap">
          <img src="/Images/Phones.png" alt="Phones"></img>
          <h5 className="Name1 w-[58px] h-[24px] text-[16px] ">Phones</h5>
        </div>
        <div className="CategoryCard2 w-[160px] h-[128px] px-[52px] py-[24px] rounded-[15px] gap-y-[8px] bg-[#EDEDED] items-center justify-center flex flex-wrap">
          <img src="/Images/Smart Watches.png" alt="Smart Watches"></img>
          <h5 className="Name2 w-[117px] h-[24px] text-[16px] text-nowrap">
            Smart Watches
          </h5>
        </div>
        <div className="CategoryCard3 w-[160px] h-[128px] px-[52px] py-[24px] rounded-[15px] gap-y-[8px] bg-[#EDEDED] items-center justify-center flex flex-wrap">
          <img src="/Images/Cameras.png" alt="Cameras"></img>
          <h5 className="Name3 w-[69px] h-[24px] text-[16px]">Cameras</h5>
        </div>
        <div className="CategoryCard4 w-[160px] h-[128px] px-[52px] py-[24px] rounded-[15px] gap-y-[8px] bg-[#EDEDED] items-center justify-center flex flex-wrap">
          <img src="/Images/Headphones.png" alt="Headphones"></img>
          <h5 className="Name4 w-[98px] h-[24px] text-[16px]">Headphones</h5>
        </div>
        <div className="CategoryCard5 w-[160px] h-[128px] px-[52px] py-[24px] rounded-[15px] gap-y-[8px] bg-[#EDEDED] items-center justify-center flex flex-wrap">
          <img src="/Images/Computers.png" alt="Computers"></img>
          <h5 className="Name5 w-[85px] h-[24px] text-[16px]">Computers</h5>
        </div>
        <div className="CategoryCard6 w-[160px] h-[128px] px-[52px] py-[24px] rounded-[15px] gap-y-[8px] bg-[#EDEDED] items-center justify-center flex flex-wrap">
          <img src="/Images/Gaming.png" alt="Gaming"></img>
          <h5 className="Name6 w-[59px] h-[24px] text-[16px]">Gaming</h5>
        </div>
      </div>
    </div>
  );
}
