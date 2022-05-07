#include <iostream>
#include <vector>
#include <algorithm>

int main()
{
    std::string name;
    std::cin >> name;
    std::vector<char> uniques;

    for (auto& c : name)
    {
        if (std::find(uniques.begin(), uniques.end(), c) == uniques.end())
        {
            uniques.push_back(c);
        }
    }
    if (uniques.size() % 2 == 0)
    {
        std::cout << "CHAT WITH HER!" << std::endl;
    } else
    {
        std::cout << "IGNORE HIM!" << std::endl;
    }
    return 0;
}