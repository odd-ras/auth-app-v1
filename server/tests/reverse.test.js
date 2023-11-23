import for_testing from "../utils/for_testing.js";

test("reverse of a", () => {
  const result = for_testing.reverse("a");

  expect(result).toBe("a");
});

test("reverse of react", () => {
  const result = for_testing.reverse("react");

  expect(result).toBe("tcaer");
});

test("reverse of releveler", () => {
  const result = for_testing.reverse("releveler");

  expect(result).toBe("releveler");
});
