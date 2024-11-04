import { describe, expect, it, test, vi } from "vitest";

import { generateReportData } from "./data";

describe("generateReportData()", () => {
  it("should execute fnLog if provided", () => {
    const logger = vi.fn(() => {});

    logger.mockImplementationOnce(() => {});

    generateReportData(logger);

    expect(logger).toHaveBeenCalled();
  });
});
