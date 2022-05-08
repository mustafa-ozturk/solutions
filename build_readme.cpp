#include <fstream>
#include <iostream>
#include <filesystem>
#include <utility>
#include <vector>
#include <algorithm>

struct FileNameCount {
    std::string name;
    int count{};

    // move to avoid unnecessary copies
    FileNameCount(std::string name, int count)
        : name(std::move(name)), count(count)
    {}
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
    std::unordered_map<std::string, int> extensionCount;
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
            extensionCount[fileExtension]++;
            total++;
        }
    }

    /* copy map into vec and sort it */
    std::vector<FileNameCount> fileNameCountVec;
    for (const auto& [name, count] : extensionCount)
    {
        // construct Struct in the vector
        fileNameCountVec.emplace_back(name, count);
    }
    std::sort(
            fileNameCountVec.begin(),
            fileNameCountVec.end(),
            [](const FileNameCount& a, const FileNameCount& b) {
                return a.count > b.count;
            });

    /* write to readme file */
    std::ofstream f;
    // file is run from /solutions/cmake-build-debug
    f.open("../README.md");
    f << "This readme was built with [build_readme.cpp](build_readme.cpp)\n\n";
    f << "| Language | Problems solved |\n";
    f << "| --- | ---: |\n";

    for (const auto& [name, count]: fileNameCountVec) {
        f << "| " << langs[name] << " | " << count << " |\n";
    }

    f << "\n\nTotal Problems Solved: **" << total << "**\n";
    f.close();
    std::cout << "README BUILT ✓" << std::endl;

    return 0;
}