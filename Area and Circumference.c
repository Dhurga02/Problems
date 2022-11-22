// Write a program to find Area and circumference of Rectangle

#include<stdio.h>
int getNumberFromUser(){
    int number;
    scanf("%d", & number );
    return number;
}

int areaOfRectangle( l, b){
return (l*b);
}

int circumferenceOfRectangle(l,b){
    return 2*(l+b);
}

void main(){
    printf("enter the length value ");
    int l = getNumberFromUser();
    printf("enter the breadth value ");
    int b = getNumberFromUser();
    int area = areaOfRectangle(l,b);
    printf("\n area is %d ", area);
    int circumference = circumferenceOfRectangle(l,b);
    printf("\n cricumference is %d ", circumference);
}
