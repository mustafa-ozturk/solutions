#include <iostream>

int main()
{
    int n = 0, fh = 0;
    std::cin >> n >> fh;
    int ph = 0;
    int w = 0;
    while(n--)
    {
        std::cin >> ph;
        if (ph > fh)
        {
            w += 2;
        }
        else {
            w++;
        }
    }
    std::cout << w << std::endl;
    return 0;
}