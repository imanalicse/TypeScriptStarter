import StatusCode from "./enum/StatusCode";
import IPerson from "./interface/Person";
import {applyGeneric} from "./generic/genericType";

console.log('StatusCode', StatusCode)
applyGeneric();

function greeter(person: IPerson) {
    return "Hello, " + person.firstName + " "+ person.lastName;
}

let user : IPerson = {
    firstName: "Iman",
    lastName: "Ali"
};
document.getElementById("username").innerHTML = greeter(user);