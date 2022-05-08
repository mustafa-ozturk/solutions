#include <fstream>
#include <iostream>
#include <filesystem>
#include <vector>
#include <algorithm>

struct fileNameCount {
    std::string name;
    int count{};
};

int main() {
    namespace fs = std::filesystem;

    std::vector<std::string> filters = {"test", "CMakeFiles"};
    std::unordered_map<std::string, std::string> langs = {
            {".cpp", "C++"},
            {".js",  "JavaScript"},
            {".go",  "Go"},
            {".ts",  "TypeScript"},
    };
    std::unordered_map<std::string, int> langCount;
    int total = 0;

    // go through all directories and files in this repository
    // start at "../" because I run the file from /solutions/cmake-build-debug
    for (const auto& entry: fs::recursive_directory_iterator("../")) {
        std::string filePath = entry.path().string();

        // skip test/cmake files
        bool skip = false;
        for (const auto& filter: filters) {
            if (filePath.find(filter) != std::string::npos) {
                skip = true;
                break;
            }
        }
        if (skip)
        {
            continue;
        }

        std::string fileExtension = entry.path().extension();

        // check file extension
        if (langs.count(fileExtension) > 0) {
            langCount[fileExtension]++;
            total++;
        }
    }

    /* copy map into vec and sort it */
    std::vector<fileNameCount> fileNameCountVec;
    for (const auto& pair : langCount)
    {
        fileNameCount fc {.name =  pair.first, .count =  pair.second};
        fileNameCountVec.emplace_back(fc);
    }
    std::sort(
            fileNameCountVec.begin(),
            fileNameCountVec.end(),
            [](const fileNameCount& a, const fileNameCount& b) {
                return a.count > b.count;
            });

    /* write to readme file */
    std::ofstream f;
    // file is run from /solutions/cmake-build-debug
    f.open("../README.md");
    f << "This readme was built with [build_readme.cpp](build_readme.cpp)\n\n";
    f << "| Language | Problems solved |\n";
    f << "| --- | ---: |\n";

    for (const auto& [lang, count]: fileNameCountVec) {
        f << "| " << langs[lang] << " | " << count << " |\n";
    }

    f << "\n\nTotal Problems Solved: **" << total << "**\n";
    f.close();
    std::cout << "README BUILT ✓" << std::endl;

    return 0;
}