---
title: "A bunch of common algorithms"
date: "2023-04-06"
---

One place, a bunch of algorithms so I don't have to re-search for them.

- XOR swap

```cpp
int main() {
    int a = 1;
    int b = 2;
    a ^= b;
    b ^= a;
    a ^= b;
    cout << "a: " << a << endl;
    cout << "b: " << b << endl;
    return 0;
}
```

```
# clang++ -o main main.cpp -Wall -O3 && ./main
a: 2
b: 1
```

- Reverse a singly-linked list

```cpp
typedef struct {
  int data;
  Node* next;
} Node;

Node* reverse(Node* head) {
    Node* node = head;
    Node* prev = nullptr;
    Node* next = nullptr;
    while (node != nullptr) {
        next = node->next;
        node->next = prev;
        prev = node;
        node = next;
    }

    return prev;
}
```

- Bubble sort

```cpp
int main() {
    vector<int> v = {5, 2, 3, 9};

    bool swapped = true;
    while (swapped) {
      swapped = false;
      for (int i = 0; i < v.size() - 1; i++) {
        if (v[i] > v[i + 1]) {
          v[i] ^= v[i + 1];
          v[i + 1] ^= v[i];
          v[i] ^= v[i + 1];
          swapped = true;
        }
      }
    }

    for (int i = 0; i < v.size(); i++) {
      cout << v[i] << " ";
    }
    cout << endl;

    return 0;
}
```

```
# clang++ -o main main.cpp -Wall -O3 && ./main
2 3 5 9
```

- Merge sort (todo)
