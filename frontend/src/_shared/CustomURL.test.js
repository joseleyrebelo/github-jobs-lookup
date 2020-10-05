import { CustomURL } from "./CustomURL";

describe("CustomURL", () => {
  it("Prints only one '?' in string", () => {
    CustomURL.queries["s"] = "test";
    CustomURL.queries["page"] = "2";
    CustomURL.queries["balancer"] = "2";
    expect(CustomURL.get().split("?").length).toBe(2);
  });

  it("Prints '&' amounts correctly", () => {
    CustomURL.queries["s"] = "test";
    CustomURL.queries["page"] = "2";
    CustomURL.queries["balancer"] = "2";
    expect(CustomURL.get().split("&").length).toBe(3);
  });
  it("Escapes space with +", () => {
    CustomURL.queries["s"] = "string with { bad character";
    expect(CustomURL.get()).not.toContain("{");
  });
});
