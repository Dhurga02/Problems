// Find a number whether it is Positive or negative or zero

#include<stdio.h>
int getNumberFromUser(){
    int number;
    scanf("%d",& number);
    return number;
}

void findPositiveAndNegative(int a){
    if(a==0){
        printf("netural");
    }else if(a>0){
        printf("this is positive ");
    }else{
        printf("this is negative ");
    }
}

void main(){
printf("enter the number ");
int a=getNumberFromUser();
findPositiveAndNegative(a);
}
