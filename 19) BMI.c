// Write a program to find BMI

#include <stdio.h>

float getNumberFromUser(){
    float number;
    scanf("%f", & number);
    return number;
}

float findBMI(float weight , float height){
    return weight/ (height * height);
}

void main(){
    printf("enter the weight :");
    float weight = getNumberFromUser();
printf("enter the height :");
float height=getNumberFromUser();
    float BMI = findBMI(weight , height);
printf("\n BMI is: %f", BMI);
}
