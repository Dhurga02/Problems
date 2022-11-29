// Write program to get name and address from user and print in the output

#include<stdio.h>
void main(){
    char Name[50];
    char Address[50];
    printf("Enter your Name : ");
    scanf("%s", Name);
    printf("Enter your Address : ");
    scanf("%s", Address);
    printf("\n Hello %s %s ", Name , Address );
}
