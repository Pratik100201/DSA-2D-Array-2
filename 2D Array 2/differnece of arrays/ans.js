var findDifference = function(nums1, nums2) {
     nums1 = new Set(nums1)
     nums2 = new Set(nums2)
    for(let i of nums1){
        if(nums2.has(i)){
            nums1.delete(i)
            nums2.delete(i)
        }

    }
    return [ Array.from(nums1) , Array.from(nums2)]
};