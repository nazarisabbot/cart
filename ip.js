import { listIPv4 } from "/arr_Ip.js";

function countUniqueIp(arr) {
  const resUniq = new Map();

  for (const value of arr) {
    resUniq.set(value, value);
  }

  return resUniq.size;
}

const res = console.log(countUniqueIp(listIPv4));
