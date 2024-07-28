import { describe, test, expect } from "vitest";
import { transform } from "./markdown";

describe("headings", () => {
  test("single heading", async () => {
    const input = "# heading 1";
    const expected = "<h1>heading 1</h1>\n";
    expect(await transform(input, {})).toBe(expected);
  });
  test("multiple headings", async () => {
    const input = "# H1\n## H2\n### H3\n#### H4\n##### H5\n###### H6\n####### Not a heading";
    const expected =
      "<h1>H1</h1>\n<h2>H2</h2>\n<h3>H3</h3>\n<h4>H4</h4>\n<h5>H5</h5>\n<h6>H6</h6>\n<p>####### Not a heading</p>\n";
    expect(await transform(input, {})).toBe(expected);
  });

  test("heading with body", async () => {
    const input = "# heading 1\nsome content";
    const expected = "<h1>heading 1</h1>\n<p>some content</p>\n";
    expect(await transform(input, {})).toBe(expected);
  });
});
