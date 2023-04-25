
let obj1 = {name : "Person 1", age:5};
let obj2= {age:5, name: "Person 1"};

let obj1String = JSON.stringify(obj1);
let obj2String = JSON.stringify(obj2);

if (obj1String === obj2String) {
  console.log("The two objects are equal");
} else {
  console.log("The two objects are not equal");
}
