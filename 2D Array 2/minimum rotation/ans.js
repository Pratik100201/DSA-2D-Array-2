var findMin = function(nums) {
    
    let st=0, en = nums.length - 1;
    while(st<=en){
        if(nums[st] <= nums[en]) break;
        let mid = Math.floor(st + (en-st)/2);
        if(nums[st]<=nums[mid]){
            st = mid+1;
        }
        else{
            en = mid;
        }
    }
    return nums[st];
};