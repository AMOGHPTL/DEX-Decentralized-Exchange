const ActionBtn = ({ text, action }) => {
  return (
    <div
      onClick={() => action()}
      className="flex gap-[10px] items-center cursor-pointer bg-[#8147e6] px-[18px] py-[5px] rounded-full"
    >
      <p>{text}</p>
    </div>
  );
};

export default ActionBtn;
