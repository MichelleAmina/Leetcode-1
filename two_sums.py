def twoSums(nums, target):
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            try:
                if (nums[i] + nums[j] == target):
                    return [i, j]
            except IndexError:
                pass
    return []
        

print(twoSums([2,7,11,15], 9))