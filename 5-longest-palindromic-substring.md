# Longest Palindromic Substring

Given a string*s*, find the longest palindromic substring in*s*. You may assume that the maximum length of*s*is 1000.
_Example 1:_

```
*Input:* “babad”
*Output:* “bab”
*Note:* “aba” is also a valid answer.
```

_Example 2:_

```
*Input:* “cbbd”
*Output:* “bb”
```

_solution:_

```
function longestPalinDrome(s) {
  function expandAroundCneter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.slice(left + 1, right);
  }
  if (!s) {
    return "";
  }
  let longest = s[0];

  for (var i = 0; i < s.length; i++) {
    let odd = expandAroundCneter(i, i);
    if (odd.length > longest.length) {
      longest = odd;
    }

    let even = expandAroundCneter(i, i + 1);
    if (longest.length < even.length) {
      longest = even;
    }
  }
  return longest;
}
```
