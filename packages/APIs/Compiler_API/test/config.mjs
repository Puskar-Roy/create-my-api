import test from "node:test";
import assert from "node:assert/strict";
import { getEnv } from "../dist/config.js";

test("getEnv", async (t) => {
  await t.test("should return the value of the environment variable", (_t) => {
    const env = getEnv("PATH");
    assert.equal(env, process.env.PATH);
  });

  await t.test(
    "should return the default value if the environment variable is not set",
    (_t) => {
      const env = getEnv("NON_EXISTING_ENV", "default");
      assert.equal(env, "default");
    },
  );
});
