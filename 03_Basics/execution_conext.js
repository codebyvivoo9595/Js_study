//javascript execution contect 
/*
//when ever execution start 
//Global execution context ==>{}[this]
//Javascrpit is singl threaded language
total 3 execution context 
1.Global execution context 
2.Function/functional execution context 
3.Eval Execution context 

[{}] => Memory Creation phase / Creation phase
 //here memory is allocate for variable but execution or value not assign here
 
 let val1 = 10;
 let val2 = 5

 function add(num1,num2){return num1+num2}

 let result1 = add(val1+val2)
 let result2 = add(10,2)

 then how the flow is going on let see

 1. Global Execution {} this
 2. Memory Phase (assign memory space not value )
    //1)First cycle
    val1= undefine
    val2 = undefine
    add = defination 

    result1 = undefine
    result2 = undefine
  
    //2) execution phase 
    val1<=10
    val2<=5
    add==> New execution context (New execution Envoirment + Execution thread)
    Note after executions of the function call the execution context will delete.
    
    (New execution Envoirment + Execution thread)
  //   Memory Phase           + execution phase  
*/