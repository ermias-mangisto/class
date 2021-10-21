class Student{
    firstName;
    lastName;
    age;
    avg;
    constructor(FirstName,LastName,Age,Avg){
        this.firstName=FirstName;
        this.lastName=LastName;
        this.age=Age;
        this.avg=Avg;
    }
}

const studentMap=new Map()
studentMap.set("avi",new Student("avi","adamo",23,78))
studentMap.set("dave",new Student("dave","chaplle",19,98))
studentMap.set("haim",new Student("haim","holio",13,84))
console.log(studentMap);
let divs=document.getElementsByClassName("divs")

for(let i=0;i<divs.length;i++){
divs[i].addEventListener("mouseenter",()=>{
    console.log(studentMap.get(divs[i].id));
divs[i].innerHTML+=`<pre>
first name:${studentMap.get(divs[i].id).firstName}
last name:${studentMap.get(divs[i].id).lastName}
Age:${studentMap.get(divs[i].id).age}
Avg:${studentMap.get(divs[i].id).avg}
</pre>`

})
divs[i].addEventListener("mouseleave",()=>{
 divs[i].innerHTML=`<h5>${studentMap.get(divs[i].id).firstName}</h5>`
})
}






class Car{
    wheels;
    engineCap;
    color;
    constructor(Wheels,EngineCap,Color){
       this.wheels=Wheels;
       this.engineCap=EngineCap;
       this.color=Color;
    }
    print(){
        return `wheels:${this.wheels} engine capcity:${this.engineCap} color:${this.color}`
    }

    static bestEngine(array){
        let max=array[0]
  for(let i=1;i<array.length;i++){
      if(max.engineCap<array[i].engineCap){
          max=array[i]
      }
  }
  return max
}
}
class Mazda extends Car{

constructor(wheels,engineCap,color){
    super(wheels,engineCap,color)
}
 upperCase(){
 return this.constructor.name.toUpperCase();
}
get upper(){
   return this.upperCase()
}
printMazda() {
 return` ${super.print()} car:${this.constructor.name}`
}
 
}
class Sedan extends Car{

    constructor(wheels,engineCap,color){
        super(wheels,engineCap,color)
    }
printSedan() {
    return` ${super.print()} car:${this.constructor.name}`
   }
}
class Bmw extends Car{

    constructor(wheels,engineCap,color){
        super(wheels,engineCap,color)
    }
printBmw() {
    return` ${super.print()} car:${this.constructor.name}`
   }
}

let car1=new Car(4,90,"red")
let car2=new Car(4,40,"blue")
let car3=new Car(4,50,"yellow")
let mazda1=new Mazda(4,50,"yellow")
console.log(Car.bestEngine([car1,car2,car3]));
console.log(mazda1.printMazda());

addBtn.addEventListener("click",()=>{
    switch (type.value) {
        
        case "sedan":
            let sedan0=new Sedan(wheels.value,engine.value,color.value)
            holder.innerHTML+=`<tr>
            <td>${sedan0.wheels}</td>
            <td>${sedan0.engineCap}</td>
            <td>${sedan0.color}</td>
            <td>${sedan0.constructor.name}</td>
            </tr>`
            break;
        case "mazda":
            let mazda0=new Mazda(wheels.value,engine.value,color.value)
            holder.innerHTML+=`<tr>
            <td>${mazda0.wheels}</td>
            <td>${mazda0.engineCap}</td>
            <td>${mazda0.color}</td>
            <td>${mazda0.constructor.name}</td>
            </tr>`
            break;
        case "bmw":
            let bmw0=new Bmw(wheels.value,engine.value,color.value)
            holder.innerHTML+=`<tr>
            <td>${bmw0.wheels}</td>
            <td>${bmw0.engineCap}</td>
            <td>${bmw0.color}</td>
            <td>${bmw0.constructor.name}</td>
            </tr>`
            break;
    
    }
})