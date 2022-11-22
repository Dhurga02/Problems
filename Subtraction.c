// Write a program to get two numbers and print its difference 

#include<stdio.h>
int getNumberFromUser(){
    int number;
    scanf("%d",& number);
    return number;
}

int findDifference(int a , int b){
   return a-b; 
}

void main(){
    printf("enter the first number \n ");
    int a=getNumberFromUser();
    printf("enter the second number \n ");
    int b=getNumberFromUser();
int sub =findDifference(a,b);
    printf("the difference is %d\n",sub);
}
