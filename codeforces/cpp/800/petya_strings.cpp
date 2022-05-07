#include <iostream>
#include <algorithm>

int main()
{
    std::string str1;
    std::string str2;
    std::cin >> str1 >> str2;
    std::transform(str1.begin(), str1.end(), str1.begin(),
                   [](unsigned char c){ return std::tolower(c); });
    std::transform(str2.begin(), str2.end(), str2.begin(),
                   [](unsigned char c){ return std::tolower(c); });

    if (str1 < str2)
        std::cout << "-1" << std::endl;
    else if (str1 == str2)
        std::cout << "0" << std::endl;
    else
        std::cout << "1" << std::endl;
    return 0;
}