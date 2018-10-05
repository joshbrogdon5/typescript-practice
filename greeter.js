function greeter(person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}
var user = { firstName: 'Josh', lastName: 'Baggins' };
document.body.innerHTML = greeter(user);
