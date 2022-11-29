// Write program to get name and father name from user and print in the output

#include<stdio.h>
void main(){
    char Name[25];
    char Fathername[25];
    printf("Enter your name : ");
    scanf("%s",Name);
    printf("Enter your Fathername : ");
    scanf("%s",Fathername);
    printf("\n Hello %s %s", Name , Fathername);
}
