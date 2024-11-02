export default function Banner2() {
  return (
    <div className="Banner2 w-[1440px] h-[448px] gap-y-[8px] bg-[url('/Images/Banner2.png')]">
      <div className="ContentBanner2 gap-y-[40px] text-white text-center pt-36">
        <div className="Titles">
          <h2 className="H1 text-[72px] font-thin">
            Big Summer <b className="B font-semibold">Sale</b>
          </h2>
          <h3 className="H2 text-[16px] text-[#787878] leading-3 mb-[40px]">
            Commodo fames vitae vitae leo mauris in. Eu consequat.
          </h3>
        </div>
        <div className="Button">
          <button className="B1 w-[191px] h-[56px] gap-x-[8px] px-[56px] py-[16px] rounded-[6px] outline outline-white outline-1">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
