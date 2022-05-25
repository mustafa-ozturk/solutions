#include <iostream>

int main()
{
    int n, t = 0;
    std::string str;
    std::cin >> n >> t >> str;
    while (t--)
    {
        for (int i = 0; i < str.length(); i++)
        {
            if (str[i] == 'B' && str[i + 1] == 'G')
            {
                str[i] = 'G';
                str[i + 1] = 'B';
                i++;
            }
        }
    }
    std::cout << str << std::endl;
    return 0;
}