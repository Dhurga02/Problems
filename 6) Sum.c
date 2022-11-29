// Write a program to get two numbers and print its sum

#include<stdio.h>
int getNumberFromUser(){
    int number;
    scanf("%d",& number);
    return number;
}

int findSum(int a , int b){
   return a+b; 
}

void main(){
    printf("enter the first number \n ");
    int a=getNumberFromUser();
    printf("enter the second number \n ");
    int b=getNumberFromUser();
int sum =findSum(a,b);
    printf("the sum is %d\n",sum);
}
