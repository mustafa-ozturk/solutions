#include <iostream>

int way_too_long()
{
    std::string word;
    int n;
    std::cin >> n;
    while(n--)
    {
        std::cin >> word;
        if (word.length() > 10)
        {
            std::cout << word[0] + std::to_string(word.length() - 2) + word[word.length() - 1] << std::endl;
        } else {
            std::cout << word << std::endl;
        }
    }
    return 0;
}