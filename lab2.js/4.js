const obj1 = {name: 'Pinkie'};
let obj2 = {name:'Pinkie'};

obj1.name = 'Pie';
obj2.name = 'Pie';

obj2 = {name: 'Pinkie Pie' };

const createUser = (name, city) =>{
    return {name, city}
};

console.log(createUser('Pinkie Pie','Ponyville'));
