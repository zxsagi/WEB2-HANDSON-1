"use strict";
const myBio = {
    name: "John Doe",
    age: 25,
    email: "djchen@example.com",
    address: "123 Main St; Anytown, USA",
    hobbies: ["Reading", "Traveling", "Coding"],
};
function displayBio(bio) {
    console.log(`Name: ${bio.name}`);
    console.log(`Age: ${bio.age}`);
    console.log(`Email: ${bio.email}`);
    console.log(`Address: ${bio.address}`);
    console.log("Hobbies: ");
    for (const hobby of bio.hobbies) {
        console.log(`- ${hobby}`);
    }
}
displayBio(myBio);
//# sourceMappingURL=index.js.map