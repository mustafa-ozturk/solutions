#include <iostream>

int main()
{
    int n = 0;
    std::cin >> n;
    int count = 1;
    int previousMagnet = -1;
    while (n--)
    {
        int tmp;
        std::cin >> tmp;
        if (tmp == 1 && previousMagnet == 10)
        {
            count++;
        } else if (tmp == 10 && previousMagnet == 1)
        {
            count++;
        }
        previousMagnet = tmp;
    }
    std::cout << count << std::endl;
    return 0;
}