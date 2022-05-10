#include <iostream>

int main()
{
    int a, b = 0;
    std::cin >> a >> b;
    int count = 0;
    while (a <= b)
    {
        a *= 3;
        b *= 2;
        count++;
    }
    std::cout << count << std::endl;
    return 0;
}