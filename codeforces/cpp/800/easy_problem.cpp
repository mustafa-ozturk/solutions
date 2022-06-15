#include <iostream>

int main()
{
    int n = 0;
    std::cin >> n;
    while(n--)
    {
        int tmp = 0;
        std::cin >> tmp;
        if (tmp == 1)
        {
            std::cout << "HARD" << std::endl;
            return 0;
        }
    }
    std::cout << "EASY" << std::endl;
    return 0;
}