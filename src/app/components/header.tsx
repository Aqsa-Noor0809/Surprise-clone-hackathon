import Link from "next/link";
export default function Header() {
  return (
    <div className="HomePage">
      <div className="Header flex px-[160px] py-[16px] bg-white">
        <span>
          <img
            src="/Images/Logo.png"
            alt="Logo"
            className="Logo w-[65.4Hug] h-[22.87Hug] mt-1 ml-[100px]"
          ></img>
        </span>

        <span className="Search bg-gray-100 flex w-[250px] h-[35px] ml-[80px] text-[12px] rounded-[5px]">
          <img
            src="/Images/Search.png"
            alt="Search"
            className="Search_Image w-[47Hug] h-[18Hug] m-2"
          ></img>

          <input
            type="text"
            placeholder="Search"
            className="Search_Bar text-black bg-gray-100"
          ></input>
        </span>

        <span>
          <ul className="Routing flex ml-[70px] space-x-10 mt-[5px] ">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/About"} className="Li2 opacity-50">
                About
              </Link>
            </li>
            <li>
              <Link href={"Contact Us"} className="Li3 opacity-50">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href={"Blog"} className="Li4 opacity-50">
                Blog
              </Link>
            </li>
          </ul>
        </span>

        <span className="Shopping_Elements ml-[50px] space-x-5 flex size-[32px]">
          <img src="/Images/Favorites.png" alt="Favourite"></img>
          <img src="/Images/Cart1.png" alt="Cart"></img>
          <img
            src="/Images/Vector.png"
            alt="Vector"
            className="Vector size-[28px]"
          ></img>
        </span>
      </div>
    </div>
  );
}
