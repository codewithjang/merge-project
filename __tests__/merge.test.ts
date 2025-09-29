import { merge } from "../src/merge";

describe("merge function", () => {
  test("merge ascending and descending arrays", () => {
    expect(merge([1, 3, 5], [2, 4, 6], [9, 7, 5]))
      .toEqual([1, 2, 3, 4, 5, 5, 6, 7, 9]);
  });

  test("handle empty arrays", () => {
    expect(merge([], [2, 4], [5, 3]))
      .toEqual([2, 3, 4, 5]);
  });

  test("handle all arrays empty", () => {
    expect(merge([], [], []))
      .toEqual([]);
  });

  test("handle duplicates across arrays", () => {
    const arr1 = [1, 3, 5, 6, 9];
    const arr2 = [2, 4, 6, 7, 8];
    const arr3 = [9, 7, 5, 2, 1]; // descending

    // arr3 reversed => [1, 2, 5, 7, 9]
    expect(merge(arr1, arr2, arr3))
      .toEqual([1, 1, 2, 2, 3, 4, 5, 5, 6, 6, 7, 7, 8, 9, 9]);
  });
});
