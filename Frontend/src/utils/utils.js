import { useGetTokenReserve } from "../hooks/pool";

export function getReverseTokens(TokenName) {
      const Tokens = Object.fromEntries(
    Object.entries(TokenName).map(([name, addr]) => [addr, name]),
  );
  return Tokens;
} 

export function shorten(value, start = 3, end = 3) {
  if (!value) return "";
  const str = value.toString();

  if (str.length <= start + end) return str;

  return `${str.slice(0, start)}...${str.slice(-end)}`;
}

