class Solution {
public:
    bool isPalindrome(int x) {
        std::string num = std::to_string(x);
        for (int i = 0 ; i < num.length(); i++)
        {
            if (num[i] != num[num.length() - 1  - i])
            {
                return false;
            }
        }
        return true;
    }
};