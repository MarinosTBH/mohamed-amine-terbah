import React from 'react'
import CodeBlock from './CodeBlock'

const msg = `ALGORITHM sentence_functions
VAR

    ch: CHAR;
    
    l : INTEGER :=0;
    w : INTEGER :=0;
    V : INTEGER :=0;
    
    letter: CHAR;
    point: CHAR:=".";
    space: CHAR:=" ";
    
    vowel_1 : CHAR:="a";
    vowel_2 : CHAR:="e";
    vowel_3 : CHAR:="i";
    vowel_4 : CHAR:="o";
    vowel_5 : CHAR:="u";
BEGIN
REPEAT
    Write("please enter a sentence character by character")
    Read(ch)
    FOR letter FROM 'a' to 'z' STEP 1   DO
        IF (ch=letter) THEN
            l := l + 1;
        END_IF
        
        IF (sen[i]=vowel_1 OR sen[i]=vowel_2 OR sen[i]=vowel_3 OR sen[i]=vowel_4 OR sen[i]=vowel_5) THEN
            V:=V+1;
        END_IF
    END_FOR
    IF (ch=space) THEN
        w:=w+1;
    END_IF

UNTIL (ch=point)
 Write("This sentence has",l,"characters");
 Write("This sentence has",V,"vowels");
 Write("This sentence has",w,"words");
END`

const ChapterEight = () => {
  return (
    <>
        <CodeBlock message={msg}/>
    </>
  )
}

export default ChapterEight