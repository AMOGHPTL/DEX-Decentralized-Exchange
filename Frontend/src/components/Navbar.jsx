import logo from "../assets/logo.png";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = () => {
  return (
    <div className="flex justify-between px-[30px] border-b-[2px]">
      <div className="flex items-center gap-[20px]">
        <img src={logo} alt="" className="w-[60px] " />
        <p className="text-[30px] font-semibold text-gray-900">Flex-DEX</p>
      </div>
      <div className="flex gap-[40px] items-center">
        <p>Swap</p>
        <p>Explore Pools</p>
        <p>create pool</p>
      </div>
      <div className="h-[60px] w-fit flex items-center">
        <ConnectButton />
      </div>
    </div>
  );
};

export default Navbar;
