#include <iostream>

int main()
{
    int n;
    std::cin >> n;
    std::string a;
    for (int i = 1; i <= n; i++)
    {
        if (i % 2 != 0)
        {
            a += "I hate ";
        }
        else
        {
            a += "I love ";
        }
        if (i != n)
        {
            a += "that ";
        }
        else
        {
            a += "it";
        }
    }
    std::cout << a << std::endl;
    return 0;
}