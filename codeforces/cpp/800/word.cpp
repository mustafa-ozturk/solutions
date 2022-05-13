#include <iostream>

int main()
{
    std::string word;
    std::cin >> word;
    int uc = 0;
    int lc = 0;
    for (const auto& c : word)
    {
        if ((int)c < 97)
        {
            uc++;
        }
        else
        {
            lc++;
        }
    }
    for (auto& c : word)
    {
        if (uc > lc)
        {
            c = (char)toupper(c);
        } else {
            c = (char)tolower(c);
        }
    }
    std::cout << word << std::endl;
    return 0;
}