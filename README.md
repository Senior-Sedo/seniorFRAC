# Get a random fractional/decimal number within a range, between two numbers min and max

One **straight** *forward* ***function*** ~~that~~ <mark>returns</mark> <sup>a</sup> <sub>random</sub> `fractional/decimal number` between **min** and **max** numbers 😍

## Install
```shell
npm i @ssts/frac
```
## Import
```js
import seniorFRAC from "@ssts/frac";
```
## Use
```ts
const randomDecimal: number = seniorFRAC(-10, 10);
```

## Arguments
> Returns a number

| Order |   Parameter    |   Type   | Default  |
| :---: | :------------: | :------: | :------: |
|   1   |      min       |  number  | required |
|   2   |      max       |  number  | required |
|   3   | fractionDigits |  number  |    3     |


## Examples

```ts
import seniorFRAC from "@ssts/frac";

console.log(seniorFRAC(0, 10));               // 9.315
console.log(seniorFRAC(0, 100));              // 75.565
console.log(seniorFRAC(0, 100, 3));           // 50.177
console.log(seniorFRAC(0, 100, 3));           // 8.158
console.log(seniorFRAC(0, 100, 2));           // 39.63
console.log(seniorFRAC(0, 100, 1));           // 89.1
console.log(seniorFRAC(0, 100, 7));           // 63.2172386
console.log(seniorFRAC(0, 100, 15));          // 30.750550145460352
console.log(seniorFRAC(-100, 100));           // 88.428
console.log(seniorFRAC(-100, 100));           // -66.316
console.log(seniorFRAC(15, 222));             // 152.743
console.log(seniorFRAC(-1000, 1234567, 6));   // 604889.416455

// Here a trailing zero got truncated, 1206725.172180
console.log(seniorFRAC(-1000, 1234567, 6));   // 1206725.17218
```

## Note
> Sometimes there will be truncating trailing zeros.

___
---
---
---
***
>   Made With Chocolate By Senior Sedo 😎
>>  Be Chocolateful 💙😍
>>
>>  **ssts** stands for **s**enior-**s**edo-**t**ype**s**cript 💙
>>
>>  So instead of ~~@senior-sedo-typescript/rand-frac~~
>>> `@ssts/frac` for simplicity sake 😍
***
---
---
---
___