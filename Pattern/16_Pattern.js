// Pattern 16

// N = 5, , N will be always odd number and N > 3


// *	*	*	*	*

// *				*

// *		*		*

// *				*

// *	*	*	*	*
const n = 5

output = ""

for(let i=1 ; i<=n ; i=i+1){

    for(let j=1 ; j<=n ; j=j+1){

        if(i==1 || i==n || j==1 || j==n || i==3 && j==3){
            output=output+"* "
        
        }else{
            output=output+"  ";
        
        }
    
    }
    output=output+"\n"
}
console.log(output);
