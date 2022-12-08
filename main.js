//Q1
// class Person {
   

//     constructor(name , age){
//         this.name = name;
//         this.age = age
//     }

//     display(){
//         console.log("the name is : " + this.name);
//     }
// }
// //employee class
// class Employee extends Person{
//     static count = 0;
//     static displayHTRules(){
//         console.log(" this is HTRules");
//     }
   
//     constructor(name , age , salary ){
//         super(name , age);
//         this.salary = salary;
//         Employee.displayHTRules();
//         Employee.count++ ;
//     }

//          get_count(){
//         return  Employee.count
//          }
    

   
//     displaySalary(){
//         console.log( "employee salary is : " + this.salary);
//     }
   
//     increaseSalary(incr){
//         return " salary is increased with 500 and the total salary is : " +(this.salary + incr) ;
//     }
// }
// //student class
// class Student extends Person {
//     #department ;
//     constructor(name , age , id ){
//         super(name , age);
//         this.id = id;
//     }
//      stId(){
//         console.log("student id is : " + this.id);
//      }
//      set_dep(dep){
//         this.#department = dep
//         console.log("student department is : " + dep);
//      }
//      get_dep(){
//         return this.#department
//      }
// }

// var emp1 = new Employee("ali" , 30 , 3000);
// var emp2 = new Employee("aya" , 50 , 3900);
// var emp3 = new Employee("ahmed" , 20 , 6800);
// var student = new Student("yahia" , 200000 );
// console.log(emp3.get_count());

// student.set_dep("CS");
// console.log(emp2.get_count());

// console.log(emp1.get_count());
// console.log(emp1.increaseSalary(500));

// //abstract class 
// class Abstraction{
//     constructor(a , b){
//         if(this.constructor == Abstraction){
//             throw " you cant make instance from abstract class"
//         }
//     }
// }
// var abs = new Abstraction();
// console.log(abs);
// //---------------------------------------------------------------------------
// //Q3
var scientific_department = {
    name : "ahmed" ,
    location : "aswan" ,
    address : {city:"aswan" , street : "port-saied-street" , zipCode : 1234},
    display_obj_content : function(){
        return(" name is : " + this.name + " location is : " + this.location + " address is : " + this.address.city +
         "/" + this.address.street + "/" + this.address.zipCode);
    }
  
}
console.log(scientific_department);
console.log(scientific_department.display_obj_content());
//-----------------------------------------------------------------------------------
//Q4
// var arr = [1,2,7, 90 ,67 ,54];
function get_max(...arr){
    var max = arr[0];
    for(var i = 0 ; i < arr.length ; i++){
        
        if(arr[i] > max ){
           max =  arr[i];
          
        }
        
    }
    console.log(max);
        return max
}
get_max(34 , 12 , 87 , 124 , 47);

function get_max(...arr){
    var max = arr[0];
    for(var i = 0 ; i < arr.length ; i++){
        
        if(arr[i] > max ){
           max =  arr[i];
          
        }
        
    }
    console.log(max);
        return max
}
get_max(34 , 12 , 87 , 124 , 47);

function get_min(...arr2){
       var min = arr2[0];
       for(var i = 0 ; i< arr2.length ; i++){
        if(arr2[i] < min){
            min = arr2[i]
        }
       }
       console.log(min);
       return min
}
get_min(60 , 70 , 12 , 6);
//-----------------------------------------------------------------------------------------
//Q5
//1-check that the array is string
var fruits = ["apple" , "banana" , "mango" ,"orange"  ,"asddd" ,"cherry"]
function is_string() {
    for(var i=0; i<fruits.length; i++){
      if(typeof fruits[i] != "string") {
         return false;
       }
    }
    console.log("yes the array is string");
    return true;
   }
   is_string();
   //----------------
//2-starts with a
 function check_start(){
    for(var i = 0 ; i< fruits.length ; i++){
        if(fruits[i].startsWith("a")){
            console.log(fruits[i] + "is starting with a") ;
            return fruits[i]
        }
    }
    console.log("there is no fruits starts with a");
 }   
 check_start();
 //--------------
 //3-new array generation
var filtering_arr = [];
 fruits.filter(function(item){
    if(item.startsWith("b") | item.startsWith("c")){
        filtering_arr.push(item);
    }
    console.log(filtering_arr);
 })
// ---------onother-solution-------------------------------------------------
 var new_arr = fruits.filter(el => el.startsWith("b") | el.startsWith("c"));
 console.log(new_arr);

//-----------------------------------------------------------------------------------------
//Q6
function show_countries(){

    var country_arr = ["Brazeil" , "America" , "Egypt" , "Sudan" , " Africa" , "Kanda" , "America" , "Kanda" , "Egypt"];
    var country_arr_length = country_arr.length;
    console.log(country_arr_length );
    var set = new Set( country_arr);
    var set_size = set.size ;
    console.log(set_size);
    var num_of_repeated_items = country_arr_length - set_size;
    console.log(num_of_repeated_items);
  
    }

show_countries()