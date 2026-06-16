/** n以下の素数をすべて返す（エラトステネスの篩） */
export function sieve(n: number): number[] {
  const isPrime = new Array(n + 1).fill(true);
  isPrime[0] = isPrime[1] = false;
  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }
  return isPrime.reduce<number[]>((acc, v, i) => (v ? [...acc, i] : acc), []);
}

/** フィボナッチ数列のn番目を返す（再帰・意図的に遅い実装） */
export function fib(n: number): number {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}
