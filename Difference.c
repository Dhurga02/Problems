//Write a program to get two numbers and print its difference 

#include<stdio.h>
int getNumberFromUser(){
    int number;
    scanf("%d",& number);
    return number;
}

int findDifference(int a ,int b ){
   return  a-b ; 
}

int main(){
    printf("enter the first number ");
    int a=getNumberFromUser();
    printf("enter the second number ");
    int b=getNumberFromUser();
    int x =findDifference(a,b);
 printf("The difference is %d and %d = %d",a,b,x);
}
