#include <iostream>

int main()
{
    int firstCost, money, want = 0;
    std::cin >> firstCost >> money >> want;

    int total = 0;
    for (int i = 1; i <= want; i++)
    {
        total += i * firstCost;
    }
    if (total - money < 0)
    {
        std::cout << 0 << std::endl;

    } else
    {
        std::cout << total - money << std::endl;
    }
    return 0;
}