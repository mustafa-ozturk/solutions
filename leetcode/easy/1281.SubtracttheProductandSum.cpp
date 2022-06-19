class Solution {
public:
    int subtractProductAndSum(int n) {
        std::string s = std::to_string(n);
        int product = (int)s[0] - 48;
        int sum = (int)s[0] - 48;
        for (int i = 1; i < s.length(); i++)
        {
            product *= (int)s[i] - 48;
            sum += (int)s[i] - 48;
        }
        return product - sum;
    }
};