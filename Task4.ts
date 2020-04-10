 export class Employee{
     private name:string;
     private color:string;
     private birthYear:number;

     constructor(name,color,birthYear){
         this.name=name;
         this.color=color;
         this.birthYear=birthYear;

     }

     getName(){
         return this.name;
     }

     setName(name:string){
         this.name=name;
     }

     getColor(){
         return this.color;
     }

     setColor(color:string){
         this.color=color;
     }

     getBirthYear(){
         return this.birthYear;
     }

     setBirthYear(birthYear:number){
         this.birthYear=birthYear;
     }
 }

 class AdhocEmployee extends Employee{
     private numberOfWorkingHours: number;

     constructor(name,color,birthYear, numberOfWorkingHours){
         super(name,color,birthYear);
         this.numberOfWorkingHours=numberOfWorkingHours;
     }

     getNumberOfWorkingHours(){
         return this.numberOfWorkingHours;
     }

     setNumberOfWorkingHours(numberOfWorkingHours:number){
         this.numberOfWorkingHours=numberOfWorkingHours;
     }
 }

 let emp = new Employee('Ruchi','fair',1991);
 console.log(emp);
 

 let adhocEmp = new AdhocEmployee('Ruchi','fair',1991,8);
 console.log(adhocEmp);
 