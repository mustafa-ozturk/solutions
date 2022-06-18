#include <iostream>

int main()
{
    std::string n1, n2;
    std::cin >> n1 >> n2;
    std::string answer;
    for (int i = 0; i < n1.length(); i++)
    {
        if (n1[i] != n2[i])
        {
            answer += '1';
        }
        else
        {
            answer += '0';
        }
    }
    std::cout << answer << std::endl;
    return 0;
}