#include "reverse_string.h"
#include <iostream>

namespace reverse_string {
  std::string reverse_string(std::string str)
  {
    std::string reversed = "";
    for (int i = str.length() - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
}
