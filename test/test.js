import hello from "../src/model/Chat";

test("deve printar hello", () => {
  expect(hello()).toBe("hello_response");
});
