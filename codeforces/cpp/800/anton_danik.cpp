#include <iostream>

int main()
{
    int n = 0, a = 0, d = 0;
    std::string str;
    std::cin >> n >> str;

    for (auto& c : str)
    {
        if (c == 'A')
        {
            a++;
        }
        else if (c == 'D')
        {
            d++;
        }
    }

    if ( a > d )
    {
        std::cout << "Anton" << std::endl;
    } else if ( d > a ) {
        std::cout << "Danik" << std::endl;
    } else {
        std::cout << "Friendship" << std::endl;
    }
    return 0;
}