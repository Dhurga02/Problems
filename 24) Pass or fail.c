// Find Student result based on total marks

#include<stdio.h>
int getNumberFromUser(){
    int number;
    scanf("%d", & number);
    return number;
}

void findMarks(int a){
    if (a>35){
        printf("there are pass ");
    }else{
        printf("fail ");
    }
}

void main(){
    printf("enter the marks ");
    int a= getNumberFromUser();
    findMarks(a);
}
