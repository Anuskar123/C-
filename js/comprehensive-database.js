// C++ Programming Exam Questions Database - CSY2087 Course
// 125 Questions covering all weeks and topics
// Distribution: 85% predefined code, 10-15% pointers, algorithms, data structures

const questions = [
    // FIRST 50 QUESTIONS - Mixed Topics with Focus on Code Analysis
    
    // QUESTION 1 - Pointer Basics
    {
        id: 1,
        type: "code-output",
        category: "pointers",
        difficulty: "medium",
        week: 6,
        question: "What is the output of the following code?",
        code: `#include <iostream>
using namespace std;
int main() {
    int x = 10;
    int* ptr = &x;
    cout << *ptr << " " << ptr << " " << &x << endl;
    return 0;
}`,
        options: [
            "10 [address] [same address]",
            "10 10 10",
            "[address] [address] [address]",
            "Compilation error"
        ],
        correct: 0,
        explanation: "*ptr dereferences the pointer to get value 10. ptr holds the address of x. &x gives the address of x (same as ptr).",
        concept: "Pointer Dereferencing and Address-of Operator",
        answerLogic: "Step 1: x = 10, Step 2: ptr = &x (address of x), Step 3: *ptr = value at address = 10, Step 4: ptr = address, Step 5: &x = same address",
        examTips: "Remember: * dereferences (gets value), & gets address, pointer stores address"
    },

    // QUESTION 2 - Recursion with Output Prediction
    {
        id: 2,
        type: "code-output",
        category: "recursion",
        difficulty: "hard",
        week: 8,
        question: "What is the output of this recursive function?",
        code: `#include <iostream>
using namespace std;
void printNumbers(int n) {
    if (n > 0) {
        cout << n << " ";
        printNumbers(n - 1);
        cout << n << " ";
    }
}
int main() {
    printNumbers(3);
    return 0;
}`,
        options: [
            "3 2 1 1 2 3",
            "3 2 1",
            "1 2 3 3 2 1",
            "3 3 2 2 1 1"
        ],
        correct: 0,
        explanation: "Recursive calls: prints 3, calls printNumbers(2), prints 2, calls printNumbers(1), prints 1, calls printNumbers(0) (base case), then unwinds printing 1, 2, 3.",
        concept: "Recursion Call Stack and Unwinding",
        answerLogic: "Call stack: 3→2→1→0(base). Prints: 3(call), 2(call), 1(call), then unwind: 1(return), 2(return), 3(return)",
        examTips: "Draw the call stack to trace recursive execution. Remember code after recursive call executes during unwinding."
    },

    // QUESTION 3 - Array and Pointer Relationship
    {
        id: 3,
        type: "code-output",
        category: "arrays",
        difficulty: "medium",
        week: 4,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
int main() {
    int arr[] = {10, 20, 30, 40};
    int* ptr = arr;
    cout << *(ptr + 2) << " " << arr[2] << " " << ptr[2] << endl;
    return 0;
}`,
        options: [
            "30 30 30",
            "20 30 30",
            "30 20 20",
            "Compilation error"
        ],
        correct: 0,
        explanation: "Array name 'arr' is equivalent to pointer to first element. *(ptr+2), arr[2], and ptr[2] all access the third element (index 2) which is 30.",
        concept: "Array-Pointer Equivalence",
        answerLogic: "ptr = arr = address of arr[0]. ptr+2 = address of arr[2]. *(ptr+2) = arr[2] = ptr[2] = 30",
        examTips: "Array name is a pointer to first element. arr[i] ≡ *(arr+i) ≡ *(ptr+i) ≡ ptr[i]"
    },

    // QUESTION 4 - Function with Pointers (Pass by Reference)
    {
        id: 4,
        type: "code-output",
        category: "functions",
        difficulty: "medium",
        week: 3,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}
int main() {
    int x = 5, y = 10;
    swap(&x, &y);
    cout << x << " " << y << endl;
    return 0;
}`,
        options: [
            "5 10",
            "10 5",
            "0 0",
            "Compilation error"
        ],
        correct: 1,
        explanation: "Function receives addresses of x and y. Dereferencing pointers (*a, *b) allows swapping the actual values. x and y are swapped.",
        concept: "Pass by Pointer for Value Modification",
        answerLogic: "swap(&x, &y): a=&x, b=&y. temp=*a=5, *a=*b=10, *b=temp=5. Result: x=10, y=5",
        examTips: "Pass by pointer allows function to modify original variables. Use & to get address, * to access value."
    },

    // QUESTION 5 - Manual Bubble Sort Step-by-Step
    {
        id: 5,
        type: "step-by-step",
        category: "algorithms",
        difficulty: "medium",
        week: 9,
        question: "Sort the following array using Bubble Sort algorithm. Show each pass with detailed steps and comments.",
        initialArray: [64, 34, 25, 12, 22, 11, 90],
        instruction: "Show the array state after each comparison and swap in Pass 1:",
        options: [
            "Pass 1: [34,64,25,12,22,11,90] → [34,25,64,12,22,11,90] → [34,25,12,64,22,11,90] → [34,25,12,22,64,11,90] → [34,25,12,22,11,64,90] → [34,25,12,22,11,64,90]",
            "Pass 1: [64,34,25,12,22,11,90] → [34,64,25,12,22,11,90] → [34,25,64,12,22,11,90] → [34,25,12,64,22,11,90] → [34,25,12,22,64,11,90] → [34,25,12,22,11,64,90] → [34,25,12,22,11,64,90]",
            "Pass 1: [34,25,12,22,11,64,90] (final result only)",
            "Pass 1: No swaps needed"
        ],
        correct: 1,
        explanation: "Bubble sort compares adjacent elements and swaps if left > right. Pass 1: Compare 64&34(swap), 64&25(swap), 64&12(swap), 64&22(swap), 64&11(swap), 64&90(no swap). Largest element (90) is now in correct position.",
        concept: "Manual Bubble Sort Execution",
        answerLogic: "Step 1: Compare arr[0] & arr[1]: 64>34, swap → [34,64,...]. Step 2: Compare arr[1] & arr[2]: 64>25, swap → [34,25,64,...]. Continue until end of array.",
        examTips: "In bubble sort, after each complete pass, the largest unsorted element reaches its final position. Show every comparison and swap clearly with comments."
    },

    // QUESTION 6 - C-String Manipulation
    {
        id: 6,
        type: "code-output",
        category: "strings",
        difficulty: "medium",
        week: 5,
        question: "What is the output?",
        code: `#include <iostream>
#include <cstring>
using namespace std;
int main() {
    char str[] = "Hello";
    cout << strlen(str) << " " << sizeof(str) << endl;
    return 0;
}`,
        options: [
            "5 6",
            "5 5",
            "6 6",
            "4 5"
        ],
        correct: 0,
        explanation: "strlen() counts characters until null terminator (5 characters). sizeof() returns total array size including null terminator (6 bytes).",
        concept: "C-String Length vs Array Size",
        answerLogic: "str = {'H','e','l','l','o','\\0'}. strlen counts chars before \\0 = 5. sizeof counts all array elements = 6.",
        examTips: "strlen() counts characters, sizeof() counts bytes. C-strings always end with null terminator \\0."
    },

    // QUESTION 7 - Class and Object Basics
    {
        id: 7,
        type: "code-output",
        category: "oop",
        difficulty: "medium",
        week: 8,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
class Rectangle {
public:
    int length, width;
    Rectangle(int l, int w) : length(l), width(w) {}
    int area() { return length * width; }
};
int main() {
    Rectangle r1(5, 3);
    cout << r1.area() << endl;
    return 0;
}`,
        options: [
            "15",
            "8",
            "5",
            "Compilation error"
        ],
        correct: 0,
        explanation: "Constructor initializes length=5, width=3. area() method returns length*width = 5*3 = 15.",
        concept: "Class Constructor and Method Calls",
        answerLogic: "Rectangle r1(5, 3): calls constructor with l=5, w=3. Sets length=5, width=3. r1.area() = 5*3 = 15.",
        examTips: "Constructor initializer list syntax: Constructor(params) : member1(value1), member2(value2) {}"
    },

    // QUESTION 8 - Factorial with Pointers (Advanced)
    {
        id: 8,
        type: "code-output",
        category: "recursion",
        difficulty: "hard",
        week: 7,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
void factorial(int n, int* result) {
    if (n <= 1) {
        *result = 1;
        return;
    }
    int temp;
    factorial(n-1, &temp);
    *result = n * temp;
}
int main() {
    int fact;
    factorial(4, &fact);
    cout << fact << endl;
    return 0;
}`,
        options: [
            "24",
            "4",
            "1",
            "Compilation error"
        ],
        correct: 0,
        explanation: "Recursive factorial using pointer to store result. factorial(4) calculates 4! = 4*3*2*1 = 24.",
        concept: "Recursion with Pointer Parameters",
        answerLogic: "factorial(4,&fact): calls factorial(3,&temp), gets temp=6, sets *result=4*6=24. Base case: factorial(1) sets *result=1.",
        examTips: "Using pointers in recursion allows passing results back through parameters instead of return values."
    },

    // QUESTION 9 - Linear Search Algorithm
    {
        id: 9,
        type: "code-completion",
        category: "algorithms",
        difficulty: "easy",
        week: 9,
        question: "Complete the linear search function:",
        code: `int linearSearch(int arr[], int n, int target) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == _____) {
            return i;
        }
    }
    return -1;
}`,
        options: [
            "target",
            "n",
            "i",
            "arr[0]"
        ],
        correct: 0,
        explanation: "Linear search compares each array element with the target value. When found, return the index.",
        concept: "Linear Search Algorithm",
        answerLogic: "Loop through array comparing arr[i] with target. If match found, return index i. If not found, return -1.",
        examTips: "Linear search checks each element sequentially. Time complexity: O(n). Returns -1 if element not found."
    },

    // QUESTION 10 - Error Finding in Pointer Code
    {
        id: 10,
        type: "error-finding",
        category: "pointers",
        difficulty: "hard",
        week: 6,
        question: "Find the error in this code:",
        code: `#include <iostream>
using namespace std;
int main() {
    int* ptr;
    cout << *ptr << endl;
    return 0;
}`,
        options: [
            "Wrong syntax for pointer declaration",
            "Dereferencing uninitialized pointer",
            "Missing semicolon",
            "No error"
        ],
        correct: 1,
        explanation: "Pointer 'ptr' is declared but not initialized. Dereferencing (*ptr) an uninitialized pointer causes undefined behavior.",
        concept: "Pointer Initialization and Safety",
        answerLogic: "ptr is declared but not assigned any address. *ptr tries to access memory at undefined location = undefined behavior.",
        examTips: "Always initialize pointers before use. Uninitialized pointers contain garbage addresses and cause crashes."
    },

    // QUESTION 11 - Manual Quick Sort Partitioning Step-by-Step
    {
        id: 11,
        type: "step-by-step",
        category: "algorithms",
        difficulty: "hard",
        week: 9,
        question: "Given array [3, 6, 8, 10, 1, 2, 1] with pivot = 3 (first element), show the partitioning process step by step. Mark each comparison and movement.",
        initialArray: [3, 6, 8, 10, 1, 2, 1],
        instruction: "Show the partitioning steps with left and right pointers:",
        options: [
            "Step 1: L=6, R=1 → swap → [3,1,8,10,1,2,6] | Step 2: L=8, R=2 → swap → [3,1,2,10,1,8,6] | Step 3: L=10, R=1 → swap → [3,1,2,1,10,8,6] | Final: swap pivot → [1,1,2,3,10,8,6]",
            "Step 1: Compare all with pivot, move smaller left",
            "Step 1: L=1, R=6 → no swap needed",
            "Pivot is already in correct position"
        ],
        correct: 0,
        explanation: "Quick sort partitioning: Use two pointers from left and right. Left finds element ≥ pivot, right finds element ≤ pivot, swap them. Continue until pointers meet, then swap pivot to final position.",
        concept: "Manual Quick Sort Partitioning",
        answerLogic: "Left pointer finds first element ≥ pivot (3). Right pointer finds first element ≤ pivot from right. Swap them. Repeat until pointers cross. Finally swap pivot to correct position.",
        examTips: "In quick sort partitioning: Left seeks large elements, right seeks small elements. When they cross, swap pivot with right pointer position. Show every comparison with marks (✓ for correct position, ← → for pointer movement)."
    },

    // QUESTION 12 - String Array and Pointers
    {
        id: 12,
        type: "code-output",
        category: "strings",
        difficulty: "medium",
        week: 5,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
int main() {
    char* words[] = {"apple", "banana", "cherry"};
    cout << words[1][2] << " " << *(words[0] + 1) << endl;
    return 0;
}`,
        options: [
            "n p",
            "a b",
            "n a",
            "Compilation error"
        ],
        correct: 2,
        explanation: "words[1][2] accesses 3rd character of 'banana' which is 'n'. *(words[0]+1) accesses 2nd character of 'apple' which is 'p'.",
        concept: "Array of C-String Pointers",
        answerLogic: "words[1] = 'banana', words[1][2] = 'n'. words[0] = 'apple', words[0]+1 points to 'p', *(words[0]+1) = 'p'.",
        examTips: "Array of string pointers: words[i][j] accesses jth character of ith string. Pointer arithmetic works on strings."
    },

    // QUESTION 13 - Binary Search Algorithm
    {
        id: 13,
        type: "fill-blank",
        category: "algorithms",
        difficulty: "medium",
        week: 9,
        question: "Complete the binary search middle calculation:",
        code: `int binarySearch(int arr[], int left, int right, int target) {
    while (left <= right) {
        int mid = left + (_____ - left) / 2;
        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}`,
        options: [
            "right",
            "left",
            "target",
            "arr[right]"
        ],
        correct: 0,
        explanation: "Binary search finds middle point: mid = left + (right - left) / 2. This avoids integer overflow compared to (left + right) / 2.",
        concept: "Binary Search Middle Calculation",
        answerLogic: "mid = left + (right - left) / 2 = (left + right) / 2 but safer from overflow. Divides search space in half.",
        examTips: "Binary search requires sorted array. Each iteration eliminates half the search space. Time complexity: O(log n)."
    },

    // QUESTION 14 - Struct with Pointers
    {
        id: 14,
        type: "code-output",
        category: "structures",
        difficulty: "medium",
        week: 6,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
struct Point {
    int x, y;
};
int main() {
    Point p = {3, 4};
    Point* ptr = &p;
    cout << ptr->x << " " << (*ptr).y << endl;
    return 0;
}`,
        options: [
            "3 4",
            "0 0",
            "Compilation error",
            "Garbage values"
        ],
        correct: 0,
        explanation: "ptr->x is equivalent to (*ptr).x. Both access the x member of the struct through the pointer. p.x=3, p.y=4.",
        concept: "Struct Pointer Access",
        answerLogic: "ptr = &p points to struct p. ptr->x = (*ptr).x = p.x = 3. (*ptr).y = p.y = 4.",
        examTips: "Two ways to access struct members through pointer: ptr->member or (*ptr).member. Arrow operator -> is more common."
    },

    // QUESTION 15 - Manual Insertion Sort Step-by-Step
    {
        id: 15,
        type: "step-by-step",
        category: "algorithms",
        difficulty: "medium",
        week: 9,
        question: "Sort the array [5, 2, 4, 6, 1, 3] using Insertion Sort. Show each insertion step with detailed movements and comments.",
        initialArray: [5, 2, 4, 6, 1, 3],
        instruction: "Show the array state after each element insertion with movement arrows:",
        options: [
            "Pass 1: [2,5,4,6,1,3] | Pass 2: [2,4,5,6,1,3] | Pass 3: [2,4,5,6,1,3] | Pass 4: [1,2,4,5,6,3] | Pass 5: [1,2,3,4,5,6]",
            "Pass 1: Insert 2 → [2,5] → [2,5,4,6,1,3] | Pass 2: Insert 4 → [2,4,5] → [2,4,5,6,1,3] | Pass 3: Insert 6 → [2,4,5,6] → [2,4,5,6,1,3] | Pass 4: Insert 1 → [1,2,4,5,6] → [1,2,4,5,6,3] | Pass 5: Insert 3 → [1,2,3,4,5,6]",
            "All elements already sorted",
            "Pass 1: [1,2,3,4,5,6] (final only)"
        ],
        correct: 1,
        explanation: "Insertion sort takes each element and inserts it into the correct position in the already sorted portion. Pass 1: Insert 2 into [5]. Pass 2: Insert 4 into [2,5]. Continue for each element.",
        concept: "Manual Insertion Sort Execution",
        answerLogic: "Start: [5|2,4,6,1,3] (sorted|unsorted). Take 2, insert into sorted portion [5] → [2,5]. Take 4, insert into [2,5] → [2,4,5]. Continue with remaining elements.",
        examTips: "Insertion sort: maintain sorted portion on left, take next element from unsorted portion, shift elements right to make space, insert in correct position. Use arrows (← ←) to show element movements."
    },

    // QUESTION 16 - Function Pointers Basics
    {
        id: 16,
        type: "code-output",
        category: "pointers",
        difficulty: "hard",
        week: 7,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
int add(int a, int b) { return a + b; }
int multiply(int a, int b) { return a * b; }
int main() {
    int (*operation)(int, int) = add;
    cout << operation(3, 4) << " ";
    operation = multiply;
    cout << operation(3, 4) << endl;
    return 0;
}`,
        options: [
            "7 12",
            "12 7",
            "7 7",
            "Compilation error"
        ],
        correct: 0,
        explanation: "Function pointer 'operation' first points to 'add' function (3+4=7), then points to 'multiply' function (3*4=12).",
        concept: "Function Pointers",
        answerLogic: "operation = add, operation(3,4) calls add(3,4) = 7. operation = multiply, operation(3,4) calls multiply(3,4) = 12.",
        examTips: "Function pointers allow storing and calling functions dynamically. Syntax: return_type (*ptr_name)(parameters)."
    },

    // QUESTION 17 - Dynamic Memory Allocation
    {
        id: 17,
        type: "error-finding",
        category: "pointers",
        difficulty: "hard",
        week: 7,
        question: "Find the error in this dynamic memory code:",
        code: `#include <iostream>
using namespace std;
int main() {
    int* ptr = new int(10);
    cout << *ptr << endl;
    // Missing delete statement
    return 0;
}`,
        options: [
            "Wrong syntax for new operator",
            "Memory leak - missing delete",
            "Cannot dereference ptr",
            "No error"
        ],
        correct: 1,
        explanation: "Memory allocated with 'new' must be freed with 'delete' to avoid memory leaks. Missing 'delete ptr;'",
        concept: "Dynamic Memory Management",
        answerLogic: "new allocates memory on heap. Must call delete to free memory. Without delete, memory leak occurs.",
        examTips: "Every 'new' must have corresponding 'delete'. Use new/delete for single objects, new[]/delete[] for arrays."
    },

    // QUESTION 18 - Manual Selection Sort Step-by-Step  
    {
        id: 18,
        type: "step-by-step",
        category: "algorithms",
        difficulty: "medium",
        week: 9,
        question: "Sort the array [29, 10, 14, 37, 13] using Selection Sort. Show each pass with minimum finding process and marks.",
        initialArray: [29, 10, 14, 37, 13],
        instruction: "Show each pass with minimum selection and final swap:",
        options: [
            "Pass 1: min=10 at index 1, swap with index 0 → [10,29,14,37,13] | Pass 2: min=14 at index 2, swap with index 1 → [10,14,29,37,13] | Pass 3: min=13 at index 4, swap with index 2 → [10,14,13,37,29] | Pass 4: min=29 at index 4, swap with index 3 → [10,14,13,29,37]",
            "Pass 1: Find min(10), swap → [10,29,14,37,13] | Pass 2: Find min(14), swap → [10,14,29,37,13] | Pass 3: Find min(13), swap → [10,14,13,37,29] | Pass 4: Find min(29), swap → [10,14,13,29,37]",
            "All passes: [10,14,13,29,37] (final only)",
            "Pass 1: [10,14,13,29,37] direct result"
        ],
        correct: 1,
        explanation: "Selection sort finds the minimum element in the unsorted portion and swaps it with the first unsorted element. Pass 1: Find min in [29,10,14,37,13] = 10, swap with position 0. Pass 2: Find min in [29,14,37,13] = 14, swap with position 1.",
        concept: "Manual Selection Sort Execution",
        answerLogic: "Pass 1: scan [29,10,14,37,13], min=10 at index 1, swap with index 0. Pass 2: scan [29,14,37,13], min=14 at index 2, swap with index 1. Continue until sorted.",
        examTips: "Selection sort: find minimum in unsorted portion, mark it, swap with first unsorted position. Show scanning process with marks (✓ for current min, ✗ for rejected, ↔ for final swap)."
    },

    // QUESTION 19 - Manual Merge Sort Step-by-Step
    {
        id: 19,
        type: "step-by-step",
        category: "algorithms",
        difficulty: "hard",
        week: 9,
        question: "Show the complete Merge Sort process for array [38, 27, 43, 3, 9, 82, 10]. Draw the divide phase and merge phase with detailed steps.",
        initialArray: [38, 27, 43, 3, 9, 82, 10],
        instruction: "Show the divide and conquer tree with merging steps:",
        options: [
            "Divide: [38,27,43,3,9,82,10] → [38,27,43,3][9,82,10] → [38,27][43,3][9,82][10] → [38][27][43][3][9][82][10] | Merge: [27,38][3,43][9,82][10] → [3,27,38,43][9,10,82] → [3,9,10,27,38,43,82]",
            "Direct sort to [3,9,10,27,38,43,82]",
            "Split in half and merge back",
            "Divide: [38,27,43,3][9,82,10] → Final: [3,9,10,27,38,43,82]"
        ],
        correct: 0,
        explanation: "Merge sort recursively divides array until single elements, then merges sorted pairs back together. Divide phase creates a binary tree structure, merge phase combines sorted subarrays maintaining order.",
        concept: "Manual Merge Sort Divide and Conquer",
        answerLogic: "Divide: Split array in half recursively until single elements. Merge: Compare first elements of two sorted arrays, take smaller, advance pointer, repeat until all merged.",
        examTips: "Merge sort visualization: draw tree showing divide phase (top-down) and merge phase (bottom-up). In merge step, always compare front elements of two sorted arrays and take the smaller one. Mark comparison points with arrows (← →)."
    },

    // QUESTION 20 - C-String Functions
    {
        id: 20,
        type: "code-output",
        category: "strings",
        difficulty: "medium",
        week: 5,
        question: "What is the output?",
        code: `#include <iostream>
#include <cstring>
using namespace std;
int main() {
    char str1[] = "Hello";
    char str2[] = "World";
    strcat(str1, str2);
    cout << str1 << endl;
    return 0;
}`,
        options: [
            "HelloWorld",
            "Hello World",
            "WorldHello",
            "Compilation error"
        ],
        correct: 0,
        explanation: "strcat() concatenates str2 to the end of str1. Result: 'Hello' + 'World' = 'HelloWorld' stored in str1.",
        concept: "C-String Concatenation",
        answerLogic: "strcat(str1, str2) appends str2 to end of str1. str1 must have enough space. Result stored in str1.",
        examTips: "strcat() modifies first string. Ensure destination has enough space to avoid buffer overflow."
    },

    // QUESTION 21 - Pointer Arithmetic
    {
        id: 21,
        type: "code-output",
        category: "pointers",
        difficulty: "medium",
        week: 6,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
int main() {
    int arr[] = {10, 20, 30, 40};
    int* ptr = arr + 1;
    cout << *ptr << " " << *(ptr + 1) << " " << ptr[-1] << endl;
    return 0;
}`,
        options: [
            "20 30 10",
            "10 20 30",
            "20 10 30",
            "Compilation error"
        ],
        correct: 0,
        explanation: "ptr = arr + 1 points to arr[1]. *ptr = 20, *(ptr+1) = arr[2] = 30, ptr[-1] = arr[0] = 10.",
        concept: "Pointer Arithmetic and Array Access",
        answerLogic: "ptr = &arr[1]. *ptr = arr[1] = 20. *(ptr+1) = arr[2] = 30. ptr[-1] = arr[0] = 10.",
        examTips: "Pointer arithmetic: ptr+n moves n elements forward, ptr[-1] accesses previous element."
    },

    // QUESTION 22 - Class Inheritance Basics
    {
        id: 22,
        type: "code-output",
        category: "oop",
        difficulty: "medium",
        week: 8,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
class Base {
public:
    int value;
    Base(int v) : value(v) {}
};
class Derived : public Base {
public:
    Derived(int v) : Base(v * 2) {}
};
int main() {
    Derived d(5);
    cout << d.value << endl;
    return 0;
}`,
        options: [
            "5",
            "10",
            "0",
            "Compilation error"
        ],
        correct: 1,
        explanation: "Derived constructor calls Base constructor with v*2 = 5*2 = 10. Base constructor sets value = 10.",
        concept: "Class Inheritance and Constructor Chaining",
        answerLogic: "Derived d(5): calls Derived(5), which calls Base(5*2=10), which sets value=10.",
        examTips: "Derived class constructor must call base class constructor. Use initializer list: Derived() : Base(args) {}"
    },

    // QUESTION 23 - Two-Dimensional Array with Pointers
    {
        id: 23,
        type: "code-output",
        category: "arrays",
        difficulty: "hard",
        week: 4,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
int main() {
    int arr[2][3] = {{1, 2, 3}, {4, 5, 6}};
    cout << *(*(arr + 1) + 2) << " " << arr[1][2] << endl;
    return 0;
}`,
        options: [
            "6 6",
            "5 6",
            "6 5",
            "Compilation error"
        ],
        correct: 0,
        explanation: "*(*(arr + 1) + 2) = arr[1][2] = 6. Both expressions access the same element at row 1, column 2.",
        concept: "2D Array Pointer Notation",
        answerLogic: "arr+1 = &arr[1]. *(arr+1) = arr[1]. *(arr+1)+2 = &arr[1][2]. *(*(arr+1)+2) = arr[1][2] = 6.",
        examTips: "2D array: arr[i][j] ≡ *(*(arr+i)+j). arr is array of pointers to rows."
    },

    // QUESTION 24 - Recursive Fibonacci Error
    {
        id: 24,
        type: "error-finding",
        category: "recursion",
        difficulty: "medium",
        week: 8,
        question: "Find the error in this Fibonacci function:",
        code: `int fibonacci(int n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    return fibonacci(n-1) + fibonacci(n-2);
}`,
        options: [
            "Missing base case for negative numbers",
            "Wrong recursive formula",
            "Stack overflow for large n",
            "No error"
        ],
        correct: 3,
        explanation: "This is a correct recursive Fibonacci implementation. It has proper base cases and correct recursive formula. However, it's inefficient for large n.",
        concept: "Recursive Fibonacci Implementation",
        answerLogic: "Base cases: fib(0)=0, fib(1)=1. Recursive: fib(n) = fib(n-1) + fib(n-2). Logic is correct.",
        examTips: "This Fibonacci is correct but inefficient O(2^n). Consider dynamic programming for better performance."
    },

    // QUESTION 25 - Switch Statement with Enums
    {
        id: 25,
        type: "code-output",
        category: "control",
        difficulty: "medium",
        week: 2,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
enum Color { RED, GREEN, BLUE };
int main() {
    Color c = GREEN;
    switch(c) {
        case RED: cout << "R"; break;
        case GREEN: cout << "G"; break;
        case BLUE: cout << "B"; break;
        default: cout << "X";
    }
    return 0;
}`,
        options: [
            "G",
            "GREEN",
            "1",
            "X"
        ],
        correct: 0,
        explanation: "Enum Color assigns RED=0, GREEN=1, BLUE=2. Variable c=GREEN=1, so switch executes GREEN case printing 'G'.",
        concept: "Enumeration and Switch Statement",
        answerLogic: "enum Color: RED=0, GREEN=1, BLUE=2. c=GREEN=1. switch(1) matches case GREEN, prints 'G'.",
        examTips: "Enums assign integer values starting from 0. Use enums with switch for readable code."
    },

    // QUESTION 26 - String Class vs C-String
    {
        id: 26,
        type: "multiple-choice",
        category: "strings",
        difficulty: "easy",
        week: 5,
        question: "What is the difference between string and char[] in C++?",
        options: [
            "No difference",
            "string is a class with methods, char[] is array of characters",
            "char[] is faster",
            "string cannot be modified"
        ],
        correct: 1,
        explanation: "string is a C++ class with methods like length(), substr(), etc. char[] is a C-style array of characters with manual management.",
        concept: "C++ String Class vs C-String",
        answerLogic: "string: C++ class, dynamic size, built-in methods. char[]: C-style, fixed size, manual operations.",
        examTips: "Use string class for easier manipulation. Use char[] when interfacing with C libraries or for performance."
    },

    // QUESTION 27 - Operator Overloading Basics
    {
        id: 27,
        type: "code-output",
        category: "oop",
        difficulty: "hard",
        week: 8,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
class Counter {
    int count;
public:
    Counter(int c = 0) : count(c) {}
    Counter operator++(int) {
        Counter temp = *this;
        count++;
        return temp;
    }
    int getValue() { return count; }
};
int main() {
    Counter c(5);
    Counter c2 = c++;
    cout << c.getValue() << " " << c2.getValue() << endl;
    return 0;
}`,
        options: [
            "6 5",
            "5 6",
            "6 6",
            "5 5"
        ],
        correct: 0,
        explanation: "Post-increment operator++ returns old value before incrementing. c++ increments c to 6 but returns old value 5 to c2.",
        concept: "Operator Overloading - Post-increment",
        answerLogic: "c(5), c++ creates temp(5), increments c to 6, returns temp(5) to c2. Result: c=6, c2=5.",
        examTips: "Post-increment: operator++(int) returns old value. Pre-increment: operator++() returns new value."
    },

    // QUESTION 28 - File I/O Basics
    {
        id: 28,
        type: "multiple-choice",
        category: "basics",
        difficulty: "medium",
        week: 7,
        question: "Which header is required for file input/output operations?",
        options: [
            "<iostream>",
            "<fstream>",
            "<fileio>",
            "<stdio.h>"
        ],
        correct: 1,
        explanation: "<fstream> provides ifstream, ofstream, and fstream classes for file input/output operations in C++.",
        concept: "File I/O Headers",
        answerLogic: "<fstream> contains file stream classes: ifstream (input), ofstream (output), fstream (both).",
        examTips: "Use <fstream> for file operations, <iostream> for console I/O, <sstream> for string streams."
    },

    // QUESTION 29 - Virtual Functions Basics
    {
        id: 29,
        type: "code-output",
        category: "oop",
        difficulty: "hard",
        week: 8,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
class Base {
public:
    virtual void show() { cout << "Base "; }
};
class Derived : public Base {
public:
    void show() override { cout << "Derived "; }
};
int main() {
    Base* ptr = new Derived();
    ptr->show();
    delete ptr;
    return 0;
}`,
        options: [
            "Base",
            "Derived",
            "Base Derived",
            "Compilation error"
        ],
        correct: 1,
        explanation: "Virtual function enables polymorphism. Base pointer to Derived object calls Derived's overridden show() method.",
        concept: "Virtual Functions and Polymorphism",
        answerLogic: "ptr points to Derived object. Virtual function show() calls Derived::show() due to dynamic binding.",
        examTips: "Virtual functions enable runtime polymorphism. Base pointer can call derived class methods."
    },

    // QUESTION 30 - Template Basics
    {
        id: 30,
        type: "code-output",
        category: "oop",
        difficulty: "medium",
        week: 9,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
template<typename T>
T maximum(T a, T b) {
    return (a > b) ? a : b;
}
int main() {
    cout << maximum(5, 3) << " " << maximum(2.5, 3.7) << endl;
    return 0;
}`,
        options: [
            "5 3.7",
            "3 2.5",
            "5 2.5",
            "Compilation error"
        ],
        correct: 0,
        explanation: "Template function maximum works with different types. maximum(5,3) returns 5, maximum(2.5,3.7) returns 3.7.",
        concept: "Function Templates",
        answerLogic: "Template instantiated for int: maximum<int>(5,3) = 5. For double: maximum<double>(2.5,3.7) = 3.7.",
        examTips: "Templates allow generic programming. Compiler generates specific functions for each type used."
    },

    // QUESTION 31 - Exception Handling Basics
    {
        id: 31,
        type: "code-output",
        category: "oop",
        difficulty: "medium",
        week: 9,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
int main() {
    try {
        int x = 10, y = 0;
        if (y == 0) throw "Division by zero!";
        cout << x / y << endl;
    }
    catch (const char* msg) {
        cout << "Error: " << msg << endl;
    }
    return 0;
}`,
        options: [
            "Error: Division by zero!",
            "10",
            "Infinite",
            "Runtime error"
        ],
        correct: 0,
        explanation: "When y==0, throw statement throws a C-string exception. Catch block catches it and prints the error message.",
        concept: "Exception Handling with Try-Catch",
        answerLogic: "y==0 is true, throw executes with message 'Division by zero!'. Catch block catches and prints it.",
        examTips: "Use try-catch for error handling. Throw exceptions for error conditions, catch them to handle gracefully."
    },

    // QUESTION 32 - Namespace Usage
    {
        id: 32,
        type: "multiple-choice",
        category: "basics",
        difficulty: "easy",
        week: 1,
        question: "What is the purpose of namespaces in C++?",
        options: [
            "To increase program speed",
            "To avoid naming conflicts and organize code",
            "To allocate memory",
            "To handle exceptions"
        ],
        correct: 1,
        explanation: "Namespaces prevent naming conflicts by grouping related functionality. They organize code and avoid name collisions.",
        concept: "Namespace Purpose and Usage",
        answerLogic: "Namespaces create scope for names. std namespace contains standard library. Custom namespaces organize code.",
        examTips: "Use namespaces to organize code and prevent naming conflicts. std:: prefix is needed without 'using namespace std;'"
    },

    // QUESTION 33 - Const Correctness
    {
        id: 33,
        type: "error-finding",
        category: "basics",
        difficulty: "medium",
        week: 3,
        question: "Find the error in this const-related code:",
        code: `#include <iostream>
using namespace std;
int main() {
    const int x = 10;
    x = 20;  // Error here
    cout << x << endl;
    return 0;
}`,
        options: [
            "Wrong const syntax",
            "Cannot assign to const variable",
            "Missing initialization",
            "No error"
        ],
        correct: 1,
        explanation: "Const variables cannot be modified after initialization. Attempting to assign x = 20 causes compilation error.",
        concept: "Const Variable Immutability",
        answerLogic: "const int x = 10 makes x immutable. x = 20 tries to modify const variable = compilation error.",
        examTips: "Const variables must be initialized at declaration and cannot be modified. Use const for values that shouldn't change."
    },

    // QUESTION 34 - Static Variables in Functions
    {
        id: 34,
        type: "code-output",
        category: "functions",
        difficulty: "medium",
        week: 3,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
void counter() {
    static int count = 0;
    count++;
    cout << count << " ";
}
int main() {
    counter();
    counter();
    counter();
    return 0;
}`,
        options: [
            "1 2 3",
            "1 1 1",
            "0 1 2",
            "3 3 3"
        ],
        correct: 0,
        explanation: "Static variable retains its value between function calls. count is initialized once and incremented each call: 1, 2, 3.",
        concept: "Static Local Variables",
        answerLogic: "static int count = 0 initializes once. First call: count=1. Second call: count=2. Third call: count=3.",
        examTips: "Static local variables preserve values between function calls. Initialized only once, not on each call."
    },

    // QUESTION 35 - Reference Variables
    {
        id: 35,
        type: "code-output",
        category: "basics",
        difficulty: "medium",
        week: 6,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
int main() {
    int x = 10;
    int& ref = x;
    ref = 20;
    cout << x << " " << ref << endl;
    return 0;
}`,
        options: [
            "10 20",
            "20 20",
            "10 10",
            "Compilation error"
        ],
        correct: 1,
        explanation: "Reference 'ref' is an alias for 'x'. Changing ref changes x. Both x and ref refer to the same memory location.",
        concept: "Reference Variables as Aliases",
        answerLogic: "int& ref = x makes ref an alias for x. ref = 20 changes x to 20. Both x and ref are 20.",
        examTips: "References are aliases, not copies. Changes to reference affect the original variable."
    },

    // QUESTION 36 - Multi-dimensional Array Size
    {
        id: 36,
        type: "fill-blank",
        category: "arrays",
        difficulty: "easy",
        week: 4,
        question: "Complete the declaration of a 3x4 two-dimensional integer array:",
        code: "int matrix[_____][4];",
        options: [
            "3",
            "4",
            "12",
            "7"
        ],
        correct: 0,
        explanation: "For a 3x4 matrix, first dimension is 3 (rows), second dimension is 4 (columns). Declaration: int matrix[3][4];",
        concept: "Multi-dimensional Array Declaration",
        answerLogic: "3x4 matrix has 3 rows and 4 columns. Syntax: type name[rows][columns] = int matrix[3][4];",
        examTips: "2D array declaration: type name[rows][columns]. First index is row, second is column."
    },

    // QUESTION 37 - Bitwise Operations
    {
        id: 37,
        type: "code-output",
        category: "basics",
        difficulty: "hard",
        week: 2,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
int main() {
    int a = 5;  // 101 in binary
    int b = 3;  // 011 in binary
    cout << (a & b) << " " << (a | b) << " " << (a ^ b) << endl;
    return 0;
}`,
        options: [
            "1 7 6",
            "5 3 2",
            "0 8 8",
            "1 6 7"
        ],
        correct: 0,
        explanation: "Bitwise AND: 101 & 011 = 001 = 1. Bitwise OR: 101 | 011 = 111 = 7. Bitwise XOR: 101 ^ 011 = 110 = 6.",
        concept: "Bitwise Operators",
        answerLogic: "a=5(101), b=3(011). AND: 101&011=001=1. OR: 101|011=111=7. XOR: 101^011=110=6.",
        examTips: "Bitwise operations work on individual bits: & (AND), | (OR), ^ (XOR), ~ (NOT), << (left shift), >> (right shift)."
    },

    // QUESTION 38 - String Stream Usage
    {
        id: 38,
        type: "code-output",
        category: "strings",
        difficulty: "medium",
        week: 7,
        question: "What is the output?",
        code: `#include <iostream>
#include <sstream>
using namespace std;
int main() {
    stringstream ss;
    ss << "Hello" << " " << "World" << " " << 123;
    cout << ss.str() << endl;
    return 0;
}`,
        options: [
            "Hello World 123",
            "HelloWorld123",
            "Hello World",
            "123"
        ],
        correct: 0,
        explanation: "stringstream works like cout but stores output in a string. ss.str() returns the accumulated string 'Hello World 123'.",
        concept: "String Stream for String Building",
        answerLogic: "ss << builds string: 'Hello' + ' ' + 'World' + ' ' + '123' = 'Hello World 123'. ss.str() returns it.",
        examTips: "Use stringstream to build strings from multiple parts. More efficient than repeated string concatenation."
    },

    // QUESTION 39 - Scope Resolution Operator
    {
        id: 39,
        type: "code-output",
        category: "oop",
        difficulty: "medium",
        week: 8,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
int value = 100;
class Test {
public:
    int value = 50;
    void show() {
        cout << value << " " << ::value << endl;
    }
};
int main() {
    Test t;
    t.show();
    return 0;
}`,
        options: [
            "50 100",
            "100 50",
            "50 50",
            "100 100"
        ],
        correct: 0,
        explanation: "'value' refers to class member (50). '::value' uses scope resolution to access global variable (100).",
        concept: "Scope Resolution Operator",
        answerLogic: "value = class member = 50. ::value = global variable = 100. :: accesses global scope.",
        examTips: ":: operator accesses global scope or specific namespace. Useful when local names hide global ones."
    },

    // QUESTION 40 - Memory Layout and Alignment
    {
        id: 40,
        type: "multiple-choice",
        category: "structures",
        difficulty: "hard",
        week: 6,
        question: "What affects the size of a struct in memory?",
        options: [
            "Only the sum of member sizes",
            "Member sizes and memory alignment/padding",
            "Only the largest member",
            "Number of members only"
        ],
        correct: 1,
        explanation: "Struct size depends on member sizes plus padding for memory alignment. Compiler may add padding between members for optimal access.",
        concept: "Struct Memory Layout and Padding",
        answerLogic: "Compiler adds padding to align members on appropriate boundaries (e.g., 4-byte alignment for int). Total size includes padding.",
        examTips: "Struct size may be larger than sum of members due to padding. Use sizeof() to get actual size."
    },

    // QUESTION 41 - Vector vs Array
    {
        id: 41,
        type: "multiple-choice",
        category: "arrays",
        difficulty: "medium",
        week: 5,
        question: "What is the main advantage of std::vector over regular arrays?",
        options: [
            "Faster access",
            "Dynamic size and automatic memory management",
            "Less memory usage",
            "Simpler syntax"
        ],
        correct: 1,
        explanation: "std::vector provides dynamic resizing and automatic memory management, unlike fixed-size arrays with manual memory handling.",
        concept: "Vector vs Array Comparison",
        answerLogic: "vector: dynamic size, automatic memory management, bounds checking. Array: fixed size, manual memory, faster access.",
        examTips: "Use vector for dynamic collections, arrays for fixed-size collections or performance-critical code."
    },

    // QUESTION 42 - Copy Constructor
    {
        id: 42,
        type: "code-output",
        category: "oop",
        difficulty: "hard",
        week: 8,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
class MyClass {
    int* data;
public:
    MyClass(int val) { data = new int(val); }
    MyClass(const MyClass& other) { 
        data = new int(*other.data);
        cout << "Copy constructor called" << endl;
    }
    ~MyClass() { delete data; }
    int getValue() { return *data; }
};
int main() {
    MyClass obj1(10);
    MyClass obj2 = obj1;
    cout << obj2.getValue() << endl;
    return 0;
}`,
        options: [
            "Copy constructor called\n10",
            "10",
            "Copy constructor called\n0",
            "Compilation error"
        ],
        correct: 0,
        explanation: "MyClass obj2 = obj1 triggers copy constructor. It prints the message and creates deep copy. obj2.getValue() returns 10.",
        concept: "Copy Constructor Deep Copy",
        answerLogic: "obj2 = obj1 calls copy constructor, prints message, creates new int with value 10. getValue() returns 10.",
        examTips: "Copy constructor is called for object initialization from another object. Use deep copy for pointers."
    },

    // QUESTION 43 - STL Algorithms
    {
        id: 43,
        type: "code-output",
        category: "algorithms",
        difficulty: "medium",
        week: 9,
        question: "What is the output?",
        code: `#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;
int main() {
    vector<int> v = {3, 1, 4, 1, 5};
    sort(v.begin(), v.end());
    cout << v[0] << " " << v[4] << endl;
    return 0;
}`,
        options: [
            "1 5",
            "3 5",
            "1 4",
            "3 1"
        ],
        correct: 0,
        explanation: "sort() arranges vector in ascending order: {1, 1, 3, 4, 5}. First element v[0] = 1, last element v[4] = 5.",
        concept: "STL Sort Algorithm",
        answerLogic: "Original: {3,1,4,1,5}. After sort: {1,1,3,4,5}. v[0] = first = 1, v[4] = last = 5.",
        examTips: "STL sort() uses efficient algorithm (typically quicksort/introsort). Works with iterators or index ranges."
    },

    // QUESTION 44 - Smart Pointers Basics
    {
        id: 44,
        type: "multiple-choice",
        category: "pointers",
        difficulty: "hard",
        week: 7,
        question: "What is the advantage of std::unique_ptr over raw pointers?",
        options: [
            "Faster access",
            "Automatic memory management and exception safety",
            "Uses less memory",
            "Allows multiple ownership"
        ],
        correct: 1,
        explanation: "unique_ptr automatically deletes memory when out of scope, preventing memory leaks and providing exception safety.",
        concept: "Smart Pointer Automatic Management",
        answerLogic: "unique_ptr: RAII (Resource Acquisition Is Initialization), automatic delete, exception safe, single ownership.",
        examTips: "Use smart pointers for automatic memory management. unique_ptr for single ownership, shared_ptr for multiple ownership."
    },

    // QUESTION 45 - Lambda Functions
    {
        id: 45,
        type: "code-output",
        category: "oop",
        difficulty: "hard",
        week: 9,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
int main() {
    auto lambda = [](int a, int b) { return a + b; };
    cout << lambda(3, 4) << endl;
    return 0;
}`,
        options: [
            "7",
            "34",
            "3",
            "Compilation error"
        ],
        correct: 0,
        explanation: "Lambda function [](int a, int b) { return a + b; } takes two integers and returns their sum. lambda(3, 4) = 3 + 4 = 7.",
        concept: "Lambda Function Syntax and Usage",
        answerLogic: "Lambda syntax: [captures](parameters) { body }. lambda(3,4) calls function with a=3, b=4, returns 3+4=7.",
        examTips: "Lambdas are anonymous functions. Syntax: [capture](params) { body }. Use auto for type deduction."
    },

    // QUESTION 46 - Preprocessor Macros
    {
        id: 46,
        type: "code-output",
        category: "basics",
        difficulty: "medium",
        week: 1,
        question: "What is the output?",
        code: `#include <iostream>
#define MAX(a, b) ((a) > (b) ? (a) : (b))
using namespace std;
int main() {
    int x = 5, y = 3;
    cout << MAX(x++, y++) << endl;
    cout << x << " " << y << endl;
    return 0;
}`,
        options: [
            "5\n6 4",
            "5\n7 4",
            "6\n7 4",
            "5\n5 3"
        ],
        correct: 1,
        explanation: "Macro expands to ((x++) > (y++) ? (x++) : (y++)). x++ is evaluated twice: once in comparison, once in result. Final x=7, y=4.",
        concept: "Macro Side Effects",
        answerLogic: "MAX(x++,y++) expands to ((x++)>(y++)?(x++):(y++)). x incremented twice (5→6→7), y once (3→4). Returns 6.",
        examTips: "Macros can cause side effects with expressions that have side effects. Use inline functions instead of macros."
    },

    // QUESTION 47 - Union vs Struct
    {
        id: 47,
        type: "multiple-choice",
        category: "structures",
        difficulty: "medium",
        week: 6,
        question: "What is the main difference between union and struct?",
        options: [
            "Union members share memory, struct members have separate memory",
            "Union is faster than struct",
            "Struct can have functions, union cannot",
            "No difference"
        ],
        correct: 0,
        explanation: "Union members occupy the same memory location (overlapping), while struct members have separate memory locations.",
        concept: "Union vs Struct Memory Layout",
        answerLogic: "Union: all members share same memory address, size = largest member. Struct: members have separate addresses, size = sum + padding.",
        examTips: "Use union when you need to store different types in same memory (one at a time). Use struct for related data."
    },

    // QUESTION 48 - Function Template Specialization
    {
        id: 48,
        type: "code-output",
        category: "oop",
        difficulty: "hard",
        week: 9,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
template<typename T>
void print(T value) {
    cout << "Generic: " << value << endl;
}
template<>
void print<int>(int value) {
    cout << "Integer: " << value << endl;
}
int main() {
    print(3.14);
    print(42);
    return 0;
}`,
        options: [
            "Generic: 3.14\nInteger: 42",
            "Integer: 3.14\nInteger: 42",
            "Generic: 3.14\nGeneric: 42",
            "Compilation error"
        ],
        correct: 0,
        explanation: "Template specialization provides specific implementation for int type. print(3.14) uses generic template, print(42) uses specialized version.",
        concept: "Template Specialization",
        answerLogic: "print(3.14): T=double, uses generic template. print(42): T=int, uses specialized template for int.",
        examTips: "Template specialization allows custom behavior for specific types. Syntax: template<> return_type func<type>(params)"
    },

    // QUESTION 49 - RAII Principle
    {
        id: 49,
        type: "multiple-choice",
        category: "oop",
        difficulty: "hard",
        week: 8,
        question: "What does RAII stand for and why is it important?",
        options: [
            "Resource Allocation Is Initialization - automatic resource management",
            "Random Access Iterator Interface - for STL containers",
            "Runtime Automatic Integer Initialization - for variables",
            "Recursive Algorithm Implementation Interface - for algorithms"
        ],
        correct: 0,
        explanation: "RAII (Resource Acquisition Is Initialization) ensures resources are automatically managed through object lifetime. Constructor acquires, destructor releases.",
        concept: "RAII Design Pattern",
        answerLogic: "RAII: constructor acquires resources, destructor automatically releases them. Prevents resource leaks and exception safety.",
        examTips: "RAII is fundamental C++ idiom. Use constructors/destructors for automatic resource management (memory, files, locks)."
    },

    // QUESTION 50 - STL Container Performance
    {
        id: 50,
        type: "multiple-choice",
        category: "algorithms",
        difficulty: "medium",
        week: 9,
        question: "Which STL container provides O(1) average time for insertion and search?",
        options: [
            "vector",
            "list",
            "unordered_map",
            "set"
        ],
        correct: 2,
        explanation: "unordered_map (hash table) provides O(1) average time for insertion, deletion, and search operations. Worst case is O(n) with hash collisions.",
        concept: "STL Container Time Complexity",
        answerLogic: "unordered_map: hash table, O(1) average. vector: O(1) access, O(n) search. list: O(1) insert, O(n) search. set: O(log n) operations.",
        examTips: "Know STL container complexities: vector for random access, list for frequent insertions, map/set for sorted data, unordered_map for fast lookup."
    },

    // SECOND BATCH: QUESTIONS 51-75 - Advanced Topics and More Pointer Concepts
    
    // QUESTION 51 - Pointer to Pointer (Double Pointer)
    {
        id: 51,
        type: "code-output",
        category: "pointers",
        difficulty: "hard",
        week: 7,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
int main() {
    int x = 100;
    int* ptr = &x;
    int** pptr = &ptr;
    cout << **pptr << " " << *pptr << " " << pptr << endl;
    return 0;
}`,
        options: [
            "100 [address] [address]",
            "100 100 100",
            "[address] [address] [address]",
            "Compilation error"
        ],
        correct: 0,
        explanation: "**pptr dereferences twice to get x value (100). *pptr dereferences once to get ptr (address of x). pptr is address of ptr.",
        concept: "Double Pointer Dereferencing",
        answerLogic: "x=100, ptr=&x, pptr=&ptr. **pptr = *(*pptr) = *(ptr) = x = 100. *pptr = ptr = address of x. pptr = address of ptr.",
        examTips: "Double pointers: ** gets the value, * gets the intermediate pointer, no * gets the address."
    },

    // QUESTION 52 - Array Pointer Declaration
    {
        id: 52,
        type: "fill-blank",
        category: "pointers",
        difficulty: "medium",
        week: 6,
        question: "Complete the declaration of a pointer to an array of 5 integers:",
        code: "int (*ptr)[_____];",
        options: [
            "5",
            "*5",
            "int",
            "ptr"
        ],
        correct: 0,
        explanation: "Pointer to array syntax: type (*pointer_name)[size]. This declares ptr as a pointer to an array of 5 integers.",
        concept: "Pointer to Array Declaration",
        answerLogic: "int (*ptr)[5] declares ptr as pointer to array of 5 ints. Different from int *ptr[5] which is array of 5 int pointers.",
        examTips: "Remember: (*ptr)[size] = pointer to array, *ptr[size] = array of pointers. Parentheses matter!"
    },

    // QUESTION 53 - Recursive Binary Tree Traversal
    {
        id: 53,
        type: "code-output",
        category: "recursion",
        difficulty: "hard",
        week: 8,
        question: "What is the output of this tree traversal?",
        code: `#include <iostream>
using namespace std;
struct Node {
    int data;
    Node* left;
    Node* right;
};
void inorder(Node* root) {
    if (root != nullptr) {
        inorder(root->left);
        cout << root->data << " ";
        inorder(root->right);
    }
}
int main() {
    Node* root = new Node{1, nullptr, nullptr};
    root->left = new Node{2, nullptr, nullptr};
    root->right = new Node{3, nullptr, nullptr};
    inorder(root);
    return 0;
}`,
        options: [
            "2 1 3",
            "1 2 3",
            "3 2 1",
            "1 3 2"
        ],
        correct: 0,
        explanation: "Inorder traversal visits: left subtree, root, right subtree. For tree with root=1, left=2, right=3: visits 2, then 1, then 3.",
        concept: "Binary Tree Inorder Traversal",
        answerLogic: "inorder(root): calls inorder(left=2), prints 2, returns, prints 1, calls inorder(right=3), prints 3.",
        examTips: "Tree traversals: Inorder (L-Root-R), Preorder (Root-L-R), Postorder (L-R-Root). Draw the tree to trace execution."
    },

    // QUESTION 54 - C-String Buffer Overflow
    {
        id: 54,
        type: "error-finding",
        category: "strings",
        difficulty: "hard",
        week: 5,
        question: "Find the potential error in this code:",
        code: `#include <iostream>
#include <cstring>
using namespace std;
int main() {
    char str1[5] = "Hi";
    char str2[] = "World";
    strcat(str1, str2);
    cout << str1 << endl;
    return 0;
}`,
        options: [
            "Wrong strcat syntax",
            "Buffer overflow - str1 too small",
            "str2 not null terminated",
            "No error"
        ],
        correct: 1,
        explanation: "str1 has size 5 but strcat tries to append 'World' (5 chars) to 'Hi' (2 chars) = 7 chars + null terminator = 8 bytes needed. Buffer overflow.",
        concept: "C-String Buffer Overflow",
        answerLogic: "str1[5] can hold 4 chars + null. 'Hi' = 2 chars. 'World' = 5 chars. Total = 7 chars + null = 8 bytes > 5. Overflow!",
        examTips: "Always ensure destination buffer in strcat has enough space: strlen(dest) + strlen(src) + 1 ≤ sizeof(dest)."
    },

    // QUESTION 55 - Class Access Specifiers
    {
        id: 55,
        type: "error-finding",
        category: "oop",
        difficulty: "medium",
        week: 8,
        question: "Find the error in this class usage:",
        code: `#include <iostream>
using namespace std;
class MyClass {
private:
    int value;
public:
    MyClass(int v) : value(v) {}
    void display() { cout << value << endl; }
};
int main() {
    MyClass obj(10);
    cout << obj.value << endl;
    return 0;
}`,
        options: [
            "Wrong constructor syntax",
            "Cannot access private member",
            "Missing semicolon",
            "No error"
        ],
        correct: 1,
        explanation: "Member 'value' is private and cannot be accessed directly from outside the class. Use public methods to access private data.",
        concept: "Class Access Control",
        answerLogic: "obj.value tries to access private member from main(). Private members only accessible within class methods.",
        examTips: "Access specifiers: private (class only), protected (class + derived), public (everywhere). Encapsulation principle."
    },

    // QUESTION 56 - Function Overloading
    {
        id: 56,
        type: "code-output",
        category: "functions",
        difficulty: "medium",
        week: 3,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
int add(int a, int b) {
    return a + b;
}
double add(double a, double b) {
    return a + b;
}
int main() {
    cout << add(5, 3) << " " << add(2.5, 1.5) << endl;
    return 0;
}`,
        options: [
            "8 4",
            "8 4.0",
            "8.0 4.0",
            "Compilation error"
        ],
        correct: 0,
        explanation: "Function overloading: add(5,3) calls int version returning 8. add(2.5,1.5) calls double version returning 4.0, but cout prints 4.",
        concept: "Function Overloading",
        answerLogic: "Compiler selects function based on parameter types. add(int,int) for integers, add(double,double) for doubles.",
        examTips: "Function overloading: same name, different parameters. Return type alone cannot distinguish overloaded functions."
    },

    // QUESTION 57 - Linked List with Pointers
    {
        id: 57,
        type: "code-output",
        category: "structures",
        difficulty: "hard",
        week: 6,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
struct Node {
    int data;
    Node* next;
};
int main() {
    Node* head = new Node{1, nullptr};
    head->next = new Node{2, nullptr};
    head->next->next = new Node{3, nullptr};
    
    Node* current = head;
    while (current != nullptr) {
        cout << current->data << " ";
        current = current->next;
    }
    return 0;
}`,
        options: [
            "1 2 3",
            "3 2 1",
            "1",
            "Compilation error"
        ],
        correct: 0,
        explanation: "Linked list traversal: starts at head (1), follows next pointers through nodes with data 2 and 3, prints each value.",
        concept: "Linked List Traversal",
        answerLogic: "current starts at head(1), prints 1, moves to next(2), prints 2, moves to next(3), prints 3, moves to nullptr, stops.",
        examTips: "Linked list traversal pattern: while(current != nullptr) { process(current->data); current = current->next; }"
    },

    // QUESTION 58 - Static Class Members
    {
        id: 58,
        type: "code-output",
        category: "oop",
        difficulty: "medium",
        week: 8,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
class Counter {
public:
    static int count;
    Counter() { count++; }
};
int Counter::count = 0;
int main() {
    Counter c1, c2, c3;
    cout << Counter::count << endl;
    return 0;
}`,
        options: [
            "3",
            "1",
            "0",
            "Compilation error"
        ],
        correct: 0,
        explanation: "Static member 'count' is shared by all instances. Each constructor increments count. Three objects created: count becomes 3.",
        concept: "Static Class Members",
        answerLogic: "count starts at 0. c1 constructor: count=1. c2 constructor: count=2. c3 constructor: count=3.",
        examTips: "Static members: shared by all instances, accessed via ClassName::member, must be defined outside class."
    },

    // QUESTION 59 - Multiple Inheritance
    {
        id: 59,
        type: "code-output",
        category: "oop",
        difficulty: "hard",
        week: 8,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
class A {
public:
    void show() { cout << "A "; }
};
class B {
public:
    void show() { cout << "B "; }
};
class C : public A, public B {
public:
    void display() {
        A::show();
        B::show();
    }
};
int main() {
    C obj;
    obj.display();
    return 0;
}`,
        options: [
            "A B",
            "B A",
            "Compilation error",
            "C C"
        ],
        correct: 0,
        explanation: "Multiple inheritance: C inherits from both A and B. display() explicitly calls A::show() then B::show() using scope resolution.",
        concept: "Multiple Inheritance and Scope Resolution",
        answerLogic: "obj.display() calls A::show() printing 'A ', then B::show() printing 'B '. Result: 'A B'.",
        examTips: "Multiple inheritance: use scope resolution (::) to disambiguate inherited members with same names."
    },

    // QUESTION 60 - Manual Heap Sort Step-by-Step
    {
        id: 60,
        type: "step-by-step",
        category: "algorithms",
        difficulty: "hard",
        week: 9,
        question: "Given array [4, 10, 3, 5, 1], show the heapify process to create a max heap. Mark parent-child relationships and swaps.",
        initialArray: [4, 10, 3, 5, 1],
        instruction: "Show the heapify process step by step with tree structure:",
        options: [
            "Step 1: Start at index 1 (parent of last), check 10>5,1 ✓ | Step 2: Index 0, check 4<10, swap → [10,4,3,5,1] | Step 3: Check 4<5, swap → [10,5,3,4,1] | Final heap: [10,5,3,4,1]",
            "Step 1: Build heap from left to right",
            "Step 1: Sort array first, then heapify",
            "Already a valid heap"
        ],
        correct: 0,
        explanation: "Heapify bottom-up: start from last non-leaf parent (index 1), ensure max-heap property (parent ≥ children), work upward to root.",
        concept: "Manual Heap Construction",
        answerLogic: "Array as tree: 4(root), children 10,3, grandchildren 5,1. Heapify from index 1: 10>5,1 ✓. Index 0: 4<10, swap, then check 4<5, swap.",
        examTips: "Heap property: parent ≥ children (max heap). Array representation: parent at i, children at 2i+1, 2i+2. Show tree structure with swaps marked ↔."
    },

    // QUESTION 61 - Const Member Functions
    {
        id: 61,
        type: "error-finding",
        category: "oop",
        difficulty: "medium",
        week: 8,
        question: "Find the error in this const member function:",
        code: `#include <iostream>
using namespace std;
class Rectangle {
    int length, width;
public:
    Rectangle(int l, int w) : length(l), width(w) {}
    int area() const { return length * width; }
    void resize(int l, int w) const {
        length = l;
        width = w;
    }
};`,
        options: [
            "Wrong const syntax",
            "Const function cannot modify members",
            "Missing return type",
            "No error"
        ],
        correct: 1,
        explanation: "Const member functions cannot modify object state. resize() is marked const but tries to modify length and width.",
        concept: "Const Member Functions",
        answerLogic: "const member functions promise not to change object state. Modifying length, width violates this contract.",
        examTips: "Const member functions: cannot modify non-mutable members, can only call other const functions, good for getters."
    },

    // QUESTION 62 - File I/O Operations
    {
        id: 62,
        type: "code-output",
        category: "basics",
        difficulty: "medium",
        week: 7,
        question: "What does this file operation do?",
        code: `#include <iostream>
#include <fstream>
using namespace std;
int main() {
    ofstream file("data.txt");
    file << "Hello World" << endl;
    file.close();
    
    ifstream infile("data.txt");
    string line;
    getline(infile, line);
    cout << line << endl;
    return 0;
}`,
        options: [
            "Hello World",
            "data.txt",
            "File error",
            "Empty output"
        ],
        correct: 0,
        explanation: "ofstream writes 'Hello World' to data.txt. ifstream reads it back. getline reads the entire line, cout prints it.",
        concept: "File Input/Output Operations",
        answerLogic: "Write 'Hello World' to file → close → open for reading → read line → print line = 'Hello World'.",
        examTips: "File I/O: ofstream for output, ifstream for input, fstream for both. Always close files or use RAII."
    },

    // QUESTION 63 - Enum Class (Scoped Enums)
    {
        id: 63,
        type: "code-output",
        category: "basics",
        difficulty: "medium",
        week: 2,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
enum class Status { ACTIVE, INACTIVE, PENDING };
int main() {
    Status s = Status::ACTIVE;
    if (s == Status::ACTIVE) {
        cout << "Active" << endl;
    }
    return 0;
}`,
        options: [
            "Active",
            "0",
            "ACTIVE",
            "Compilation error"
        ],
        correct: 0,
        explanation: "Enum class creates scoped enums. Status::ACTIVE must be used with scope. Comparison works, prints 'Active'.",
        concept: "Scoped Enumerations (enum class)",
        answerLogic: "s = Status::ACTIVE. Comparison s == Status::ACTIVE is true. Prints 'Active'.",
        examTips: "enum class: strongly typed, scoped, no implicit conversion to int. Use ClassName::VALUE syntax."
    },

    // QUESTION 64 - Destructor Order
    {
        id: 64,
        type: "code-output",
        category: "oop",
        difficulty: "medium",
        week: 8,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
class Test {
    int id;
public:
    Test(int i) : id(i) { cout << "C" << id << " "; }
    ~Test() { cout << "D" << id << " "; }
};
int main() {
    Test t1(1);
    Test t2(2);
    return 0;
}`,
        options: [
            "C1 C2 D2 D1",
            "C1 C2 D1 D2",
            "D1 D2 C1 C2",
            "C2 C1 D1 D2"
        ],
        correct: 0,
        explanation: "Objects constructed in order t1, t2. Destructors called in reverse order when leaving scope: t2 destructor, then t1 destructor.",
        concept: "Constructor and Destructor Order",
        answerLogic: "Construction: t1(1) prints C1, t2(2) prints C2. Destruction (reverse): t2 prints D2, t1 prints D1.",
        examTips: "LIFO destruction: last constructed, first destructed. Stack-based objects destructed in reverse order of construction."
    },

    // QUESTION 65 - Friend Functions
    {
        id: 65,
        type: "code-output",
        category: "oop",
        difficulty: "hard",
        week: 8,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
class Box {
private:
    int value;
public:
    Box(int v) : value(v) {}
    friend void showValue(const Box& b);
};
void showValue(const Box& b) {
    cout << b.value << endl;
}
int main() {
    Box b(42);
    showValue(b);
    return 0;
}`,
        options: [
            "42",
            "0",
            "Compilation error",
            "Garbage value"
        ],
        correct: 0,
        explanation: "Friend function showValue can access private member 'value' of Box class. b.value is 42, so it prints 42.",
        concept: "Friend Functions and Private Access",
        answerLogic: "Box b(42) sets value=42. showValue is friend, can access private value. Prints b.value = 42.",
        examTips: "Friend functions: not class members but can access private/protected members. Break encapsulation when needed."
    },

    // QUESTION 66 - STL Map Usage
    {
        id: 66,
        type: "code-output",
        category: "algorithms",
        difficulty: "medium",
        week: 9,
        question: "What is the output?",
        code: `#include <iostream>
#include <map>
using namespace std;
int main() {
    map<string, int> grades;
    grades["Alice"] = 85;
    grades["Bob"] = 92;
    grades["Alice"] = 88;
    cout << grades["Alice"] << " " << grades.size() << endl;
    return 0;
}`,
        options: [
            "88 2",
            "85 3",
            "88 3",
            "85 2"
        ],
        correct: 0,
        explanation: "Map stores key-value pairs. grades['Alice'] = 88 overwrites previous value 85. Map has 2 unique keys: 'Alice' and 'Bob'.",
        concept: "STL Map Key-Value Storage",
        answerLogic: "Insert Alice:85, Bob:92, update Alice:88. Map contains {Alice:88, Bob:92}. Alice's grade=88, size=2.",
        examTips: "Map: unique keys, ordered, overwrite on duplicate key. Use map[key] for access/insert, size() for element count."
    },

    // QUESTION 67 - Exception Handling with Classes
    {
        id: 67,
        type: "code-output",
        category: "oop",
        difficulty: "hard",
        week: 9,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
class MyException {
public:
    string message;
    MyException(string msg) : message(msg) {}
};
void divide(int a, int b) {
    if (b == 0) throw MyException("Division by zero");
    cout << a / b << endl;
}
int main() {
    try {
        divide(10, 0);
    }
    catch (MyException& e) {
        cout << "Error: " << e.message << endl;
    }
    return 0;
}`,
        options: [
            "Error: Division by zero",
            "10",
            "Runtime error",
            "Compilation error"
        ],
        correct: 0,
        explanation: "divide(10,0) throws MyException. Catch block catches it and prints the error message from the exception object.",
        concept: "Custom Exception Classes",
        answerLogic: "b==0, throw MyException('Division by zero'). Catch block receives exception e, prints e.message.",
        examTips: "Custom exceptions: create class with error info, throw instances, catch by reference to avoid slicing."
    },

    // QUESTION 68 - Iterator Usage
    {
        id: 68,
        type: "code-output",
        category: "algorithms",
        difficulty: "medium",
        week: 9,
        question: "What is the output?",
        code: `#include <iostream>
#include <vector>
using namespace std;
int main() {
    vector<int> v = {1, 2, 3, 4, 5};
    auto it = v.begin() + 2;
    cout << *it << " ";
    it++;
    cout << *it << endl;
    return 0;
}`,
        options: [
            "3 4",
            "2 3",
            "1 2",
            "4 5"
        ],
        correct: 0,
        explanation: "v.begin() + 2 points to third element (index 2) which is 3. After it++, it points to fourth element which is 4.",
        concept: "STL Iterators and Pointer Arithmetic",
        answerLogic: "begin() + 2 = iterator to v[2] = 3. *it = 3. it++ moves to v[3] = 4. *it = 4.",
        examTips: "Iterators: like pointers, begin() points to first element, end() points past last element. Use * to dereference."
    },

    // QUESTION 69 - Dangling Pointer
    {
        id: 69,
        type: "error-finding",
        category: "pointers",
        difficulty: "hard",
        week: 7,
        question: "Find the error in this pointer usage:",
        code: `#include <iostream>
using namespace std;
int* createArray() {
    int arr[5] = {1, 2, 3, 4, 5};
    return arr;
}
int main() {
    int* ptr = createArray();
    cout << ptr[0] << endl;
    return 0;
}`,
        options: [
            "Array size too small",
            "Returning pointer to local array",
            "Wrong return type",
            "No error"
        ],
        correct: 1,
        explanation: "Function returns pointer to local array 'arr' which is destroyed when function ends. ptr becomes dangling pointer.",
        concept: "Dangling Pointer to Local Variables",
        answerLogic: "arr is local to createArray(). When function ends, arr is destroyed. Returned pointer points to invalid memory.",
        examTips: "Never return pointers to local variables. Use dynamic allocation (new), static variables, or pass by reference instead."
    },

    // QUESTION 70 - Const Pointer vs Pointer to Const
    {
        id: 70,
        type: "multiple-choice",
        category: "pointers",
        difficulty: "medium",
        week: 6,
        question: "What is the difference between 'const int* ptr' and 'int* const ptr'?",
        options: [
            "No difference",
            "First: pointer to const int, Second: const pointer to int",
            "First: const pointer to int, Second: pointer to const int",
            "Both invalid syntax"
        ],
        correct: 1,
        explanation: "const int* ptr: pointer to const int (can't modify value through pointer, can reassign pointer). int* const ptr: const pointer to int (can modify value, can't reassign pointer).",
        concept: "Const Pointer Variations",
        answerLogic: "Read right-to-left: const int* = pointer to const int. int* const = const pointer to int. const position matters.",
        examTips: "Memory aid: const before * affects value, const after * affects pointer. const int* const = both const."
    },

    // QUESTION 71 - Recursive String Reversal
    {
        id: 71,
        type: "code-output",
        category: "recursion",
        difficulty: "medium",
        week: 8,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
void reverse(string& str, int start, int end) {
    if (start >= end) return;
    swap(str[start], str[end]);
    reverse(str, start + 1, end - 1);
}
int main() {
    string s = "hello";
    reverse(s, 0, 4);
    cout << s << endl;
    return 0;
}`,
        options: [
            "olleh",
            "hello",
            "ello",
            "Compilation error"
        ],
        correct: 0,
        explanation: "Recursive string reversal: swaps characters from outside in. swap(h,o), swap(e,l), middle 'l' unchanged. Result: 'olleh'.",
        concept: "Recursive String Manipulation",
        answerLogic: "reverse(0,4): swap h↔o → 'oellh', call reverse(1,3): swap e↔l → 'olleh', call reverse(2,2): start>=end, return.",
        examTips: "Recursive string reversal: swap outer characters, recurse on inner substring. Base case: start >= end."
    },

    // QUESTION 72 - Operator Precedence
    {
        id: 72,
        type: "code-output",
        category: "basics",
        difficulty: "medium",
        week: 2,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
int main() {
    int a = 2, b = 3, c = 4;
    int result = a + b * c - a * b;
    cout << result << endl;
    return 0;
}`,
        options: [
            "8",
            "14",
            "20",
            "2"
        ],
        correct: 0,
        explanation: "Operator precedence: multiplication before addition/subtraction. result = 2 + (3*4) - (2*3) = 2 + 12 - 6 = 8.",
        concept: "Operator Precedence and Associativity",
        answerLogic: "a=2, b=3, c=4. Evaluate: b*c=12, a*b=6, then 2+12-6=8.",
        examTips: "Precedence: *, / before +, -. Same precedence: left-to-right associativity. Use parentheses for clarity."
    },

    // QUESTION 73 - Array of Pointers vs Pointer to Array
    {
        id: 73,
        type: "multiple-choice",
        category: "pointers",
        difficulty: "hard",
        week: 6,
        question: "What is the difference between 'int* arr[5]' and 'int (*arr)[5]'?",
        options: [
            "No difference",
            "First: array of 5 int pointers, Second: pointer to array of 5 ints",
            "First: pointer to array of 5 ints, Second: array of 5 int pointers",
            "Both invalid syntax"
        ],
        correct: 1,
        explanation: "int* arr[5]: array of 5 pointers to int. int (*arr)[5]: pointer to an array of 5 ints. Parentheses change meaning.",
        concept: "Array of Pointers vs Pointer to Array",
        answerLogic: "Precedence: [] binds tighter than *. int* arr[5] = (int*) arr[5] = array of pointers. int (*arr)[5] = pointer to array.",
        examTips: "Without parentheses: array of pointers. With parentheses around *name: pointer to array. Very different memory layouts."
    },

    // QUESTION 74 - STL Find Algorithm
    {
        id: 74,
        type: "code-output",
        category: "algorithms",
        difficulty: "medium",
        week: 9,
        question: "What is the output?",
        code: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int main() {
    vector<int> v = {10, 20, 30, 40, 50};
    auto it = find(v.begin(), v.end(), 30);
    if (it != v.end()) {
        cout << distance(v.begin(), it) << endl;
    }
    return 0;
}`,
        options: [
            "2",
            "3",
            "30",
            "Nothing printed"
        ],
        correct: 0,
        explanation: "find() returns iterator to first occurrence of 30. distance() calculates position from begin(): 30 is at index 2.",
        concept: "STL Find Algorithm and Distance",
        answerLogic: "find(begin, end, 30) returns iterator to v[2]. distance(begin, it) = 2.",
        examTips: "STL find: returns iterator to found element or end() if not found. distance() calculates positions between iterators."
    },

    // QUESTION 75 - Shallow vs Deep Copy
    {
        id: 75,
        type: "code-output",
        category: "oop",
        difficulty: "hard",
        week: 8,
        question: "What happens with this copy constructor?",
        code: `#include <iostream>
using namespace std;
class MyClass {
    int* data;
public:
    MyClass(int val) { data = new int(val); }
    MyClass(const MyClass& other) { data = other.data; }  // Shallow copy
    ~MyClass() { delete data; }
    int getValue() { return *data; }
};
int main() {
    MyClass obj1(10);
    MyClass obj2 = obj1;
    cout << obj2.getValue() << endl;
    return 0;
}`,
        options: [
            "10",
            "0",
            "Runtime error (double delete)",
            "Compilation error"
        ],
        correct: 2,
        explanation: "Shallow copy: both objects point to same memory. When destructors run, both try to delete same memory causing double delete error.",
        concept: "Shallow vs Deep Copy Problem",
        answerLogic: "obj1.data and obj2.data point to same memory. ~obj2() deletes memory, then ~obj1() tries to delete already deleted memory.",
        examTips: "Shallow copy danger: multiple objects share same memory. Use deep copy (create new memory) for pointer members."
    },

    // THIRD BATCH: QUESTIONS 76-100 - Focus on Lab Exercises and Core Concepts

    // QUESTION 76 - Pointer Output Analysis (from Week 6 exercises)
    {
        id: 76,
        type: "code-output",
        category: "pointers",
        difficulty: "medium",
        week: 6,
        question: "What is the output of the following code?",
        code: `#include <iostream>
using namespace std;
int main() {
    int x = 12;
    int y = 29;
    int *p = &x;
    int *q = &y;
    *q = 22;
    *p = 35;
    cout << x << " " << y << endl;
    cout << *p << " " << *q << endl;
    return 0;
}`,
        options: [
            "35 22\n35 22",
            "12 29\n35 22",
            "35 29\n12 22",
            "12 22\n35 29"
        ],
        correct: 0,
        explanation: "*q = 22 changes y to 22. *p = 35 changes x to 35. Both pointer dereferencing and direct variable access show same values.",
        concept: "Pointer Dereferencing and Variable Modification",
        answerLogic: "p points to x, q points to y. *q = 22 changes y from 29 to 22. *p = 35 changes x from 12 to 35. Final: x=35, y=22.",
        examTips: "When you modify *ptr, you modify the variable that ptr points to. The variable and *ptr always show the same value."
    },

    // QUESTION 77 - C-String Length Function
    {
        id: 77,
        type: "code-output",
        category: "strings",
        difficulty: "easy",
        week: 5,
        question: "What is the output?",
        code: `#include <iostream>
#include <cstring>
using namespace std;
int main() {
    char str[] = "Programming";
    cout << strlen(str) << endl;
    return 0;
}`,
        options: [
            "11",
            "12",
            "10",
            "Programming"
        ],
        correct: 0,
        explanation: "strlen() counts characters until null terminator. 'Programming' has 11 characters: P-r-o-g-r-a-m-m-i-n-g.",
        concept: "C-String Length Calculation",
        answerLogic: "strlen() counts each character: P(1) r(2) o(3) g(4) r(5) a(6) m(7) m(8) i(9) n(10) g(11) = 11 total.",
        examTips: "strlen() returns number of characters before null terminator \\0. Does not count the null terminator itself."
    },

    // QUESTION 78 - Array Initialization
    {
        id: 78,
        type: "code-output",
        category: "arrays",
        difficulty: "easy",
        week: 4,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
int main() {
    int arr[5] = {1, 2, 3};
    for (int i = 0; i < 5; i++) {
        cout << arr[i] << " ";
    }
    return 0;
}`,
        options: [
            "1 2 3 0 0",
            "1 2 3",
            "1 2 3 garbage garbage",
            "Compilation error"
        ],
        correct: 0,
        explanation: "Array initialization with fewer values than size initializes remaining elements to 0. arr[3] and arr[4] are automatically set to 0.",
        concept: "Partial Array Initialization",
        answerLogic: "arr[5] = {1, 2, 3} sets arr[0]=1, arr[1]=2, arr[2]=3, arr[3]=0, arr[4]=0. Unspecified elements default to 0.",
        examTips: "When initializing array with fewer values than declared size, remaining elements are automatically initialized to 0."
    },

    // QUESTION 79 - Struct Basic Usage
    {
        id: 79,
        type: "code-output",
        category: "structures",
        difficulty: "easy",
        week: 8,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
struct Student {
    string name;
    int age;
    double gpa;
};
int main() {
    Student s = {"Alice", 20, 3.8};
    cout << s.name << " " << s.age << endl;
    return 0;
}`,
        options: [
            "Alice 20",
            "Student Alice",
            "Alice 3.8",
            "20 Alice"
        ],
        correct: 0,
        explanation: "Struct initialization sets name='Alice', age=20, gpa=3.8. Output shows s.name and s.age using dot notation.",
        concept: "Basic Struct Usage and Member Access",
        answerLogic: "Student s initialized with values. s.name = 'Alice', s.age = 20. cout prints name followed by age.",
        examTips: "Struct members accessed with dot notation: structVariable.memberName. Initialize with {value1, value2, value3}."
    },

    // QUESTION 80 - For Loop with Arrays
    {
        id: 80,
        type: "fill-blank",
        category: "loops",
        difficulty: "easy",
        week: 2,
        question: "Complete the for loop to print all array elements:",
        code: `int arr[5] = {10, 20, 30, 40, 50};
for (int i = 0; i < _____; i++) {
    cout << arr[i] << " ";
}`,
        options: [
            "5",
            "4",
            "arr.length",
            "sizeof(arr)"
        ],
        correct: 0,
        explanation: "Array has 5 elements (indices 0-4). Loop condition should be i < 5 to access all elements without going out of bounds.",
        concept: "Array Traversal with For Loop",
        answerLogic: "Array size is 5. Loop needs to run for i = 0, 1, 2, 3, 4. Condition i < 5 ensures loop runs exactly 5 times.",
        examTips: "For array of size n, use i < n in loop condition. Remember arrays are 0-indexed (0 to n-1)."
    },

    // QUESTION 81 - Function Parameter Passing
    {
        id: 81,
        type: "code-output",
        category: "functions",
        difficulty: "medium",
        week: 3,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
void modify(int x) {
    x = x + 10;
    cout << "Inside function: " << x << endl;
}
int main() {
    int num = 5;
    modify(num);
    cout << "In main: " << num << endl;
    return 0;
}`,
        options: [
            "Inside function: 15\nIn main: 5",
            "Inside function: 15\nIn main: 15",
            "Inside function: 5\nIn main: 15",
            "Inside function: 5\nIn main: 5"
        ],
        correct: 0,
        explanation: "Pass by value creates a copy. Function modifies the copy (x=15), but original variable num remains unchanged (5).",
        concept: "Pass by Value vs Pass by Reference",
        answerLogic: "modify(num) passes copy of num (5). Inside function: x = 5 + 10 = 15. Original num unchanged = 5.",
        examTips: "Pass by value: function gets copy, original unchanged. Pass by reference (&): function can modify original."
    },

    // QUESTION 82 - While Loop Counter
    {
        id: 82,
        type: "code-output",
        category: "loops",
        difficulty: "easy",
        week: 2,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
int main() {
    int i = 1;
    while (i <= 3) {
        cout << i << " ";
        i++;
    }
    return 0;
}`,
        options: [
            "1 2 3",
            "1 2 3 4",
            "0 1 2 3",
            "2 3 4"
        ],
        correct: 0,
        explanation: "While loop runs while i <= 3. Starts with i=1, prints and increments: 1, 2, 3. When i=4, condition false, loop stops.",
        concept: "While Loop Execution",
        answerLogic: "i=1: print 1, i++→2. i=2: print 2, i++→3. i=3: print 3, i++→4. i=4: 4<=3 false, exit loop.",
        examTips: "While loop: check condition first, then execute body. Don't forget to update loop variable to avoid infinite loop."
    },

    // QUESTION 83 - Recursive Factorial
    {
        id: 83,
        type: "code-output",
        category: "recursion",
        difficulty: "medium",
        week: 7,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
int main() {
    cout << factorial(4) << endl;
    return 0;
}`,
        options: [
            "24",
            "10",
            "4",
            "120"
        ],
        correct: 0,
        explanation: "factorial(4) = 4 * factorial(3) = 4 * 3 * factorial(2) = 4 * 3 * 2 * factorial(1) = 4 * 3 * 2 * 1 = 24.",
        concept: "Recursive Factorial Calculation",
        answerLogic: "factorial(4)→4*factorial(3)→4*3*factorial(2)→4*3*2*factorial(1)→4*3*2*1=24. Base case: factorial(1)=1.",
        examTips: "Recursive factorial: n! = n * (n-1)!. Base case: 0! = 1! = 1. Always ensure base case to prevent infinite recursion."
    },

    // QUESTION 84 - String Input/Output
    {
        id: 84,
        type: "multiple-choice",
        category: "strings",
        difficulty: "easy",
        week: 5,
        question: "Which function reads a complete line including spaces into a string?",
        options: [
            "cin >>",
            "getline()",
            "scanf()",
            "gets()"
        ],
        correct: 1,
        explanation: "getline() reads entire line including spaces until newline. cin >> stops at first whitespace character.",
        concept: "String Input Functions",
        answerLogic: "cin >> reads until whitespace. getline(cin, string) reads entire line including spaces until Enter key.",
        examTips: "Use getline() for sentences with spaces. Use cin >> for single words. getline() syntax: getline(cin, stringVariable)."
    },

    // QUESTION 85 - Array and Function
    {
        id: 85,
        type: "code-output",
        category: "arrays",
        difficulty: "medium",
        week: 4,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }
}
int main() {
    int numbers[] = {5, 10, 15};
    printArray(numbers, 3);
    return 0;
}`,
        options: [
            "5 10 15",
            "0 0 0",
            "5 10 15 0",
            "Compilation error"
        ],
        correct: 0,
        explanation: "Array passed to function by reference. printArray receives the array and prints each element: 5, 10, 15.",
        concept: "Array as Function Parameter",
        answerLogic: "numbers[] = {5, 10, 15}. printArray(numbers, 3) prints arr[0]=5, arr[1]=10, arr[2]=15.",
        examTips: "Arrays passed by reference to functions. Must pass size separately since array parameter doesn't carry size information."
    },

    // QUESTION 86 - Basic Class Definition
    {
        id: 86,
        type: "code-output",
        category: "oop",
        difficulty: "easy",
        week: 8,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
class Circle {
public:
    double radius;
    Circle(double r) {
        radius = r;
    }
    double getArea() {
        return 3.14 * radius * radius;
    }
};
int main() {
    Circle c(5.0);
    cout << c.getArea() << endl;
    return 0;
}`,
        options: [
            "78.5",
            "31.4",
            "25",
            "15.7"
        ],
        correct: 0,
        explanation: "Circle constructor sets radius=5.0. getArea() calculates 3.14 * 5.0 * 5.0 = 78.5.",
        concept: "Basic Class with Constructor and Method",
        answerLogic: "Circle c(5.0) calls constructor with r=5.0, sets radius=5.0. c.getArea() = 3.14 * 5.0 * 5.0 = 78.5.",
        examTips: "Class constructor initializes object. Public methods can be called using dot notation: object.method()."
    },

    // QUESTION 87 - Conditional Statements
    {
        id: 87,
        type: "code-output",
        category: "control",
        difficulty: "easy",
        week: 1,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
int main() {
    int score = 85;
    if (score >= 90)
        cout << "A";
    else if (score >= 80)
        cout << "B";
    else if (score >= 70)
        cout << "C";
    else
        cout << "F";
    return 0;
}`,
        options: [
            "B",
            "A",
            "C",
            "F"
        ],
        correct: 0,
        explanation: "score=85. First condition (85>=90) false. Second condition (85>=80) true, prints 'B'. Remaining conditions skipped.",
        concept: "If-Else Chain Evaluation",
        answerLogic: "85>=90? No. 85>=80? Yes, print 'B' and exit if-else chain. Other conditions not checked.",
        examTips: "If-else chain: first true condition executes, rest are skipped. Order conditions from most specific to least specific."
    },

    // QUESTION 88 - Pointer and Array Relationship
    {
        id: 88,
        type: "code-output",
        category: "pointers",
        difficulty: "medium",
        week: 6,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
int main() {
    int arr[] = {100, 200, 300};
    int* ptr = arr;
    cout << ptr[1] << " " << *(ptr + 2) << endl;
    return 0;
}`,
        options: [
            "200 300",
            "100 200",
            "200 200",
            "300 300"
        ],
        correct: 0,
        explanation: "ptr points to arr[0]. ptr[1] accesses second element (200). *(ptr+2) accesses third element (300).",
        concept: "Pointer Array Notation",
        answerLogic: "ptr = arr = &arr[0]. ptr[1] = arr[1] = 200. *(ptr+2) = *(arr+2) = arr[2] = 300.",
        examTips: "Array name is pointer to first element. ptr[i] equivalent to *(ptr+i). Both access ith element from pointer position."
    },

    // QUESTION 89 - Switch Statement
    {
        id: 89,
        type: "code-output",
        category: "control",
        difficulty: "medium",
        week: 2,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
int main() {
    int day = 3;
    switch (day) {
        case 1: cout << "Monday"; break;
        case 2: cout << "Tuesday"; break;
        case 3: cout << "Wednesday";
        case 4: cout << "Thursday"; break;
        default: cout << "Invalid";
    }
    return 0;
}`,
        options: [
            "WednesdayThursday",
            "Wednesday",
            "Thursday",
            "Invalid"
        ],
        correct: 0,
        explanation: "day=3 matches case 3, prints 'Wednesday'. Missing break causes fall-through to case 4, prints 'Thursday'. Then break stops execution.",
        concept: "Switch Statement Fall-through",
        answerLogic: "day=3 → case 3 → print 'Wednesday' → no break → fall through → case 4 → print 'Thursday' → break → exit switch.",
        examTips: "Always use break after each case unless fall-through is intentional. Missing break causes execution to continue to next case."
    },

    // QUESTION 90 - Function Return Values
    {
        id: 90,
        type: "code-output",
        category: "functions",
        difficulty: "easy",
        week: 3,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
int multiply(int a, int b) {
    return a * b;
}
int main() {
    int result = multiply(6, 7);
    cout << result << endl;
    return 0;
}`,
        options: [
            "42",
            "67",
            "13",
            "1"
        ],
        correct: 0,
        explanation: "multiply(6, 7) calculates 6 * 7 = 42 and returns this value. result stores 42, which is then printed.",
        concept: "Function Return Value Assignment",
        answerLogic: "multiply(6, 7) → a=6, b=7 → return 6*7=42 → result=42 → cout prints 42.",
        examTips: "Functions can return values using return statement. Returned value can be assigned to variables or used in expressions."
    },

    // QUESTION 91 - C-String Copying
    {
        id: 91,
        type: "code-output",
        category: "strings",
        difficulty: "medium",
        week: 5,
        question: "What is the output?",
        code: `#include <iostream>
#include <cstring>
using namespace std;
int main() {
    char str1[20] = "Hello";
    char str2[] = "World";
    strcpy(str1, str2);
    cout << str1 << endl;
    return 0;
}`,
        options: [
            "World",
            "Hello",
            "HelloWorld",
            "Compilation error"
        ],
        correct: 0,
        explanation: "strcpy(str1, str2) copies contents of str2 ('World') into str1, overwriting original content ('Hello').",
        concept: "C-String Copy Function",
        answerLogic: "strcpy copies source string to destination. str1 originally 'Hello', after strcpy(str1, str2) becomes 'World'.",
        examTips: "strcpy(dest, src) copies src to dest, overwriting dest contents. Ensure dest has enough space to avoid buffer overflow."
    },

    // QUESTION 92 - Nested Loops
    {
        id: 92,
        type: "code-output",
        category: "loops",
        difficulty: "medium",
        week: 2,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
int main() {
    for (int i = 1; i <= 2; i++) {
        for (int j = 1; j <= 3; j++) {
            cout << i << j << " ";
        }
    }
    return 0;
}`,
        options: [
            "11 12 13 21 22 23",
            "1 2 3 1 2 3",
            "11 22 33",
            "123 123"
        ],
        correct: 0,
        explanation: "Outer loop: i=1,2. Inner loop: j=1,2,3. Prints i and j concatenated: 11, 12, 13 (i=1), then 21, 22, 23 (i=2).",
        concept: "Nested Loop Execution",
        answerLogic: "i=1: j=1→print 11, j=2→print 12, j=3→print 13. i=2: j=1→print 21, j=2→print 22, j=3→print 23.",
        examTips: "Nested loops: inner loop completes all iterations for each outer loop iteration. Total iterations = outer × inner."
    },

    // QUESTION 93 - Array Sum Calculation
    {
        id: 93,
        type: "fill-blank",
        category: "arrays",
        difficulty: "easy",
        week: 4,
        question: "Complete the code to calculate sum of array elements:",
        code: `int arr[] = {1, 2, 3, 4, 5};
int sum = 0;
for (int i = 0; i < 5; i++) {
    sum _____ arr[i];
}`,
        options: [
            "+=",
            "=",
            "-=",
            "*="
        ],
        correct: 0,
        explanation: "To calculate sum, we need to add each array element to the running total. sum += arr[i] is equivalent to sum = sum + arr[i].",
        concept: "Array Sum Accumulation",
        answerLogic: "sum starts at 0. Add each element: sum+=arr[0]=1, sum+=arr[1]=3, sum+=arr[2]=6, sum+=arr[3]=10, sum+=arr[4]=15.",
        examTips: "Use += operator for accumulation. Initialize sum to 0 before loop. Final sum will be 1+2+3+4+5=15."
    },

    // QUESTION 94 - Pointer Increment
    {
        id: 94,
        type: "code-output",
        category: "pointers",
        difficulty: "medium",
        week: 6,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
int main() {
    int arr[] = {10, 20, 30, 40};
    int* ptr = arr;
    cout << *ptr << " ";
    ptr++;
    cout << *ptr << " ";
    ptr++;
    cout << *ptr << endl;
    return 0;
}`,
        options: [
            "10 20 30",
            "10 10 10",
            "20 30 40",
            "10 30 50"
        ],
        correct: 0,
        explanation: "ptr starts at arr[0]=10. After ptr++, points to arr[1]=20. After another ptr++, points to arr[2]=30.",
        concept: "Pointer Arithmetic and Increment",
        answerLogic: "ptr=&arr[0], *ptr=10. ptr++ moves to &arr[1], *ptr=20. ptr++ moves to &arr[2], *ptr=30.",
        examTips: "ptr++ moves pointer to next element in array. For int array, ptr++ adds sizeof(int) to address, not just 1."
    },

    // QUESTION 95 - Recursion Base Case
    {
        id: 95,
        type: "error-finding",
        category: "recursion",
        difficulty: "medium",
        week: 7,
        question: "Find the error in this recursive function:",
        code: `int countdown(int n) {
    cout << n << " ";
    return countdown(n - 1);
}`,
        options: [
            "Missing return type",
            "Wrong parameter type",
            "Missing base case",
            "Incorrect function name"
        ],
        correct: 2,
        explanation: "Recursive function lacks base case to stop recursion. This will cause infinite recursion and stack overflow.",
        concept: "Recursive Function Base Case",
        answerLogic: "Function calls countdown(n-1) indefinitely. No condition to stop when n reaches certain value (like n <= 0).",
        examTips: "Every recursive function needs base case to prevent infinite recursion. Base case should stop calling itself."
    },

    // QUESTION 96 - String Concatenation
    {
        id: 96,
        type: "code-output",
        category: "strings",
        difficulty: "easy",
        week: 5,
        question: "What is the output?",
        code: `#include <iostream>
#include <string>
using namespace std;
int main() {
    string first = "Hello";
    string second = "World";
    string result = first + " " + second;
    cout << result << endl;
    return 0;
}`,
        options: [
            "Hello World",
            "HelloWorld",
            "Hello + World",
            "Compilation error"
        ],
        correct: 0,
        explanation: "String concatenation using + operator joins strings together. first + ' ' + second creates 'Hello World'.",
        concept: "String Concatenation with + Operator",
        answerLogic: "first='Hello', second='World'. first + ' ' + second = 'Hello' + ' ' + 'World' = 'Hello World'.",
        examTips: "C++ string class supports + operator for concatenation. Can concatenate strings, string literals, and characters."
    },

    // QUESTION 97 - Basic Class Object Creation
    {
        id: 97,
        type: "multiple-choice",
        category: "oop",
        difficulty: "easy",
        week: 8,
        question: "Which statement correctly creates an object of class 'Car'?",
        options: [
            "Car myCar;",
            "class Car myCar;",
            "object Car myCar;",
            "new Car myCar;"
        ],
        correct: 0,
        explanation: "Object creation syntax: ClassName objectName; This creates an object named myCar of type Car.",
        concept: "Object Declaration and Instantiation",
        answerLogic: "Standard object creation: specify class name followed by object name. Car myCar; creates object myCar of class Car.",
        examTips: "Object creation: ClassName objectName; Similar to variable declaration but with class name as type."
    },

    // QUESTION 98 - Do-While Loop
    {
        id: 98,
        type: "code-output",
        category: "loops",
        difficulty: "medium",
        week: 2,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
int main() {
    int i = 5;
    do {
        cout << i << " ";
        i--;
    } while (i > 3);
    return 0;
}`,
        options: [
            "5 4",
            "5 4 3",
            "4 3",
            "5"
        ],
        correct: 0,
        explanation: "Do-while executes body first, then checks condition. Prints 5 (i--→4), prints 4 (i--→3). i=3, 3>3 false, loop stops.",
        concept: "Do-While Loop Post-Condition Check",
        answerLogic: "i=5: print 5, i--→4. Check 4>3? Yes. i=4: print 4, i--→3. Check 3>3? No, exit loop.",
        examTips: "Do-while always executes at least once since condition checked after body. Use when you need at least one execution."
    },

    // QUESTION 99 - Function Overloading Basic
    {
        id: 99,
        type: "code-output",
        category: "functions",
        difficulty: "medium",
        week: 3,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
int add(int a, int b) {
    return a + b;
}
double add(double a, double b) {
    return a + b;
}
int main() {
    cout << add(3, 4) << " " << add(2.5, 1.5) << endl;
    return 0;
}`,
        options: [
            "7 4",
            "7 4.0",
            "7.0 4.0",
            "Compilation error"
        ],
        correct: 0,
        explanation: "Function overloading: add(3,4) calls int version returning 7. add(2.5,1.5) calls double version returning 4.0, displayed as 4.",
        concept: "Basic Function Overloading",
        answerLogic: "Compiler selects function based on parameter types. add(int,int)→7, add(double,double)→4.0 (displayed as 4).",
        examTips: "Function overloading allows same name with different parameter types. Compiler chooses correct version based on arguments."
    },

    // QUESTION 100 - Array Index Bounds
    {
        id: 100,
        type: "error-finding",
        category: "arrays",
        difficulty: "medium",
        week: 4,
        question: "Find the potential error in this code:",
        code: `#include <iostream>
using namespace std;
int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    for (int i = 0; i <= 5; i++) {
        cout << arr[i] << " ";
    }
    return 0;
}`,
        options: [
            "Array size too small",
            "Loop condition allows array bounds violation",
            "Wrong initialization syntax",
            "No error"
        ],
        correct: 1,
        explanation: "Array has indices 0-4, but loop condition i <= 5 allows i=5, accessing arr[5] which is out of bounds.",
        concept: "Array Bounds Checking",
        answerLogic: "arr[5] has valid indices 0,1,2,3,4. Loop with i<=5 tries to access arr[5] which doesn't exist.",
        examTips: "Array of size n has valid indices 0 to n-1. Use i < n, not i <= n in loop conditions to avoid bounds violation."
    },

    // FOURTH BATCH: QUESTIONS 101-125 - Advanced Concepts and Lab-Based Problems

    // QUESTION 101 - Linear Search Implementation
    {
        id: 101,
        type: "code-output",
        category: "algorithms",
        difficulty: "medium",
        week: 9,
        question: "What is the output of this linear search?",
        code: `#include <iostream>
using namespace std;
int linearSearch(int arr[], int n, int target) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}
int main() {
    int data[] = {5, 2, 8, 1, 9};
    cout << linearSearch(data, 5, 8) << " ";
    cout << linearSearch(data, 5, 7) << endl;
    return 0;
}`,
        options: [
            "2 -1",
            "8 -1",
            "2 7",
            "3 -1"
        ],
        correct: 0,
        explanation: "linearSearch finds 8 at index 2, returns 2. Element 7 not found, returns -1.",
        concept: "Linear Search Algorithm Implementation",
        answerLogic: "Search for 8: check indices 0(5≠8), 1(2≠8), 2(8=8)→return 2. Search for 7: check all indices, not found→return -1.",
        examTips: "Linear search checks each element sequentially. Returns index if found, -1 if not found. Time complexity: O(n)."
    },

    // QUESTION 102 - Recursive Power Function
    {
        id: 102,
        type: "code-output",
        category: "recursion",
        difficulty: "hard",
        week: 7,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
int power(int base, int exp) {
    if (exp == 0) return 1;
    return base * power(base, exp - 1);
}
int main() {
    cout << power(2, 3) << " " << power(5, 0) << endl;
    return 0;
}`,
        options: [
            "8 1",
            "6 0",
            "8 0",
            "6 1"
        ],
        correct: 0,
        explanation: "power(2,3) = 2 * power(2,2) = 2 * 2 * power(2,1) = 2 * 2 * 2 * power(2,0) = 2 * 2 * 2 * 1 = 8. power(5,0) = 1 (base case).",
        concept: "Recursive Exponentiation",
        answerLogic: "power(2,3)→2*power(2,2)→2*2*power(2,1)→2*2*2*power(2,0)→2*2*2*1=8. power(5,0)→1 (base case).",
        examTips: "Recursive power: base^exp = base * base^(exp-1). Base case: any number^0 = 1. Track recursive calls carefully."
    },

    // QUESTION 103 - Multi-dimensional Array Access
    {
        id: 103,
        type: "code-output",
        category: "arrays",
        difficulty: "medium",
        week: 4,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
int main() {
    int matrix[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };
    cout << matrix[1][2] << " " << matrix[2][0] << endl;
    return 0;
}`,
        options: [
            "6 7",
            "5 8",
            "3 7",
            "2 4"
        ],
        correct: 0,
        explanation: "matrix[1][2] accesses row 1, column 2 = 6. matrix[2][0] accesses row 2, column 0 = 7.",
        concept: "2D Array Element Access",
        answerLogic: "matrix[1][2]: row 1 = {4,5,6}, column 2 = 6. matrix[2][0]: row 2 = {7,8,9}, column 0 = 7.",
        examTips: "2D array access: array[row][column]. Remember arrays are 0-indexed. Visualize as table with rows and columns."
    },

    // QUESTION 104 - Pointer Function Parameters
    {
        id: 104,
        type: "code-output",
        category: "pointers",
        difficulty: "hard",
        week: 6,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
void increment(int* p) {
    (*p)++;
}
int main() {
    int x = 10;
    int* ptr = &x;
    increment(ptr);
    cout << x << " " << *ptr << endl;
    return 0;
}`,
        options: [
            "11 11",
            "10 11",
            "11 10",
            "10 10"
        ],
        correct: 0,
        explanation: "increment(ptr) receives address of x. (*p)++ increments the value at that address. Both x and *ptr show same value 11.",
        concept: "Pointer as Function Parameter",
        answerLogic: "ptr points to x. increment(ptr) passes address of x. (*p)++ increments x from 10 to 11. Both x and *ptr = 11.",
        examTips: "When passing pointer to function, function can modify the original variable through the pointer."
    },

    // QUESTION 105 - String Length with Loop
    {
        id: 105,
        type: "code-output",
        category: "strings",
        difficulty: "medium",
        week: 5,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
int main() {
    char str[] = "C++";
    int count = 0;
    for (int i = 0; str[i] != '\\0'; i++) {
        count++;
    }
    cout << count << endl;
    return 0;
}`,
        options: [
            "3",
            "4",
            "2",
            "5"
        ],
        correct: 0,
        explanation: "Loop counts characters until null terminator. 'C++' has 3 characters: C, +, +. Loop stops when str[3] = '\\0'.",
        concept: "Manual String Length Calculation",
        answerLogic: "str[]={'C','+','+','\\0'}. Loop: i=0(C≠\\0,count=1), i=1(+≠\\0,count=2), i=2(+≠\\0,count=3), i=3(\\0=\\0,stop). count=3.",
        examTips: "C-strings end with null terminator \\0. Loop until str[i] != '\\0' to count characters. This is how strlen() works internally."
    },

    // QUESTION 106 - Basic Class with Private Members
    {
        id: 106,
        type: "code-output",
        category: "oop",
        difficulty: "easy",
        week: 8,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
class Rectangle {
private:
    int width, height;
public:
    Rectangle(int w, int h) : width(w), height(h) {}
    int getArea() { return width * height; }
    int getWidth() { return width; }
};
int main() {
    Rectangle r(4, 5);
    cout << r.getArea() << " " << r.getWidth() << endl;
    return 0;
}`,
        options: [
            "20 4",
            "9 4",
            "20 5",
            "Compilation error"
        ],
        correct: 0,
        explanation: "Rectangle constructor sets width=4, height=5. getArea() returns 4*5=20. getWidth() returns width=4.",
        concept: "Class with Private Members and Public Methods",
        answerLogic: "Rectangle r(4,5) calls constructor: width=4, height=5. r.getArea()=4*5=20. r.getWidth()=4.",
        examTips: "Private members accessed only through public methods. Constructor initializes private data. Public methods provide controlled access."
    },

    // QUESTION 107 - Array Passing to Function
    {
        id: 107,
        type: "code-output",
        category: "arrays",
        difficulty: "medium",
        week: 4,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
void modifyArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        arr[i] *= 2;
    }
}
int main() {
    int numbers[] = {1, 2, 3};
    modifyArray(numbers, 3);
    cout << numbers[0] << " " << numbers[2] << endl;
    return 0;
}`,
        options: [
            "2 6",
            "1 3",
            "2 3",
            "1 6"
        ],
        correct: 0,
        explanation: "Arrays passed by reference. modifyArray doubles each element: 1→2, 2→4, 3→6. numbers[0]=2, numbers[2]=6.",
        concept: "Array Modification in Functions",
        answerLogic: "modifyArray receives array reference. arr[0]*=2: 1→2, arr[1]*=2: 2→4, arr[2]*=2: 3→6. Original array modified.",
        examTips: "Arrays passed by reference to functions. Changes inside function affect original array. Array name is pointer to first element."
    },

    // QUESTION 108 - Switch with Characters
    {
        id: 108,
        type: "code-output",
        category: "control",
        difficulty: "medium",
        week: 2,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
int main() {
    char grade = 'B';
    switch (grade) {
        case 'A': cout << "Excellent"; break;
        case 'B': cout << "Good";
        case 'C': cout << "Average"; break;
        case 'D': cout << "Poor"; break;
        default: cout << "Invalid";
    }
    return 0;
}`,
        options: [
            "GoodAverage",
            "Good",
            "Average",
            "Invalid"
        ],
        correct: 0,
        explanation: "grade='B' matches case 'B', prints 'Good'. Missing break causes fall-through to case 'C', prints 'Average'. Then break stops execution.",
        concept: "Switch Statement with Character Cases",
        answerLogic: "grade='B' → case 'B' → print 'Good' → no break → fall through → case 'C' → print 'Average' → break → exit.",
        examTips: "Switch works with characters (ASCII values). Missing break causes fall-through. Each case needs break unless fall-through intended."
    },

    // QUESTION 109 - Recursive Fibonacci
    {
        id: 109,
        type: "code-output",
        category: "recursion",
        difficulty: "hard",
        week: 7,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n-1) + fibonacci(n-2);
}
int main() {
    cout << fibonacci(5) << endl;
    return 0;
}`,
        options: [
            "5",
            "8",
            "13",
            "3"
        ],
        correct: 0,
        explanation: "fibonacci(5) = fibonacci(4) + fibonacci(3) = 3 + 2 = 5. Base cases: fibonacci(0)=0, fibonacci(1)=1.",
        concept: "Recursive Fibonacci Sequence",
        answerLogic: "fib(5)=fib(4)+fib(3)=3+2=5. fib(4)=fib(3)+fib(2)=2+1=3. fib(3)=fib(2)+fib(1)=1+1=2. fib(2)=fib(1)+fib(0)=1+0=1.",
        examTips: "Fibonacci: F(n) = F(n-1) + F(n-2). Base: F(0)=0, F(1)=1. Sequence: 0,1,1,2,3,5,8,13... Draw call tree for complex cases."
    },

    // QUESTION 110 - Pointer Array Traversal
    {
        id: 110,
        type: "code-output",
        category: "pointers",
        difficulty: "medium",
        week: 6,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
int main() {
    int arr[] = {10, 20, 30};
    int* ptr = arr;
    for (int i = 0; i < 3; i++) {
        cout << *(ptr + i) << " ";
    }
    return 0;
}`,
        options: [
            "10 20 30",
            "20 30 40",
            "0 1 2",
            "Compilation error"
        ],
        correct: 0,
        explanation: "ptr points to arr[0]. *(ptr+0)=arr[0]=10, *(ptr+1)=arr[1]=20, *(ptr+2)=arr[2]=30.",
        concept: "Pointer Arithmetic for Array Traversal",
        answerLogic: "ptr=&arr[0]. Loop: *(ptr+0)=*(&arr[0])=arr[0]=10, *(ptr+1)=arr[1]=20, *(ptr+2)=arr[2]=30.",
        examTips: "Pointer arithmetic: ptr+i points to ith element from ptr. *(ptr+i) equivalent to ptr[i] and arr[i]."
    },

    // QUESTION 111 - String Comparison
    {
        id: 111,
        type: "code-output",
        category: "strings",
        difficulty: "medium",
        week: 5,
        question: "What is the output?",
        code: `#include <iostream>
#include <string>
using namespace std;
int main() {
    string str1 = "apple";
    string str2 = "banana";
    if (str1 < str2) {
        cout << "apple comes first";
    } else {
        cout << "banana comes first";
    }
    return 0;
}`,
        options: [
            "apple comes first",
            "banana comes first",
            "equal",
            "Compilation error"
        ],
        correct: 0,
        explanation: "String comparison uses lexicographic order (dictionary order). 'apple' comes before 'banana' alphabetically, so str1 < str2 is true.",
        concept: "String Lexicographic Comparison",
        answerLogic: "Compare ASCII values: 'a'(97) vs 'b'(98). Since 'a' < 'b', 'apple' < 'banana' is true.",
        examTips: "String comparison: lexicographic (dictionary) order. Compares character by character using ASCII values. < > == != all work with strings."
    },

    // QUESTION 112 - Nested Function Calls
    {
        id: 112,
        type: "code-output",
        category: "functions",
        difficulty: "medium",
        week: 3,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
int square(int x) {
    return x * x;
}
int add(int a, int b) {
    return a + b;
}
int main() {
    cout << add(square(3), square(4)) << endl;
    return 0;
}`,
        options: [
            "25",
            "49",
            "7",
            "12"
        ],
        correct: 0,
        explanation: "square(3) = 3*3 = 9. square(4) = 4*4 = 16. add(9, 16) = 9+16 = 25.",
        concept: "Nested Function Calls",
        answerLogic: "Inner functions evaluate first: square(3)=9, square(4)=16. Then outer: add(9,16)=25.",
        examTips: "Nested calls: inner functions execute first, results passed to outer function. Evaluate from inside out."
    },

    // QUESTION 113 - Array Initialization Patterns
    {
        id: 113,
        type: "code-output",
        category: "arrays",
        difficulty: "easy",
        week: 4,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
int main() {
    int arr[4] = {0};
    for (int i = 0; i < 4; i++) {
        cout << arr[i] << " ";
    }
    return 0;
}`,
        options: [
            "0 0 0 0",
            "0",
            "0 1 2 3",
            "Garbage values"
        ],
        correct: 0,
        explanation: "Array initialization with {0} sets all elements to 0. All four elements become 0.",
        concept: "Array Initialization with Single Value",
        answerLogic: "int arr[4] = {0} initializes arr[0]=0, and remaining elements arr[1]=arr[2]=arr[3]=0 by default.",
        examTips: "Initializing array with {0} sets all elements to 0. Useful for zero-initialization of entire array."
    },

    // QUESTION 114 - Const Variables
    {
        id: 114,
        type: "error-finding",
        category: "basics",
        difficulty: "easy",
        week: 1,
        question: "Find the error in this code:",
        code: `#include <iostream>
using namespace std;
int main() {
    const int SIZE = 5;
    SIZE = 10;
    cout << SIZE << endl;
    return 0;
}`,
        options: [
            "Wrong const syntax",
            "Cannot modify const variable",
            "SIZE not initialized",
            "No error"
        ],
        correct: 1,
        explanation: "const variables cannot be modified after initialization. SIZE = 10 attempts to change a const variable, causing compilation error.",
        concept: "Const Variable Immutability",
        answerLogic: "const int SIZE = 5 makes SIZE immutable. SIZE = 10 tries to modify const variable = compilation error.",
        examTips: "const variables are read-only after initialization. Use const for values that shouldn't change throughout program execution."
    },

    // QUESTION 115 - Class Constructor with Parameters
    {
        id: 115,
        type: "code-output",
        category: "oop",
        difficulty: "medium",
        week: 8,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
class Point {
public:
    int x, y;
    Point(int a, int b) {
        x = a;
        y = b;
        cout << "Point created at (" << x << "," << y << ")" << endl;
    }
};
int main() {
    Point p(3, 4);
    return 0;
}`,
        options: [
            "Point created at (3,4)",
            "Point created at (0,0)",
            "3 4",
            "Compilation error"
        ],
        correct: 0,
        explanation: "Constructor Point(3,4) sets x=3, y=4 and prints the message during object creation.",
        concept: "Constructor Execution and Output",
        answerLogic: "Point p(3,4) calls constructor with a=3, b=4. Sets x=3, y=4. Prints 'Point created at (3,4)'.",
        examTips: "Constructor executes automatically when object is created. Can include output statements for debugging or logging."
    },

    // QUESTION 116 - While Loop with Break
    {
        id: 116,
        type: "code-output",
        category: "loops",
        difficulty: "medium",
        week: 2,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
int main() {
    int i = 1;
    while (true) {
        cout << i << " ";
        i++;
        if (i > 3) break;
    }
    return 0;
}`,
        options: [
            "1 2 3",
            "1 2 3 4",
            "2 3 4",
            "Infinite loop"
        ],
        correct: 0,
        explanation: "Infinite while loop with break condition. Prints 1 (i++→2), prints 2 (i++→3), prints 3 (i++→4). i>3 true, break exits loop.",
        concept: "While Loop with Break Statement",
        answerLogic: "i=1: print 1, i++→2, 2>3? No. i=2: print 2, i++→3, 3>3? No. i=3: print 3, i++→4, 4>3? Yes, break.",
        examTips: "while(true) creates infinite loop. Use break to exit based on condition. Alternative to complex while conditions."
    },

    // QUESTION 117 - Pointer to Array Elements
    {
        id: 117,
        type: "code-output",
        category: "pointers",
        difficulty: "hard",
        week: 6,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int* start = &arr[1];
    int* end = &arr[3];
    cout << (end - start) << " " << *start << " " << *end << endl;
    return 0;
}`,
        options: [
            "2 2 4",
            "3 2 4",
            "2 1 3",
            "1 2 4"
        ],
        correct: 0,
        explanation: "start points to arr[1], end points to arr[3]. Pointer difference (end-start) = 3-1 = 2 elements. *start=2, *end=4.",
        concept: "Pointer Arithmetic and Difference",
        answerLogic: "start=&arr[1], end=&arr[3]. end-start = difference in array indices = 3-1 = 2. *start=arr[1]=2, *end=arr[3]=4.",
        examTips: "Pointer difference gives number of elements between pointers, not byte difference. Useful for calculating array section sizes."
    },

    // QUESTION 118 - String Array Operations
    {
        id: 118,
        type: "code-output",
        category: "strings",
        difficulty: "medium",
        week: 5,
        question: "What is the output?",
        code: `#include <iostream>
