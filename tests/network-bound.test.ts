// このファイルは「npm ci 後に実行される軽量テスト」の代役
// CPU 使用率が低いままになることを確認するためのジョブに使用します

describe("Smoke test after install", () => {
  it("1 + 1 = 2", () => {
    expect(1 + 1).toBe(2);
  });

  it("process.version is defined", () => {
    expect(process.version).toBeDefined();
  });
});
