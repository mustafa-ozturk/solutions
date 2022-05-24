#include <iostream>
#include <set>

int main()
{
    int n = 0;
    std::cin >> n;
    int capacity = 0;
    std::set<int> capacities;
    while(n--)
    {
        int exit, enter;
        std::cin >> exit >> enter;
        capacity -= exit;
        capacity += enter;
        capacities.insert(capacity);
    }
    std::cout << *capacities.rbegin() << std::endl;
    return 0;
}