# two-sum

Given an array of integers, return*indices*of the two numbers such that they add up to a specific target.
You may assume that each input would have _exactly_ one solution, and you may not use the/same/element twice.
_Example:_

```
Given nums = [2, 7, 11, 15], target = 9,

Because nums[*0*] + nums[*1*] = 2 + 7 = 9,
return [*0*, *1*].
```

_sloution one:_

```
function twoSum(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        var valueFirst = nums[i];
        for (var j = i + 1; j < nums.length; j++) {
            var valueSecond = nums[j];
            if (valueFirst + valueSecond == target) {
                return [i, j]l;
            }
        }
    }
}

```

_sloution two:_

```
function twoSum(nums, target) {
    let hash = new Map()
    for (let i = 0; i < nums.length; i++) {
        hash.set(nums[i], i);
    }

    for (let i = 0; i < nums.length; i++) {
        let numToFind = target - nums[i];
        if (hash.has(numToFind) && i !== hash.get(numToFind)) {
            return [i, hash.get(numToFind)];
        }
    }
}

```
