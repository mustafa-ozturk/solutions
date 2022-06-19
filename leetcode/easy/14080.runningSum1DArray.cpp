class Solution {
public:
    vector<int> runningSum(vector<int>& nums) {
        vector<int> a{nums[0]};
        for (int i = 1; i < nums.size(); i++)
        {
            a.push_back(a.back() + nums[i]);
        }
        return a;
    }
};