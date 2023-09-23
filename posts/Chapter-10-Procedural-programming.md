---
title: "Chapter 10 : Procedural programming "
date: "2022-06-20"
---

**Exercise: Dot Products and Vector Orthogonality**

In this coding exercise, you'll explore dot products and vector orthogonality using two solutions: one procedural and one functional.

Your task is to:

-Solution Analysis: Carefully study both the provided procedural and functional solutions. Understand how they calculate the dot product of two vectors and determine if the vectors are orthogonal.

-Your Algorithm: Create your own algorithm, either procedural or functional, to achieve the same objectives. Your algorithm should be able to calculate the dot product of two vectors and decide whether they are orthogonal.

-Testing: Test your algorithm with various sets of vectors to ensure its correctness.

-Orthogonality Test: Implement a test to determine if two vectors are orthogonal or not, based on the dot product result.

This exercise will help you gain a practical understanding of mathematical concepts like dot products and vector orthogonality, which have applications in fields such as physics, computer graphics, and engineering. Dive into the code, explore the solutions, and deepen your knowledge of vectors!


//*****************************PROCEDURAL*SOLUTION*****************************//
```
PROCEDURE dot_product(v1,v2:ARRAY_OF INTEGER[100], VAR ps : INTEGER)
VAR 
    i : INTEGER;
BEGIN
    IF(v1.length = v2.length) THEN
        FOR i FROM 0 TO v1.length DO
            ps := ps + v1[i] * v2[i];
        END_FOR
        Write("The Dot Product of your vectors is ",ps);
    ELSE
        Write("Vector length not equale");
    END_IF
END

ALGORITHM DOT_PRODUCT
VAR
    V1,V2 : ARRAY_OF INTEGER[100];
    ps,n1,n2,i : INTEGER := 0 ; 
BEGIN
    Write("Please enter the size of the first vector (max size is 100)");
    Read(n1);
    FOR i FROM 0 TO n1 DO
        Read(V1[i])
    END_FOR

    Write("Please enter the size of the secend vector (max size is 100)");
    Read(n2);
    FOR i FROM 0 TO n2 DO
        Read(V2[i])
    END_FOR

    dot_product(V1,V2,ps);

    IF (ps = 0) THEN
        Write("V1 and V2 are orthogonal");
    ELSE
        Write("V1 and V2 are not orthogonal");
    END_IF
END
//*****************************************************************************//
//*****************************************************************************//
//*****************************FUNCTIONAL*SOLUTION*****************************//
//*****************************************************************************//
//*****************************************************************************//
FUNCTION dot_product(v1,v2: ARRAY_OF INTEGER[100]): INTEGER
VAR
    ps,i : INTEGER := 0;
BEGIN

    IF(v1.length = v2.length) THEN
        FOR i FROM 0 TO v1.length DO
            ps := ps + v1[i] * v2[i];
        END_FOR
        RETURN ps;
    ELSE
        Write("Vector length not equale");
        RETURN NaN; //Not a Number
    END_IF
END

ALGORITHM DOT_PRODUCT
VAR
    V1,V2 : ARRAY_OF INTEGER[100];
    ps,n1,n2,i : INTEGER := 0 ; 
BEGIN
    Write("Please enter the size of the first vector (max size is 100)");
    Read(n1);
    FOR i FROM 0 TO n1 DO
        Read(V1[i])
    END_FOR

    Write("Please enter the size of the secend vector (max size is 100)");
    Read(n2);
    FOR i FROM 0 TO n2 DO
        Read(V2[i])
    END_FOR

    ps := dot_product(V1,V2);

    IF (ps = 0) THEN
        Write("V1 and V2 are orthogonal");
    ELSE
        Write("V1 and V2 are not orthogonal");
    END_IF
END
```