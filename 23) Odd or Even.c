// Find a number whether it is odd or even. Zero is neither odd or even

#include<stdio.h>
int getNumberFromUser(){
    int number;
    scanf("%d",& number);
    return number;
}

void findOddOrEven(int a){
    if(a%2!=0){
        printf("this is odd nuumber ");
    }else{
    printf("this is even number ");    
    }
    }
    void main(){
        printf("enter the number ");
        int a= getNumberFromUser();
        findOddOrEven(a);
    }
