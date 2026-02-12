import Header from "../components/Header";
import Taskbar from "../components/Taskbar";

const LandingPage = () => {
  return (
    <div className="flex flex-col gap-[150px] px-[80px] py-[60px]">
      <Header
        heading="Decentralized Exchanges made Simple"
        subheading="create pools, add liquidity and swap tokens all at one place"
      />
      <div>
        <Taskbar />
      </div>
    </div>
  );
};

export default LandingPage;