#include <string>
using namespace std;
int main() {
    string words[] = {"hello", "world", "cpp"};
    cout << words[1].length() << " " << words[2][1] << endl;
    return 0;
}`,
        options: [
            "5 p",
            "5 c",
            "4 p",
            "6 p"
        ],
        correct: 0,
        explanation: "words[1] = 'world', length() = 5. words[2] = 'cpp', words[2][1] = second character = 'p'.",
        concept: "String Array and Character Access",
        answerLogic: "words[1]='world', 'world'.length()=5. words[2]='cpp', words[2][1]=second char='p'.",
        examTips: "String array: array of string objects. Access string methods with array[index].method(). Access characters with array[index][charIndex]."
    },

    // QUESTION 119 - Recursive Sum of Digits
    {
        id: 119,
        type: "code-output",
        category: "recursion",
        difficulty: "medium",
        week: 7,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
int sumDigits(int n) {
    if (n == 0) return 0;
    return (n % 10) + sumDigits(n / 10);
}
int main() {
    cout << sumDigits(123) << endl;
    return 0;
}`,
        options: [
            "6",
            "123",
            "3",
            "12"
        ],
        correct: 0,
        explanation: "sumDigits(123) = 3 + sumDigits(12) = 3 + 2 + sumDigits(1) = 3 + 2 + 1 + sumDigits(0) = 3 + 2 + 1 + 0 = 6.",
        concept: "Recursive Digit Sum Calculation",
        answerLogic: "sumDigits(123)→3+sumDigits(12)→3+2+sumDigits(1)→3+2+1+sumDigits(0)→3+2+1+0=6. Extract last digit with n%10.",
        examTips: "Recursive digit sum: extract last digit (n%10), add to sum of remaining digits (n/10). Base case: n=0 returns 0."
    },

    // QUESTION 120 - Function Default Parameters
    {
        id: 120,
        type: "code-output",
        category: "functions",
        difficulty: "medium",
        week: 3,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
void greet(string name, string greeting = "Hello") {
    cout << greeting << " " << name << endl;
}
int main() {
    greet("Alice");
    greet("Bob", "Hi");
    return 0;
}`,
        options: [
            "Hello Alice\nHi Bob",
            "Alice Hello\nBob Hi",
            "Hello Alice\nHello Bob",
            "Compilation error"
        ],
        correct: 0,
        explanation: "greet('Alice') uses default parameter 'Hello'. greet('Bob', 'Hi') overrides default with 'Hi'.",
        concept: "Function Default Parameters",
        answerLogic: "greet('Alice') → greeting='Hello' (default), name='Alice' → 'Hello Alice'. greet('Bob','Hi') → greeting='Hi', name='Bob' → 'Hi Bob'.",
        examTips: "Default parameters provide fallback values when arguments not supplied. Specify defaults in function declaration/definition."
    },

    // QUESTION 121 - Array Sum with Pointers
    {
        id: 121,
        type: "code-output",
        category: "pointers",
        difficulty: "hard",
        week: 6,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int* ptr = arr;
    int sum = 0;
    for (int i = 0; i < 5; i++) {
        sum += *(ptr++);
    }
    cout << sum << endl;
    return 0;
}`,
        options: [
            "15",
            "5",
            "1",
            "25"
        ],
        correct: 0,
        explanation: "*(ptr++) dereferences current pointer value then increments pointer. Sums all array elements: 1+2+3+4+5=15.",
        concept: "Pointer Post-increment with Dereferencing",
        answerLogic: "i=0: sum+=*(ptr++)=*ptr=1, ptr++. i=1: sum+=2, ptr++. i=2: sum+=3, ptr++. i=3: sum+=4, ptr++. i=4: sum+=5. Total=15.",
        examTips: "*(ptr++) dereferences current location then moves pointer. Parentheses ensure post-increment of pointer, not dereferenced value."
    },

    // QUESTION 122 - Class Object Array
    {
        id: 122,
        type: "code-output",
        category: "oop",
        difficulty: "medium",
        week: 8,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
class Number {
public:
    int value;
    Number(int v) : value(v) {}
    void display() { cout << value << " "; }
};
int main() {
    Number nums[] = {Number(1), Number(2), Number(3)};
    for (int i = 0; i < 3; i++) {
        nums[i].display();
    }
    return 0;
}`,
        options: [
            "1 2 3",
            "123",
            "Number Number Number",
            "Compilation error"
        ],
        correct: 0,
        explanation: "Array of Number objects initialized with values 1, 2, 3. Loop calls display() for each object, printing their values.",
        concept: "Array of Class Objects",
        answerLogic: "nums[0]=Number(1), nums[1]=Number(2), nums[2]=Number(3). Loop calls display(): nums[0].display()→1, nums[1].display()→2, nums[2].display()→3.",
        examTips: "Arrays can contain objects. Initialize with constructor calls. Access object methods using array[index].method()."
    },

    // QUESTION 123 - Multiple Return Statements
    {
        id: 123,
        type: "code-output",
        category: "functions",
        difficulty: "medium",
        week: 3,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
int checkNumber(int n) {
    if (n < 0) return -1;
    if (n == 0) return 0;
    if (n > 10) return 1;
    return n;
}
int main() {
    cout << checkNumber(-5) << " " << checkNumber(0) << " " << checkNumber(7) << " " << checkNumber(15) << endl;
    return 0;
}`,
        options: [
            "-1 0 7 1",
            "-1 0 1 1",
            "-5 0 7 15",
            "0 0 7 1"
        ],
        correct: 0,
        explanation: "checkNumber(-5): -5<0, return -1. checkNumber(0): 0==0, return 0. checkNumber(7): none match, return 7. checkNumber(15): 15>10, return 1.",
        concept: "Multiple Return Statements in Functions",
        answerLogic: "-5<0→return -1. 0==0→return 0. 7: not <0, not ==0, not >10→return 7. 15>10→return 1.",
        examTips: "Function exits immediately when return statement executes. Multiple returns allow different exit points based on conditions."
    },

    // QUESTION 124 - Recursive String Reversal Check
    {
        id: 124,
        type: "code-output",
        category: "recursion",
        difficulty: "hard",
        week: 7,
        question: "What is the output?",
        code: `#include <iostream>
#include <string>
using namespace std;
bool isPalindrome(string str, int start, int end) {
    if (start >= end) return true;
    if (str[start] != str[end]) return false;
    return isPalindrome(str, start + 1, end - 1);
}
int main() {
    cout << isPalindrome("radar", 0, 4) << " " << isPalindrome("hello", 0, 4) << endl;
    return 0;
}`,
        options: [
            "1 0",
            "true false",
            "0 1",
            "radar hello"
        ],
        correct: 0,
        explanation: "'radar': r==r, a==a, d==d (start>=end), return true=1. 'hello': h!=o, return false=0.",
        concept: "Recursive Palindrome Check",
        answerLogic: "isPalindrome('radar',0,4): r==r→isPalindrome(1,3): a==a→isPalindrome(2,2): 2>=2→true=1. isPalindrome('hello',0,4): h!=o→false=0.",
        examTips: "Recursive palindrome: compare outer characters, recurse on inner substring. Base case: start>=end means all characters matched."
    },

    // QUESTION 125 - Static Variable in Function
    {
        id: 125,
        type: "code-output",
        category: "functions",
        difficulty: "medium",
        week: 3,
        question: "What is the output?",
        code: `#include <iostream>
using namespace std;
int getNext() {
    static int counter = 0;
    return ++counter;
}
int main() {
    cout << getNext() << " " << getNext() << " " << getNext() << endl;
    return 0;
}`,
        options: [
            "1 2 3",
            "0 1 2",
            "1 1 1",
            "0 0 0"
        ],
        correct: 0,
        explanation: "Static variable counter retains value between function calls. First call: ++counter=1. Second call: ++counter=2. Third call: ++counter=3.",
        concept: "Static Local Variable Persistence",
        answerLogic: "static int counter=0 initializes once. Call 1: ++counter=1. Call 2: ++counter=2. Call 3: ++counter=3. Static preserves value.",
        examTips: "Static local variables retain values between function calls. Initialized only once, not on each call. Useful for counters and state."
    }

];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = questions;
}