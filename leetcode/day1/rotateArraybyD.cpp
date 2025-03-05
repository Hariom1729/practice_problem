#include <iostream>
#include <vector>
using namespace std;

void rotateArray(vector<int>& arr, int d) {
    int size = arr.size();
    vector<int> temp(arr.begin(), arr.begin() + d);  // Store first `d` elements

    // Shift remaining elements to the left
    for (int i = 0; i < size - d; i++) {
        arr[i] = arr[i + d];
    }

    // Copy temp back to the end
    for (int i = 0; i < d; i++) {
        arr[size - d + i] = temp[i];
    }

    // Print rotated array
    for (int num : arr) {
        cout << num << " ";
    }
    cout << endl;
}

int main() {
    vector<int> arr = {1, 3, 2, 5, 6, 7};  // Correctly declared vector
    int d = 3;

    rotateArray(arr, d);

    return 0;
}
