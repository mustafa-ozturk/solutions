class Solution {
public:
    double average(vector<int>& v) {
        std::sort(v.begin(), v.end());
        v.pop_back();
        v.erase(v.begin());
        return std::accumulate(v.begin(), v.end(), 0.) / v.size();
    }
};