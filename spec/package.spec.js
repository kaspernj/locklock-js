describe("locklock package", function () {
  it("declares the expected package name", function () {
    expect(require("../package.json").name).toBe("locklock")
  })
})
