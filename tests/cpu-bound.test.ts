import { sieve, fib } from "../src/math";

// 各 describe が独立した worker で並列実行される
describe("Primes - range 1", () => {
  it("finds primes up to 500000", () => {
    const result = sieve(500_000);
    expect(result.length).toBe(41538);
  });
});

describe("Primes - range 2", () => {
  it("finds primes up to 500000", () => {
    const result = sieve(500_000);
    expect(result.length).toBe(41538);
  });
});

describe("Fibonacci - set 1", () => {
  it("computes fib(44)", () => {
    expect(fib(44)).toBe(701408733);
  });
});

describe("Fibonacci - set 2", () => {
  it("computes fib(44)", () => {
    expect(fib(44)).toBe(701408733);
  });
});
