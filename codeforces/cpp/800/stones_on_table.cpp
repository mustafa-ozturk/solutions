#include <iostream>

int main()
{
    int n = 0;
    std::cin >> n;
    char chars[n];
    for (int i = 0; i < n; i++)
    {
        std::cin >> chars[i];
    }
    int count = 0;
    for (int i = 0; i < n; i ++)
    {
        if (i != n - 1)
        {
            if (chars[i] == chars[i + 1]) {
                count++;
            }
        }
    }
    std::cout << count << std::endl;
    return 0;
}