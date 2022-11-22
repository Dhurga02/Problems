// Write program to get name and age from user and print in the output

#include<stdio.h>
void main(){
    char Name[60];
    char Age[60];
    printf("Enter your Name : ");
    scanf("%s", Name );
    printf("Enter your Age : ");
    scanf("%s ", Age );
    printf(" Hello %s %s years old ", Name, Age);
}
