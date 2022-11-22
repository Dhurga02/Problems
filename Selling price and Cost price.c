// Write a program to calculate profit or loss

#include<stdio.h>
int getNumberFromUser(){
    int number;
    scanf("%d",& number);
    return number;
}

void findSellingAndCost(int sp,int cp){
    if(sp > cp){
        printf("\n profit is %d", sp-cp);
    }else if(cp > sp){
        printf("\n loss is %d", cp-sp);
    }else{
        printf("no profit nor loss");
    }
}

void main(){
    printf("enter the selling price ");
    int sp = getNumberFromUser();
    printf("enter the cost price ");
    int cp = getNumberFromUser();
    findSellingAndCost(sp,cp);
}
