import { useNavigate } from "react-router-dom";

const Btn = ({ img, text, to, poolAddress }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/${to}/${poolAddress}`)}
      className="flex gap-[10px] items-center cursor-pointer bg-[#8147e6] px-[18px] py-[5px] rounded-full"
    >
      <img src={img} alt="" className="w-[18px]" />
      <p>{text}</p>
    </div>
  );
};

export default Btn;
