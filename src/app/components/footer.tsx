export default function Footer() {
  return (
    <div className="Footer w-[1440px] h-[504px] gap-y-[24px] px-[160px] py-[104px] bg-black text-white">
      <div className="Info w-[1120px] h-[256px] flex">
        {/*  gap-y-[113px] */}

        <div className="LT w-[384px] h-[94.87px]">
          {/*  gap-y-[24px] */}

          <img
            src="/Images/Logo1.png"
            alt="Logo"
            className="Logo w-[65.4px] h-[22.87px]"
          />
          <p className="Para w-[384px] h-[48px] text-[14px] opacity-70 mt-6">
            We are a residential interior design firm located in <br />
            Portland. Our boutique-studio offers more than
          </p>
        </div>

        <div className="FN w-[623px] h-[256px] flex ml-32">
          <div className="S1 w-[295.5px] h-[256px] gap-y-[8px]">
            <h5 className="H1 font-semibold text-[16px]">Services</h5>
            <div className="Li text-[14px] opacity-70">
              <p className="mb-3">Bonus program</p>
              <p className="mb-3">Gift cards</p>
              <p className="mb-3">Credit and payment</p>
              <p className="mb-3">Service contracts</p>
              <p className="mb-3">Non-cash account</p>
              <p className="mb-3">Payment</p>
            </div>
          </div>
          <div className="S2">
            <h5 className="H2 font-semibold text-[16px]">
              Assistance to the buyer
            </h5>
            <div className="Li text-[14px] opacity-70">
              <p className="mb-3">Find an order</p>
              <p className="mb-3">Terms of delivery</p>
              <p className="mb-3">Exchange and return of goods</p>
              <p className="mb-3">Guarantee</p>
              <p className="mb-3">Frequently asked questions</p>
              <p className="mb-3">Terms of use of the site</p>
            </div>
          </div>
        </div>
      </div>

      <div className="SocialIcons w-[173px] h-[16px] flex space-x-9">
        <img
          src="/Images/Twitter.png"
          alt="Twitter"
          className="w-[16px] h-[16px]"
        />
        <img
          src="/Images/Facebook.png"
          alt="Facebook"
          className="w-[16px] h-[16px]"
        />
        <img
          src="/Images/Vector1.png"
          alt="Tik Tok"
          className="w-[16px] h-[16px]"
        />
        <img
          src="/Images/Instagram.png"
          alt="Instagram"
          className="w-[16px] h-[16px]"
        />
      </div>
    </div>
  );
}
