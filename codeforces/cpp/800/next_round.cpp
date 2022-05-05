#include <iostream>

int next_round()
{
    int n, k;
    std::cin >> n >> k;
    int nums[n];
    int counter = 0;
    for (int i = 0; i < n; i++)
    {
        std::cin >> nums[i];
    }
    for (int i = 0; i < n; i++)
    {
        if (nums[i] > 0 && nums[i] >= nums[k - 1])
        {
            counter++;
        }
    }
    std::cout << counter << std::endl;
    return 0;
}