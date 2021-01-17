/*
1. Create an empty object called dog
2. Print the the dog object on the console
3. Add name, legs, color, age and bark properties for the dog object. 
The bark property is a method which return woof woof
4. Get name, legs, color, age and bark value from the dog object
5. Set new properties the dog object: breed, getDogInfo
*/

const dog={
    name:'Gimli',
    legs: 4,
    color:'white and brown',
    age: 6,
    bark: function(){
        return `woof woof`;
    },
    getName: function(){
        return `${this.name}`
    },
    getLegs: function(){
        return `${this.legs}`
    },
    getColor:function(){
        return `${this.color}`
    },
    getAge: function(){
        return `${this.age}`
    },
}
dog.breed='Cavachon'
dog.getDogInfo = function(){
    let name= `${this.getName()}`
    let legs= `${this.getLegs()}`
    let color=`${this.getColor()}`
    let age= `${this.getAge()}`
    let statement = `${name} is a ${this.breed}.\nHe has ${legs} legs and he is ${color}.\nHe is ${age} years old.`
    return statement
}
console.log(dog.getDogInfo())

