const Input = ({ token, max, amount, setAmount }) => {
  return (
    <div className="flex justify-between gap-[40px] px-[20px] py-[20px] border-[2px] border-gray-600 rounded-3xl">
      <div className="flex flex-1 bg-gray-600 p-[5px] rounded-2xl px-[20px]">
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className="w-full outline-0 text-[24px]"
        />
      </div>
      <div className="flex flex-col justify-between p-[5px] min-w-[130px]">
        <div className="flex bg-gray-800 px-[8px] py-[4px] rounded-xl items-center justify-end gap-[8px]">
          <img
            src={`../public/tokens/${token}.svg`}
            alt=""
            className="w-[24px]"
          />
          <p className="text-[24px]">{token}</p>
        </div>
        <div className="flex justify-end">
          <p>max : {max}</p>
        </div>
      </div>
    </div>
  );
};

export default Input;
