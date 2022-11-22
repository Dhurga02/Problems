// Write a program to find the total mark of a student. Total Subjects - Tamil, english and math

#include<stdio.h>
int getNumberFromUser(){
    int number;
    scanf("%d", & number );
    return number;
}

int findTotalMarks(int a, int b , int c){
    return a + b + c;
}

void main(){
   printf("tamil mark ");
    int a= getNumberFromUser();
    printf(" english mark ");
       int b= getNumberFromUser();
       printf(" maths mark ");
       int c= getNumberFromUser();
       int total = findTotalMarks(a,b,c);
       printf("\n total is %d ", total);
}
