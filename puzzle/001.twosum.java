class Solution {
    public int[] twoSum(int[] nums, int target){
        int index1 = 0;
        int index2 = 0;
        int[] result = {};
        for (int i=index1; i<nums.length; i++){
            for (int n=index2; n<nums.length; n++) {
                if (i==n) continue;
                if (nums[i] + nums[n] == target) {
                    result = new int[]{i, n};
                }
            }
        }
        return result;
    }
}
