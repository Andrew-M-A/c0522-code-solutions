/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {};                  // 1 * 1 = O(1)
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(2n)
    i++                             // 2 * n = O(2n)
  ) {
    const word = words[i];          // 2 * n = O(2n)
    if (!seen[word]) {              // 1 * 1 = O(1)
      seen[word] = true;
      unique[unique.length] = word; // 1 * 1 = O(1)
    }
  }
  return unique;
} // Big O Notation for uniqueLinear: O(n)

function uniqueQuadratic(words) {
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(n)
    i++                             // 2 * n = O(n)
  ) {
    const word = words[i];          // 2 * n = O(1)
    let isUnique = true;            // 1 * 1 = O(1)
    for (
      let c = 0;                    // 1 * 1 = O(1)
      c < i;                        // 2 * n^2 = 2n^2 ~= O(n^2)
      c++                           // 2 * n^2 = 2n^2 ~= O(n^2)
    ) {
      const comparing = words[c];   // 1 * n^2 = 1n^2 ~= O(n^2)
      if (comparing === word) {     // 2 * n^2 = 2n^2 ~= O(n^2)
        isUnique = false;           // 2 * n^2 = 2n^2 ~= O(n^2)
      }
    }
    if (isUnique) {                 // 2 * n = 2n ~= O(n)
      unique[unique.length] = word; // 2 * n = 2n ~= O(n)
    }
  }
  return unique;                    // 1 * 1 = O(1)
} // Big O Notation for uniqueQuadratic: O(n^2)
