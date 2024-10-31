import { expect, it } from "vitest";

import { generateToken, generateTokenPromise } from "./async";

it("Should genaerate a token value", (done) => {
  const testUserRmail = "test@gmail.com";

  generateToken(testUserRmail, (err, token) => {
    expect(token).toBeDefined();

    try {
      expect(token).toBe(2);
      done();
    } catch (error) {
      done(err);
    }
  });
});

it("Should genaerate a token value Promise", () => {
  const testUserRmail = "test@gmail.com";

  expect(generateTokenPromise(testUserRmail)).resolves.toBeDefined();
});
it("Should genaerate a token value Promise", async () => {
  const testUserRmail = "test@gmail.com";
  const token = await generateTokenPromise(testUserRmail);
  expect(token).toBeDefined();
});
