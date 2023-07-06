import { Q15 } from "./Q15.js";

describe("Q15", () => {
  test("", () => {
    const sportList = [
      { toolName: "啞鈴", weight: 30, unit: "箱" },
      { toolName: "單槓", weight: 20, unit: "箱" },
      { toolName: "跑步機", weight: 50, unit: "台" },
    ];
    const weightLimit = 1000;
    const message = Q15(sportList, weightLimit);
    expect(message).toEqual(expect.any(String));
    console.log(message);
  });
});

jest.fn().mockImplementationOnce(() => value);

const mockFn = jest
  .fn()
  .mockReturnValue("default")
  .mockReturnValueOnce("first call")
  .mockReturnValueOnce("second call");

mockFn(); // 'first call'
mockFn(); // 'second call'
mockFn(); // 'default'
mockFn(); // 'default'
