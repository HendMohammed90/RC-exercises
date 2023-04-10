
type HttpRepose = [number , string];

let responce : HttpRepose = [200 , 'good'];

responce.push('hay');

// =================interfaces============
interface Dog {
    name : string ;
    age : number
}

interface Dog {
    breed : string ;
    bark() : string ;
}

let ropy : Dog = {
name : 'Roby' ,
age : 10 ,
breed : 'Egyptian' ,
bark(){
    return 'Woof Woof'
}
}
interface DogToy {
    toy : "stik" | "running";
}

interface ServiceDog extends Dog,DogToy {
    jop:"boom" | "guide dog";
}

const myDog : ServiceDog = {
    name: "test" ,
    age : 12 ,
    breed : "breed",
    bark(){
        return 'Woof Woof'
    },
    jop : "boom",
    toy : "running"
}