// Give Grades for student based on below condition


#include<stdio.h>
int getNumberFromUser(){
    int number;
    scanf("%d", &number);
    return number;
}

void findGrade(int a){
    if(a>=100){
        printf("A grade " );
    }else if(a>90){
        printf("B grade ");
    }else if(a>70){
        printf("C grade ");
    }else if(a>35){
        printf("D grade ");
    }else{
        printf("fail ");
    }
}

void main(){
    printf("enter the student grade ");
    int a= getNumberFromUser();
    findGrade(a);
}
