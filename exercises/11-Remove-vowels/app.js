
const rapid =(myString) => {
        let newVar = "";

    for(var i = 0; i < myString.length; i++){
        if(mystring.charAt(i) !='a'||
           myString.charAt(i) !='e'||
           myString.charAt(i) !='i'|| 
           myString.charAt(i) !='0'||
           myString.charAt(i) !='u' ) {

           newVar.push(myString.charAt(i).toUpperCase())
        }

        if(myString.charAt(i)==myString.length) {

            return newVar
        }

        
    }


}

console.log(rapid("Hola"))






