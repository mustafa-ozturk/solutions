#include <iostream>
#include <unordered_set>

int main()
{
    std::unordered_set<double> set;
    for (int i = 0; i < 4; i++)
    {
        double tmp = 0;
        std::cin >> tmp;
        set.insert(tmp);
    }
    int ss = set.size();

    if (ss == 1)
    {
        std::cout << 3 << std::endl;
    }
    else if (ss == 2)
    {
        std::cout << 2 << std::endl;
    }
    else if (ss == 3)
    {
        std::cout << 1 << std::endl;
    }
    else if (ss == 4)
    {
        std::cout << 0 << std::endl;
    }
    return 0;
}