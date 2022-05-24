#include <iostream>

int main()
{
    unsigned long long n;
    std::cin >> n;
    int count = 0;
    while (n > 0)
    {
        if (n % 10 == 4 || n % 10 == 7)
        {
            count++;
        }
        n /= 10;
    }
    if (count == 4 || count == 7)
    {
        std::cout << "YES" << std::endl;
    } else {
        std::cout << "NO" << std::endl;
    }
    return 0;
}