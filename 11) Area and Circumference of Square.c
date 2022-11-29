// Write a program to find Area and circumference of square 


#include<stdio.h>
int getNumberFromUser(){
    int number;
    scanf("%d", & number );
    return number;
}

int findTheArea(int a){
return (a*a);
}

int findTheCircumference(int a){
    return 4*a;
}

void main(){
    printf("enter the sude of square ");
    int a = getNumberFromUser();
    int area = findTheArea(a);
    printf("\n area is %d ", area);
    int circumference = findTheCircumference(a);
    printf("\n cricumference is %d ", circumference);
}
