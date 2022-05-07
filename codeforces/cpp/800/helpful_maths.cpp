#include <iostream>
#include <vector>
#include <algorithm>

int main()
{
    std::string sum;
    std::cin >> sum;
    std::vector<int> nums;
    for (const auto& c : sum)
    {
        if (c != '+')
        {
            nums.push_back(static_cast<int>(c) - 48);
        }
    }
    std::sort(nums.begin(), nums.end());
    for (int i = 0; i < nums.size(); i++) {
        if (i == nums.size() - 1) {
            std::cout << nums[i];
            break;
        }
        std::cout << nums[i] << "+";
    }
    std::cout << std::endl;
    return 0;
}