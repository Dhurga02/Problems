// Write a program to find the total chicken price. Input will be how many kilos of chicken, Output will be total chicken price. 1KG = 180 rs

#include<stdio.h>

int getNumberFromUser(){
    int number;
    scanf("%d",& number);
    return number;
}

int findTheKilogram(int a ,int b){
    return a*b;
}

void main(){
    printf("enter the chicken's :");
    int a=getNumberFromUser();
    printf("enter the chicken price :");
    int b= getNumberFromUser();
    int cost= findTheKilogram(a,b);
    printf("\n total chicken price is = %d",cost);
}
