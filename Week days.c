// Print Day Names for the given number

#include<stdio.h>
int getNumberFromUser(){
    int number;
    scanf("%d", & number);
    return number;
}

void findWeeks(char d){
    switch(d){
        case 1:
        printf("Monday");
        break;
         case 2:
        printf("Tuesday");
        break; 
        case 3:
        printf("Wednesday");
        break; 
        case 4:
        printf("Thursday");
        break;
        case 5:
        printf("Friday");
        break;
        case 6:
        printf("Saturday");
        break;
        case 7:
        printf("Sunday");
        break;
        default:
        printf("Not valid day Number ");
        break;
    }
}

void main(){
    printf("enter the week ");
    int d =getNumberFromUser();
     findWeeks(d);
    
}
