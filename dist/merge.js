"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = merge;
function merge(collection_1, // sorted ascending
collection_2, // sorted ascending
collection_3 // sorted descending
) {
    //เรียง collection_3 ใหม่จาก descending ให้เป็น ascending
    const c3 = [];
    for (let i = collection_3.length - 1; i >= 0; i--) {
        const val = collection_3[i];
        if (val !== undefined) {
            c3.push(val);
        }
    }
    function merge2SortedArrays(a, b) {
        const result = [];
        let i = 0, j = 0;
        while (i < a.length && j < b.length) {
            const valA = a[i];
            const valB = b[j];
            if (valA !== undefined && valB !== undefined) {
                if (valA <= valB) {
                    result.push(valA);
                    i++;
                }
                else {
                    result.push(valB);
                    j++;
                }
            }
        }
        while (i < a.length)
            result.push(a[i++]);
        while (j < b.length)
            result.push(b[j++]);
        return result;
    }
    const mergedC12 = merge2SortedArrays(collection_1, collection_2);
    return merge2SortedArrays(mergedC12, c3);
}
//# sourceMappingURL=merge.js.map