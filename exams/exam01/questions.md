# Exam 1 Questions

* Answers should be roughly 2-5 sentences, and in your own words.  
* Some questions ask for a code sample - keep them short and to the point.
* Be sure to be clear - be careful not to use vague pronouns like "it" if I can't be completely sure what "it" is.
* I cannot assume knowledge you don't demonstrate, so be clear and explicit.

## Q: What is the difference between a dynamic asset and a static asset?
* A dynamic asset is something loaded in memory. Usually, the original file is loaded only once, stored as a param, then we make changes on params. If we want to change the original asset, we need to restart the server.
* A static asset is the asset loaded only when we request the asset, and we don't store them in memory. Thus, when the asset changes, we don't need to restart the server. When the client request the asset (cache issues are not considered here), the server will always return the latest asset.

## Q: What is the difference between a relative and absolute file path in an href?  What is the "webserver root/document root" and how do absolute/relative paths relate to this document root?
* A relative file path doesn't start with "/". The browser will attempt to find the document in a sub-directory of the one containing the current resource.
* An absolute file path starts with full url, or implicit protocol, or implicit domain name. The browser will fetch that resource from the top root of the server.
* The "webserver root/document root" is the root of the directory tree of files it can offer access to
* Nowadays, an absolute/relative path has nothing to do with physical paths. Server can use router to fully control the paths.

## Q: What is the difference between server-side and client-side JS?
* Server-side JS is the JavaScript parsed and executed on the server. It is not visible for client users. Usually, server-side modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams
* Client-side JS is the JavaScript parsed and executed by the browser. It includes Document Object Model and Browser Object Model, doesn't include any I/O

## Q: What are the differences between `var`, `const`, and `let`, and when should you use each of them?
* `var` is the only statement declares a variable before ES6 standard. Now I will use them when I want to do some simple test in browser Console. But I never use them in the project again.
* `const` declares a block scope local variable. The value of a constant can't be changed through reassignment, and it can't be redeclared. (Not means that value can't be changed at all) It's my first choise to declare a variable, unless I want to reassignment the variable.
* `let` declares a block scope local variable. It can be reassignment, but can't be redeclared within the same function or block scope. I'll use them if I can't use const.

## Q: What are the 4 ways to create inheritance in JS? (no examples needed, just a sentence describing each)
1. Use constructor function
1. Use Object.create method
1. Use ES6 classes (grammer sugar)
1. Brute force prototype assignment

## Q: Give a short code demonstration of 1 way to create JS inheritance to __inherit__ a method named "purr".
```JavaScript
class Animal {
    constructor(name) {
        this.name = name;
    }
    purr = () => {
        //Do something
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
}
const maru = new Cat("Maru);
maru.purr();
```

## Q: Give a short code demonstration of a different way to create JS inheritance to __inherit__ a method named "hiss".
```JavaScript
const Person = function(name) {
    this.name = name;
};
Person.prototype.hiss = () => {
    //Do something
};
const AngryMan = function(name) {
    Person.call(this, name);
};
AngryMan.prototype = Object.create(Person.prototype);
const tom = new AngryMan("Tom");
tom.hiss();
```

## Q: Explain what a callback is, and give an example.
* In JavaScript, functions are first-class objects. So callback is the function passed to another function, and wish to be executed when the other function finished.
```JavaScript
const cookiePaser = (req, res, next) => {
    // Do something
    return next();
};
```
* Here, next is a callback function, although it's name is not "callback".
* And thanks for `Promise`, release us from callback hell.


## Q: What are the words that would correctly fill in the space in this sentence:
"If a function using `this` is `an` ~~fat~~ `arrow function`, then `this` will not have the expected implicit value"

## Q: In CSS, what does it mean "You shouldn't name your classes after what they look like"?   Why?  Give an example of a class that is well named and a class that is poorly named.
* It means that the class name should be semantic. It should represent the meaning of the content, not the attribute of the content.
* Here is an example: 
```html
<style type="text/css">
    .black-text-color {
        color: black;
    }
    .white-background {
        background-color: white;
    }
</style>
<article>
    <h1> I'm title</h1>
    <section>
        <div class="black-text-color white-background">
            hello world
        <div>
        <div class="black-text-color white-background">
            hello world
        <div>
        <div class="black-text-color white-background">
            hello world
        <div>
        ...
    </section>
```
Than one day, the product manager comes and says "Black and white is out of fashion, change it to 
white text color and purple background. I'll give you the color, come on!"

OK, I've a lot of bugs to fix, so just meet the requirement in 5 minutes.
```html
<style type="text/css">
    .black-text-color {
        color: rgba(255, 255, 255, 0.8);
    }
    .white-background {
        background-color: rgba(128, 0, 128, 0.5);
    }
</style>
```
The CSS is no longer maintainable.