#include <fstream>
#include <iostream>
#include <filesystem>
#include <vector>
#include <algorithm>

int main() {
    namespace fs = std::filesystem;
    using strIntPair = std::pair<std::string, int>;

    std::vector<std::string> usedLangs = {"cpp", "js", "go", "ts"};
    std::vector<std::string> filters = {"test", "CMakeFiles"};
    std::unordered_map<std::string, std::string> fullLangName = {
            {"cpp", "C++"},
            {"js",  "Javascript"},
            {"go",  "Go"},
            {"ts",  "Typescript"},
    };
    std::unordered_map<std::string, int> langCount;
    int total = 0;

    // go through all directories and files in this repository
    // start at "../" because I run the file from /solutions/cmake-build-debug
    for (const auto& file: fs::recursive_directory_iterator("../")) {
        std::string filePathStr = file.path().string();
        std::string fileExtension = filePathStr.substr(filePathStr.find_last_of('.') + 1);

        // only include used languages
        if (std::find(usedLangs.begin(), usedLangs.end(), fileExtension) != usedLangs.end()) {
            // skip misc file
            bool include = true;
            for (const auto& filter: filters) {
                if (filePathStr.find(filter) != std::string::npos) {
                    include = false;
                    break;
                }
            }
            if (!include) {
                continue;
            }

            langCount[fileExtension]++;
            total++;
        }
    }

    /* copy map into vec and sort it */
    std::vector<strIntPair> vec;
    for (const auto& pair : langCount)
    {
        vec.emplace_back(pair);
    }
    std::sort(
            vec.begin(),
            vec.end(),
            [](const strIntPair& a, const strIntPair& b) {
                return a.second > b.second;
            });

    /* write to readme file */
    std::ofstream f;
    // file is run from /solutions/cmake-build-debug
    f.open("../README.md");
    f << "This readme was built with [build_readme.cpp](build_readme.cpp)\n\n";
    f << "| Language | Problems solved |\n";
    f << "| --- | ---: |\n";

    for (const auto& [lang, count]: vec) {
        f << "| " << fullLangName[lang] << " | " << count << " |\n";
    }

    f << "\n\nTotal Problems Solved: **" << total << "**\n";
    f.close();
    std::cout << "README BUILT ✓" << std::endl;

    return 0;
}