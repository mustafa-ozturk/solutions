#include <fstream>
#include <iostream>
#include <filesystem>
#include <utility>
#include <vector>
#include <algorithm>
#include <unordered_map>

class FileNameCount
{
public:
    FileNameCount() = delete;
    // move to avoid unnecessary copies
    FileNameCount(std::string name, int count)
            : m_name(std::move(name)), m_count(count)
    {}

    std::string getName() const
    {
        return m_name;
    }

    int getCount() const
    {
        return m_count;
    }
private:
    std::string m_name;
    int m_count = 0;
};

int main()
{
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
    for (const auto& entry: fs::recursive_directory_iterator("../"))
    {
        std::string filePath = entry.path().string();

        // skip test/cmake files
        bool skip = false;
        for (const auto& filter: filters)
        {
            if (filePath.find(filter) != std::string::npos)
            {
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
        if (langs.count(fileExtension) > 0)
        {
            extensionCount[fileExtension]++;
            total++;
        }
    }
    /* copy map into vec and sort it */
    std::vector<FileNameCount> fileNameCountVec;
    fileNameCountVec.reserve(extensionCount.size());
    for (const auto& [name, count]: extensionCount)
    {
        // construct Struct in the vector
        fileNameCountVec.emplace_back(name, count);
    }
    std::sort(
            fileNameCountVec.begin(),
            fileNameCountVec.end(),
            [](const FileNameCount& a, const FileNameCount& b)
            {
                return a.getCount() > b.getCount();
            });

    /* write to readme file */
    std::ofstream file;
    // file is run from /solutions/cmake-build-debug
    file.open("../README.md");
    file << "This readme was built with [build_readme.cpp](build_readme.cpp)\n\n";
    file << "| Language | Problems solved |\n";
    file << "| --- | ---: |\n";

    for (const auto& fileNameCount: fileNameCountVec)
    {
        file << "| " << langs[fileNameCount.getName()] << " | " << fileNameCount.getCount() << " |\n";
    }

    file << "\n\nTotal Problems Solved: **" << total << "**\n";
    file.close();
    std::cout << "README BUILT ✓" << std::endl;

    return 0;
}