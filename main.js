var myArgs = process.argv;
myString="";
var digitToString = ["Zero", "One", "Two","Three","Four","Five","Six","Seven","Eight","Nine"];
prefix="";


/* Function to converts an integer into its Phonetic equivalent*/
function stringifyNumber(number) {

        var stringifiedNumber = "";
        if(number==0)
        {
                return digitToString[number];
        }
        while(number>0) {
                var remainder = number%10;
                var digitString = digitToString[remainder];
                stringifiedNumber = digitString+stringifiedNumber;
                number = number/10 | 0;
        }
        return stringifiedNumber;

}


/* Function to convert command line arguments into integers and return as a list of integers */
function getIntegerList(myArgs)
{
        integerList=[];
        for (i=2;i<myArgs.length;i++) {
                integerList.push(parseInt(myArgs[i]));
        }
        return integerList;
}

/* Function to convert a list of integers into string array of their phonetic equivalent */
function getStringArray(integerList) {
        stringArray="";
        for (i=0;i<integerList.length;i++) {
                str=stringifyNumber(integerList[i]);
                stringArray+=prefix+str;
                prefix=", ";

        }
        return stringArray;
} 

/* Function to print the input string */
function printStringArray(outputString)
{
       console.log(outputString); 
}



/* Main function that calls all the other functions */
function main()
{
        integerList=getIntegerList(myArgs);
        stringArray=getStringArray(integerList);
        printStringArray(stringArray);
}

main();
