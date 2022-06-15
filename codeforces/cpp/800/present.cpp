#include <iostream>
#include <map>

int main()
{
    int n = 0;
    std::cin >> n;
    std::map<int, int> m;
    int count = 1;
    while(n--)
    {
        int temp = 0;
        std::cin >> temp;
        m[temp] = count;
        count++;
    }

    for ( auto& [k, v] : m)
    {
        std::cout << v << " ";
    }
    return 0;
}