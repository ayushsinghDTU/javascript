// Immediately Invoked Function Expression  (IIFE)
// Globel scope pollution create problem somthime so to remove that we use IIFE ,
// IIFE immediatly execute.

// named IIFE 
(function learning () {
    console.log(`DB connected`);
})();    // without semicolon help the function to stop .. 

// another iife 
((name) => {
    console.log(`DB connected two ${name}`)
}) ('name');
