function launchBrowser(){
    let browserName="firefox"
    if(browserName==="chrome")
     {
        console.log("true");
    }
    else 
        {
             console.log("false");
        }                                                
}
 launchBrowser()

function runTests(testType){
    
    switch (testType)
    {
case "smoke":
    console.log("smoke");
break;
case "sanity":
    console.log("sanity");
    break;
 case "regression":
    console.log("regression");
   break;
   default:
    console.log("smoke");

}
    
}
runTests("smoke")
runTests("sanity")
runTests("regression")
runTests("smoke")