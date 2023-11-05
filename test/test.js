import hello from "../src/model/ChatRoom";

test("deve printar hello", () => {
  expect(hello()).toBe("hello_response");
});
