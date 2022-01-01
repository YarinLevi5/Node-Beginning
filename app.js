const fs = require('fs-extra');
var validator = require('validator');
var _ = require('lodash');

async function example() {
    try {
        await fs.writeJson('./package1.json', {
            name: 'yarin',
            age: 20,
            adress: 'pardes-hana',
            email: 'yarin@gmail.com'
        })
        if (validator.isEmail('yarin@gmail.com')) {
            console.log("good");
        } else {
            throw new Error('Not a valid email instead');
        }
        console.log('success!')
    } catch (err) {
        console.error(err)
    }
}

let obj = {
    name: "yarin"
}
console.log(_.get(obj, "name", "no"));

example();