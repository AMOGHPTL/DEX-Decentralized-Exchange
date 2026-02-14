const PositionCard = () => {
  return (
    <div>
      <div className="flex items-center gap-[10px]">
        <div className="flex items-center gap-[10px] text-[32px]">
          <img
            src={`../public/tokens/${Tokens[data.token0]}.svg`}
            alt=""
            className="w-[32px]"
          />
          <p>{Tokens[data.token0]}</p>
        </div>
        <p className="text-[32px]">/</p>
        <div className="flex items-center gap-[10px] text-[32px]">
          <img
            src={`../public/tokens/${Tokens[data.token1]}.svg`}
            alt=""
            className="w-[32px]"
          />
          <p>{Tokens[data.token1]}</p>
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default PositionCard;
