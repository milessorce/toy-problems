/* Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). 
n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2. */

const maxArea = height => {
  let i = 0, j = height.length - 1, maxArea = 0, minHeight;
  while (i < j) {
    minHeight = Math.min(height[i], height[j]);
    maxArea = Math.max(maxArea, minHeight * (j - i));
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return maxArea;
};

console.assert(maxArea([1, 4, 6, 3, 8]) === 12);
console.assert(maxArea([1, 2]) === 1);
console.assert(maxArea([1, 2, 2]) === 2);
console.assert(maxArea([1, 10, 12, 2]) === 10);
