//https://codeforces.com/problemset/problem/977/A
#include <iostream>

int main()
{
    int n, k = 0;
    std::cin >> n >> k;
    while (k--)
    {
        if (n % 10 == 0)
        {
            n /= 10;
        } else {
            n--;
        }
    }
    std::cout << n << std::endl;
    return 0;
}