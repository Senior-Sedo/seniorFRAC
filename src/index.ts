/**
 * Generates a random number between min and max.
 * @param {number} min - required
 * @param {number} max - required
 * @returns {number} number
 * @throws TypeError if either min, max or fractionDigits is NaN
 * @throws RangeError if the fractionDigits is less than 0
 *
 * @example
 * import seniorFRAC from "@ssts/frac";
 * const randomDecimal: number = seniorFRAC(-10, 10);
 *
 * console.log(randomDecimal);
 * // Log example: 8.158
 */
const seniorFRAC = (min: number, max: number, fractionDigits: number = 3): number => {
  if (typeof min !== "number") throw new TypeError("min must be a number");
  if (typeof max !== "number") throw new TypeError("max must be a number");
  if (typeof fractionDigits !== "number") throw new TypeError("fractionDigits must be a number");
  else if (fractionDigits < 0) throw new RangeError(`Invalid fractionDigits value: ${fractionDigits}. Must be greater than or equal to 0`);

  const multiplier: number = parseInt("1" + "0".repeat(Math.floor(fractionDigits)));

  return Math.floor((Math.random() * (max - min) + min) * multiplier) / multiplier;
};

declare global {
  interface Window {
    ssts: any;
  }
}
if (typeof window !== "undefined") {
  if (typeof window.ssts !== "object") window.ssts = {};
  window.ssts.seniorFRAC = seniorFRAC;
};

export default seniorFRAC;
