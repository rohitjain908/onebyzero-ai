function Header() {
  return (
    <div className="flex w-full gap-1 h-6 sm:h-12">
      <div className="flex items-center w-[20%] sm:w-[12%] border-[#D2D2D2] border-[1px] rounded-xl p-[3px] sm:p-[6px] bg-white font-bold text-[7px] sm:text-[13px]">
        <div className="flex mx-auto">
          {" "}
          <img
            src="/images/header/logo.png"
            alt="logo"
            className="h-2 w-2 sm:w-4 sm:h-4"
          />
          <div className="ml-0 sm:ml-1 text-[#7E7E7E] font-[540]">
            ONEBYZERO
          </div>
          <div className="ml-0 sm:ml-1 leading-[4px] sm:leading-[8px]">®</div>
        </div>
      </div>
      <div className="w-[90%]  relative flex items-center bg-[#FDFDFD] rounded-xl border-[#D2D2D2] border-[1px] p-[3px] sm:p-[6px] text-[6px] sm:text-[13px] text-black font-light">
        <div className="w-full flex ml-4">
          <span>SERVICES</span>
          <span className="ml-[4%]">SOLUTIONS</span>
          <span className="ml-[4%]">CUSTOMERS</span>
          <span className="ml-[4%]">ABOUT</span>
        </div>
        <button className=" absolute right-2 border-[1px] rounded-lg p-[3px] sm:p-[7px] text-black text-[8px] sm:text-[16px]">
          Contact Sales ↗
        </button>
      </div>
    </div>
  );
}

export default Header;
