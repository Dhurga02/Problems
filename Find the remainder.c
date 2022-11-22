// Write a program to create two number variables and print its Remainder ( % )


#include<stdio.h>
int getNumberFromUser(){
    int number;
    scanf("%d",& number);
    return number;
}

int findRemainder(int a,int b){
return a%b ;
}

void main(){
    printf("enter the first number ");
    int a = getNumberFromUser();
    printf("enter the second number ");
    int b = getNumberFromUser();
int remainder = findRemainder(a,b);
printf("\n remainder is %d", remainder );
}
