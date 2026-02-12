import arrow from "../../assets/arrow.svg";
import Tokens from "../../abi/tokenAddressToName.json";
import { useState } from "react";

const TokenDropDown = ({
  token,
  otherToken,
  setToken,
  isOpen,
  setOpen,
  setShowError,
}) => {
  return (
    <div>
      <div
        onClick={() => setOpen(!isOpen)}
        className={`flex w-[200px] justify-between gap-[12px] items-center cursor-pointer rounded-[8px] border-[2px] border-gray-500 px-[24px] py-[10px] ${isOpen ? "border-b-0 rounded-b-none" : ""}`}
      >
        <div className="flex items-center gap-[6px]">
          <img
            src={`../public/tokens/${token}.svg`}
            alt=""
            className="w-[20px]"
          />
          <p className="text-[20px]">{token}</p>
        </div>
        <img
          src={arrow}
          alt=""
          className={`w-[15px] transition duration-150 ${isOpen ? "rotate-90" : ""}`}
        />
      </div>
      {isOpen && (
        <div className="absolute border-[2px] w-[200px] border-t-0 border-gray-500 transition duration-150">
          {Object.keys(Tokens)?.map((Token) => (
            <div
              onClick={() => {
                if (Token !== otherToken) {
                  setToken(Token);
                  setShowError(false);
                } else {
                  setShowError(true);
                }
              }}
              className="flex bg-gray-800 border-[2px] border-gray-900 gap-[12px] items-center cursor-pointer px-[24px] py-[10px]"
            >
              <img
                src={`../public/tokens/${Token}.svg`}
                alt=""
                className="w-[20px]"
              />
              <p>{Token}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TokenDropDown;
