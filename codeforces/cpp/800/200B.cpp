#include <iostream>

int main()
{
    int n = 0, tmpn = 0;
    float a = 0;
    std::cin >> n;
    tmpn = n;
    float sum = 0;
    while(tmpn--)
    {
        int tmp = 0;
        std::cin >> tmp;
        sum += tmp;
    }
    a = ( (sum / 100) / n ) * 100;
    std::cout << a << std::endl;
    return 0;
}