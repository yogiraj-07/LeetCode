//Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.


var strStr = function (haystack, needle) {
    if (needle === "") return 0; // If needle is an empty string, return 0

    for (let i = 0; i <= haystack.length - needle.length; i++) {
        if (haystack.substring(i, i + needle.length) === needle) {
            return i;
        }
    }

    return -1; // If needle is not found, return -1
};