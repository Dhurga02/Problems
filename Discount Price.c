// Write a program to find the discount price. Input will be Total purchase amount, Output will print how much discount and final amount to pay. Discount = 20%


#include <stdio.h>

float getNumberFromUser(){
    float number;
    scanf("%f", & number);
    return number;
}

float findSimpleInterest(float amount, float discount){
    return discount=amount-(amount*discount)/100;
}

void main(){
    printf("enter the total amount :");
    float amount = getNumberFromUser();
     printf("enter the discount :");
    float discount = getNumberFromUser();
    float finalamount=findSimpleInterest(amount,discount);
    printf("\n final amount =%f",finalamount);
}
