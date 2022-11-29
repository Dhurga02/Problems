// Write a program to get two numbers and print its sum

#include<stdio.h>
int getNumberFromUser(){
    int number;
    scanf("%d",& number);
    return number;
}

int findMultiplication(int a , int b){
   return a*b; 
}

void main(){
    printf("enter the first number \n ");
    int a=getNumberFromUser();
    printf("enter the second number \n ");
    int b=getNumberFromUser();
int multiple =findMultiplication(a,b);
    printf("the ans is %d\n",multiple);
}
