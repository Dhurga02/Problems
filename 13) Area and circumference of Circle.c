// Write a program to find Area and circumference of Circle


#include<stdio.h>
float getNumberFromUser(){
    float number;
    scanf("%f", & number );
    return number;
}

float findTheArea(float r){
return 3.14*(r*r);
}

float findTheCircumference(float r){
    return 2*(3.14*r);
}

void main(){
    printf("enter the radius of circle ");
    float r = getNumberFromUser();
    float area = findTheArea(r);
    printf("\n area is %f ", area);
    float circumference = findTheCircumference(r);
    printf("\n cricumference is %f ", circumference);
}
