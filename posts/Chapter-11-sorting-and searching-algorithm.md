---
title: "Chapter 11 : Sorting and searching algorithms "
date: "2022-06-22"
---

**Exercise: Insertion Sort Modification**

You're presented with code that implements the Insertion Sort algorithm for sorting an array of integers in ascending order. Your task is to modify this code to sort the array in descending order and ensure that it still functions efficiently. Afterward, test your modified algorithm with different input arrays and display the sorted results. This exercise will help you gain practical experience in working with sorting algorithms.

```
PROCEDURE inserrtionSort(arr : ARRAY_OF INTEGER[], n : INTEGER)
VAR
    i, key, j: INTEGER;
BEGIN
    Write("give length of array :")
    Read(n)
    FOR i FROM 1 TO n STEP 1  DO
        key := arr[i];
        j := i - 1;
          /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
        WHILE (j >= 0 AND arr[j] > key) DO
            arr[j + 1] := arr[j]
            j := j - 1
        END_WHILE
        arr[j + 1 ] := key
    END_FOR
END

ALGORITHM main
VAR
    i : INTEGER;
    arr : ARRAY_OF INTEGER[];
    n : INTEGER := 0;
BEGIN
    // read length & array 
    Read(n);
    FOR i FROM 0 TO n-1 STEP 1  DO
        Read(arr[i]);
    END_FOR
    //execution
    inserrtionSort(arr, n);
    //write new array
    FOR i FROM 0 TO arr.length-1 STEP 1  DO
        Write(arr[i]);
    END_FOR
END
```