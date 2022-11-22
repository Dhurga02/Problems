// Write a program to find the average mark of a student. Total Subjects - Tamil, english , and math


#include<stdio.h>
float getNumberFromUser(){
    float number;
    scanf("%f", & number );
    return number;
}

float findAverageMarks(float a, float b , float c){
    return (a + b + c)/3;
}

void main(){
   printf("tamil mark ");
    float a= getNumberFromUser();
    printf(" english mark ");
    float b= getNumberFromUser();
       printf(" maths mark ");
       float c= getNumberFromUser();
       float avg = findAverageMarks(a,b,c);
       printf("\n average is is %f ", avg);
}
