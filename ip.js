import { listIPv4 } from "/arr_Ip.js";

function countUniqueIp(arr) {
  const resUniq = new Set(arr);
  return resUniq.size;
}

const res = console.log(countUniqueIp(listIPv4));
