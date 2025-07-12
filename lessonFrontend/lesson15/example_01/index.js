
//JSON
//JavaScript Object Notation
//JSON is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate.
//JSON is language-independent, but it uses conventions that are familiar to programmers of the C family of languages, which includes C, C++, C#, Java, JavaScript, Perl, Python, and many others.
//JSON is often used to transmit data between a server and a web application as an alternative to XML.
//JSON is a text format that is completely language independent but uses conventions that are familiar to programmers of the C family of languages, which includes C, C++, C#, Java, JavaScript, Perl, Python, and many others.

const user = {
    name: "join",
    email: "john@gmail.com",
    age: 18,
};

//основной формат передачи и хранения информации - это JSON

const userAsJSONString = JSON.stringify(user);
console.log(userAsJSONString); // {"name":"join","age":18}

const userFromJson = JSON.parse(userAsJSONString);
console.log(userFromJson);

//http://mocki.io/fake-json-api