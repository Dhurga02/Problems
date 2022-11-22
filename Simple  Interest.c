// Write a program to find Simple Interest.

#include <stdio.h>

float getNumberFromUser(){
    float number;
    scanf("%f", & number);
    return number;
}

float findSimpleInterest(float p, float n, int r){
    return (p*r*n)/100;
}

void main(){
    printf("enter the principle :");
    float p= getNumberFromUser();
     printf("enter the Number of years :");
    float n= getNumberFromUser();
     printf("enter the Rate of interest per annum :");
    float r= getNumberFromUser();
    float si=findSimpleInterest(p,n,r);
    printf("\n Simple Interest is :%f",si);
}
