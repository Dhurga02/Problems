// 5. Write a program to get name , door no, street , place , district and pincode and print in below format

#include<stdio.h>
void main(){
    char name[25];
    char doorNo[20];
    char street[30];
    char place[25];
    char district[30];
    char pincode[20];
    printf("Name : ");
    scanf("%s", name );
    printf("DoorNo : ");
    scanf("%s", doorNo);
    printf("Street : ");
    scanf("%s" , street );
    printf("Place : ");
    scanf("%s",place );
    printf("District : ");
    scanf("%s" , district);
    printf("Pincode : ");
    scanf("%s", pincode);
}
