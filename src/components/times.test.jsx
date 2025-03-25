import { Times } from "./home1";
// Import hàm cần kiểm thử

describe("Hàm Times kiểm tra thời gian", () => {
  test("Giữa khoảng thời gian bình thường", () => {
    jest.useFakeTimers().setSystemTime(new Date("2024-03-22T14:00:00")); // 14:00
    expect(Times("12:00", "16:00")).toBe(true); // ✅ 14:00 nằm trong 12:00 - 16:00
    expect(Times("15:00", "18:00")).toBe(false); // ❌ 14:00 không nằm trong 15:00 - 18:00
  });

  test("Khoảng thời gian qua nửa đêm", () => {
    jest.useFakeTimers().setSystemTime(new Date("2024-03-22T01:00:00")); // 01:00 sáng
    expect(Times("23:15", "02:00")).toBe(true); // ✅ 01:00 nằm trong 23:15 - 02:00
    expect(Times("03:00", "05:00")).toBe(false); // ❌ 01:00 không nằm trong 03:00 - 05:00
  });

  test("Start time bằng end time", () => {
    expect(Times("10:00", "10:00")).toBe(false); // ❌ Không có khoảng hợp lệ
  });

  test("Khoảng bao phủ cả ngày (00:00 - 23:59)", () => {
    expect(Times("00:00", "23:59")).toBe(true); // ✅ Luôn đúng vì khoảng bao trọn cả ngày
  });

  test("Thời gian nằm ngoài khoảng", () => {
    jest.useFakeTimers().setSystemTime(new Date("2024-03-22T10:00:00")); // 10:00 sáng
    expect(Times("12:00", "14:00")).toBe(false); // ❌ 10:00 không nằm trong 12:00 - 14:00
  });
});
