#include <iostream>
#include <vector>
#include <algorithm>

int main()
{
    int y = 0;
    std::cin >> y;
    y++;
    bool found = false;
    std::vector<int> v;
    while (!found) {
        int year = y;
        while(year > 0)
        {
            int ld = year % 10;
            if(std::find(v.begin(), v.end(), ld) == v.end())
            {
                v.push_back(ld);
            } else {
                v.clear();
                break;
            }
            year /= 10;
        }
        if (!v.empty()) {
            found = true;
            std::reverse(v.begin(), v.end());
        }
        y++;
    }

    for (auto& n : v)
        std:: cout << n;
    std::cout << std::endl;
    return 0;
}
