// Women Marriage Eligibility Check. Age must be greater than 21

#include<stdio.h>
int getNumberFromUser(){
    int number;
    scanf("%d",& number);
    return number;
}

void findEligibleOrNotEligible(int a){
    if(a>21){
        printf("eligible for marriage ");
    }else if(a<21){
        printf("not eligible for marriage ");
    }
}

void main(){
    printf("check eligible or not eligible for marriage \n");
    int a=getNumberFromUser();
findEligibleOrNotEligible(a);
    
}
