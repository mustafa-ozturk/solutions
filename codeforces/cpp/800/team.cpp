#include <iostream>

int team()
{
    int counter = 0;
    int sureness[3];
    int n;
    std::cin >> n;
    while (n--)
    {
        std::cin >> sureness[0] >> sureness[1] >> sureness[2];
        if (sureness[0] + sureness[1] + sureness[2] >= 2)
        {
            counter++;
        }
    }
    std::cout << counter << std::endl;
    return 0;
}