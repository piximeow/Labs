function ipToNumber(ip = "127.780.0.14") {
  return ip
    .split(".")
    .map(Number)
    .reduce((acc, byte, index) => acc + (byte << ((3 - index) * 8)), 0);
}