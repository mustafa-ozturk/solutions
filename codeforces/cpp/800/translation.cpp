#include <iostream>

int main()
{
    std::string w1;
    std::string w2;
    std::cin >> w1 >> w2;
    std::string temp;
    for (int i = 0; i < w1.size(); i ++)
    {
        temp += w1[w1.size() - i - 1];
    }

    if (temp == w2)
    {
        std::cout << "YES" << std::endl;
    } else {
        std::cout << "NO" << std::endl;
    }
    return 0;
}