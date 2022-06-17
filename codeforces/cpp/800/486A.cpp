#include <iostream>

int main()
{
    long long n = 0, a = 0;
    std::cin >> n;
    if (n % 2 == 0)
        a = n / 2;
    else
        a = ((n + 1) / 2) * (-1);
    std::cout << a << std::endl;
    return 0;
}