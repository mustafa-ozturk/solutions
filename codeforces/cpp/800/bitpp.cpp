#include <iostream>

int main()
{
    int n;
    std::cin >> n;
    int x = 0;
    while (n--)
    {
        std::string input = " ";
        std::cin >> input;

        if (input[0] == '+' || input[2] == '+' )
        {
            x++;
        } else {
            x--;
        }
    }
    std::cout << x << std::endl;
    return 0;
}