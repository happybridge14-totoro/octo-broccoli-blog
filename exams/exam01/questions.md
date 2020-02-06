# Exam 1 Questions

* Answers should be roughly 2-5 sentences, and in your own words.  
* Some questions ask for a code sample - keep them short and to the point.
* Be sure to be clear - be careful not to use vague pronouns like "it" if I can't be completely sure what "it" is.
* I cannot assume knowledge you don't demonstrate, so be clear and explicit.

## Q: What is the difference between a dynamic asset and a static asset?
* A dynamic asset is something loaded in memory. Usually, the original file is loaded only once, stored as a param, then we make changes params. If we want to change original asset, we need to restart the server.
* A static asset is the asset loaded only when we request the asset, and we don't store them in memory. Thus, when the asset changes, we don't need to restart the server. When the client request the asset (cache issues are not considered here), the server will always return the latest asset.

## Q: What is the difference between a relative and absolute file path in an href?  What is the "webserver root/document root" and how do absolute/relative paths relate to this document root?


## Q: What is the difference between server-side and client-side JS?
* Server-side JS is the JavaScript parsed and executed on the server. It is not visible for client users. Usually, server-side modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams
* Client-side JS is the JavaScript parsed and executed by the browser. It includes Document Object Model and Browser Object Model, doesn't include any I/O

## Q: What are the differences between `var`, `const`, and `let`, and when should you use each of them?
* `var` is the only statement declares a variable before ES6 standard. Now I will use them when I want to do some simple test in browser Console. But never use them in the project again.
* `const` declares a block scope local variable. The value of a constant can't be changed through reassignment, and it can't be redeclared. (Not means that value can't be changed at all)
* `let` declares a block scope local variable. It can be reassignment, but can't be redeclared within the same function or block scope.

## Q: What are the 4 ways to create inheritance in JS? (no examples needed, just a sentence describing each)

## Q: Give a short code demonstration of 1 way to create JS inheritance to __inherit__ a method named "purr".

## Q: Give a short code demonstration of a different way to create JS inheritance to __inherit__ a method named "hiss".

## Q: Explain what a callback is, and give an example.

## Q: What are the words that would correctly fill in the space in this sentence:

"If a function using `this` is `_______`, then `this` will not have the expected implicit value"

## Q: In CSS, what does it mean "You shouldn't name your classes after what they look like"?   Why?  Give an example of a class that is well named and a class that is poorly named.

