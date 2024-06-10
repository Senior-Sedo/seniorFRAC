const seniorFRAC = (min: number, max: number, fractionDigits: number = 3): number => {
  const m: number = +("1" + "0".repeat(fractionDigits));
  return Math.floor((Math.random() * (max - min) + min) * m) / m;
};
export default seniorFRAC;