const faker = require('faker');

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
console.log(`${firstName} ${lastName}`);

const streetName = faker.address.streetName();
const city = faker.address.city();
console.log(`Street: ${streetName} , ${city}`);

const country = faker.address.country();
const countryCode = faker.address.countryCode();
console.log(`${country} - Zip Code: ${countryCode}`);

const email = faker.internet.email();
console.log(`Email: ${email}`);

const phoneNumber = faker.phone.phoneNumber();
console.log(`Phone number: ${phoneNumber}`);

const jobTitle = faker.name.jobTitle();
const jobDescriptor = faker.name.jobDescriptor();
console.log(`Works as ${jobTitle} - ${jobDescriptor}`);

