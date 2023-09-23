---
title: "Chapter 9 : Linear Data Structures "
date: "2022-06-10"
---

**Linear data structures**

**Exercice 1:**

Let's embark on a coding challenge! You're given two sets of numbers, like puzzle pieces waiting to be solved. Your mission is to create an algorithm called 'gmcCheckpointDataStructProb1Sol1' that finds the sum of all distinct numbers hidden in both sets. It's a classic exercise in coding logic and array manipulation. So, roll up your sleeves and get ready to dive into the world of algorithms!:

**Solution:**

```
ALGORITHM gmcCheckpointDataStructProb1Sol1
VAR
    setOne : ARRAY_OF INTEGER[4];
    setTwo : ARRAY_OF INTEGER[4];
    i,j,sum : INTEGER := 0;
    dublicated : BOOLEAN;
BEGIN

    setOne := [12, 13, 6, 10];
    setTwo := [13, 10, 16,15];

    
    FOR i FROM 0 TO setOne.length DO 
        dublicated := false;
        FOR j FROM 0 TO setTwo.length-1 DO
            IF setOne[i] = setTwo[j] THEN 
                dublicated := true;
            END_IF
        END_FOR
        IF NOT dublicated THEN 
            sum := sum + setOne[i];
        END_IF

    END_FOR

    FOR i FROM 0 TO setTwo.length DO 
        dublicated := false;
        FOR j FROM 0 TO setOne.length DO
            IF setTwo[i] = setOne[j] THEN 
                dublicated := true;
            END_IF
        END_FOR
        IF NOT dublicated THEN 
            sum := sum + setOne[i];
        END_IF

    END_FOR

    Write("sum of all distinct elements : ", sum);

END
```

**Exercice 2**

You are presented with two sets of integers, 'setOne' and 'setTwo.' Your task is to create an algorithm called 'problemOneSolutionTwo' to find and sum the unique integers that appear only once across both sets. It's a practical challenge involving hash tables and array manipulation. So, let's dive in and unravel the solution to this coding puzzle!

**Solution:**

```
ALGORITHM problemOneSolutionTwo
VAR
	setOne,setTwo : ARRAY_OF INTEGER[10];
	i,counter : INTEGER := 0;
	htab := HASH_TABLE<INTEGER,INTEGER>;
	setOfhtabKeys : ARRAY_OF INTEGER[20];
	sum : INTEGER := 0;
BEGIN
	//Give the Value to setOne and setTwo
	setOne := [3, 1, 7, 9];  
	setTwo := [2, 4, 1, 9, 3];
	
	/*in this two for loops we will insert 
	the element of setOne and setTwo into 
	htab the elements of the arrays will be
	the key and the value is the number of his
	repetition in the two arrays. let's start*/
	
	FOR i FROM 0 TO setOne.length-1 DO
		IF (htab.lookup(setOne[i]) = TRUE) THEN
			counter := htab.get(setOne[i]);
			htab.insert(setOne[i],counter+1);
		ELSE
			htab.insert(setOne[i],1);
		END_IF
	END_FOR
	
	FOR i FROM 0 TO setTwo.length-1 DO
		IF (htab.lookup(setTwo[i]) = TRUE) THEN
			counter := htab.get(setTwo[i]);
			htab.insert(setTwo[i],counter+1);
		ELSE
			htab.insert(setTwo[i],1);
		END_IF
	END_FOR
	
	/*after the insertion of all element of the two
	arrays into our Hash Table (htab) we will insert 
	all his keys in a third array (setOfhtabKeys) */
	
	setOfhtabKeys := htab.getKeys();
	
	/*now we will loop through htab and sherching for
	all keys that have a value equale to 1 and add it
	to the sum */
	
	FOR i FROM 0 TO setOfhtabKeys.length-1 DO
		IF(htab.get(setOfhtabKeys[i] = 1)
			sum := sum + setOfhtabKeys[i];
		END_IF
	END_FOR
	
	WRITE(sum);
	
END
```

**Exercice 3**

You're faced with two arrays, 'setOne' and 'setTwo,' each containing integers. Your task is to create an algorithm named 'gmcCheckpointDataStructProb1Sol1' that calculates the sum of distinct elements found in both sets. It's a practical coding challenge that involves traversing arrays and finding unique values. So, let's dig into the code and solve this puzzle!

**Solution**

```
ALGORITHM gmcCheckpointDataStructProb2Sol1
VAR
    setOne : ARRAY_OF INTEGER[4];
    setTwo : ARRAY_OF INTEGER[4];
    i,j,sum : INTEGER := 0;
    dublicated : BOOLEAN;
BEGIN

    setOne := [12, 13, 6, 10];
    setTwo := [13, 10, 16,15];

    
    FOR i FROM 0 TO setOne.length DO 
        dublicated := false;
        FOR j FROM 0 TO setTwo.length-1 DO
            IF setOne[i] = setTwo[j] THEN 
                dublicated := true;
            END_IF
        END_FOR
        IF dublicated THEN 
            sum := sum + setOne[i]*2;
        END_IF

    END_FOR

    Write("Sum of all overlapping  elements : ", sum);

END
```

**Exercice 4**

You're given two arrays, 'setOne' and 'setTwo,' each containing integers. Your mission is to create an algorithm called 'problemTwoSolutionTwo' that finds and sums up the integers that appear exactly twice across both sets. It's a practical coding task involving arrays, a hash table, and a bit of detective work. So, let's jump into the code and solve this puzzle together!

**Solution**

```
ALGORITHM problemTwoSolutionTwo
VAR
	setOne,setTwo : ARRAY_OF INTEGER[10];
	i,counter : INTEGER := 0;
	htab := HASH_TABLE<INTEGER,INTEGER>;
	setOfhtabKeys : ARRAY_OF INTEGER[20];
	sum : INTEGER := 0;
BEGIN
	//Give the Value to setOne and setTwo
	setOne := [3, 1, 7, 9];  
	setTwo := [2, 4, 1, 9, 3];
	
	/*in this two for loops we will insert 
	the element of setOne and setTwo into 
	htab the elements of the arrays will be
	the key and the value is the number of his
	repetition in the two arrays. let's start*/
	
	FOR i FROM 0 TO setOne.length-1 DO
		IF (htab.lookup(setOne[i]) = TRUE) THEN
			counter := htab.get(setOne[i]);
			htab.insert(setOne[i],counter+1);
		ELSE
			htab.insert(setOne[i],1);
		END_IF
	END_FOR
	
	FOR i FROM 0 TO setTwo.length-1 DO
		IF (htab.lookup(setTwo[i]) = TRUE) THEN
			counter := htab.get(setTwo[i]);
			htab.insert(setTwo[i],counter+1);
		ELSE
			htab.insert(setTwo[i],1);
		END_IF
	END_FOR
	
	/*after the insertion of all element of the two
	arrays into our Hash Table (htab) we will insert 
	all his keys in a third array (setOfhtabKeys) */
	
	setOfhtabKeys := htab.getKeys();
	
	/*now we will loop through htab and sherching for
	all keys that have a value equale to 2 and add it
	to the sum */
	
	FOR i FROM 0 TO setOfhtabKeys.length-1 DO
		IF(htab.get(setOfhtabKeys[i] = 2)
			sum := sum + setOfhtabKeys[i];
		END_IF
	END_FOR
	
	WRITE(sum);
	
END
```
