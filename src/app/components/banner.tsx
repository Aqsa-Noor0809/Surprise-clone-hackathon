export default function Banner() {
  return (
    <div className="Banner w-[1440px] h-[632px] bg-[#211C24] text-white flex flex-wrap items-center px-[160px]">
      <div className="Content w-[714px] h-[256Hug]">
        <big className="FirstWord opacity-40 text-[25px]">Pro.Beyond.</big>
        <h1 className="MainLine font-thin text-[96px] ">
          IPhone 14 <b className="Pro font-semibold">Pro</b>
        </h1>
        <small className="Para text-[18px] opacity-70 text-lg mt-[24px]">
          Created to change everything for the better. For everyone
        </small>
        <br />
        <button className="Button outline outline-[1px] w-[191Hug] h-[56Hug] mt-[24px] px-[56px] py-[16px] rounded-[6px]">
          Shop Now
        </button>
      </div>
      <div className="Iphone_Image w-[406px] h-[632px]">
        <img src="/Images/Iphone Image.png"></img>
      </div>
    </div>
  );
}
