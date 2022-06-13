#include <iostream>

int main()
{
    int n = 0, p = 0, q = 0;
    std::cin >> n;
    int r = 0;
    while (n--)
    {
        std::cin >> p >> q;
        if (q - p >= 2)
        {
            r++;
        }
    }
    std::cout << r << std::endl;
    return 0;
}