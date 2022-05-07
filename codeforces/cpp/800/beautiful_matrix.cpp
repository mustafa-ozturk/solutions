#include <iostream>

int main()
{
    int matrix[5][5];
    int x, y;
    for (int i = 0; i < 5; i++) {
        std::cin >> matrix[i][0] >> matrix[i][1] >> matrix[i][2] >> matrix[i][3] >> matrix[i][4];
        if (matrix[i][0] == 1)
        {
            x = 0;
            y= i;
        }
        if (matrix[i][1] == 1)
        {
            x = 1;
            y= i;
        }
        if (matrix[i][2] == 1)
        {
            x = 2;
            y= i;
        }
        if (matrix[i][3] == 1)
        {
            x = 3;
            y= i;
        }
        if (matrix[i][4] == 1)
        {
            x = 4;
            y= i;
        }
    }
    x++;
    y++;
    int moves = 0;
    while (x != 3)
    {
        if (x > 3)
            x--;
        if (x < 3)
            x++;
        moves++;
    }
    while (y != 3)
    {
        if (y > 3)
            y--;
        if (y < 3)
            y++;
        moves++;
    }
    std::cout << moves << std::endl;
    return 0;
}
