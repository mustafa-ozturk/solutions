#include <iostream>

int main()
{
    int m, n;
    std::cin >> m >> n;
    int total = m * n;
    int result = (total % 2 == 0) ? total / 2 - total % 2  : total / 2;
    std::cout <<  result << std::endl;
    return  0;
}