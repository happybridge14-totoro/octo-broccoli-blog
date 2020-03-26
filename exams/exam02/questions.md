# Exam 2 Questions

* Answers should be roughly 2-5 sentences, and in your own words.  
* Some questions ask for a code sample - keep them short and to the point.
* Be sure to be clear - be careful not to use vague pronouns like "it" if I can't be completely sure what "it" is.
* I cannot assume knowledge you don't demonstrate, so be clear and explicit.

## Q1: The first rule I've given about REST services is that the URL should represent a resource.  What does that mean?  Give an example where a url DOES not represent a resource, then describe how to modify it so that it does.
The target of an HTTP request is called a "resource". So it means that the URL should be semantic that represents a "resource" to interact with.

Bad example: `/deleteStudent`.
`deleteStudent` It is not a resource, it is more like an action.

Good example: `/student/:id` with `delete` method.

`student/:id` is the specific resource, and we use `delete` method to operate this resource.

## Q2: If the service returns the username as a plain text string, what is wrong with the below and what would fix it? (Assume the service works without error)
```javascript
  const username = fetch('/username');
  console.log(`user is named ${username}`);
```  
The username here is a Promise, not the result of the fetching data.
The correct usage should be:
```javascript
fetch('/username').then(response => {
  if (response.ok) {
    return response.text();
  } else {
    throw Error(response.statusText);
  }
}).then(username=>{
  console.log(`user is named ${username}`);
}).catch(error => {
  console.error(error);
});
```

## Q3: What does it mean to "store your state in the DOM"?  Why shouldn't you do this?
`Store your state in the DOM` means that we store the data or information in DOM nodes.
It's bad to do so with the following two reasons:
1. It is not separation of concerns. Even the codes work, it's hard to maintain and extend. HTML should do nothing with service calls.
1. The DOM nodes are open to everyone. Which means that everyone else can operate the nodes. It might be changed by other codes unexpectly.

## Q4: Explain the differences between a multiple-page-web application and single-page-web application.  Be sure to fully demonstrate your understanding.
Multiple-page-web: We use different URLs to display different pages.
For example:
* `/login`: Display login.html
* `/items`: Display all items in items.html
* `/searching`: Display searching page in seaching.html

Single-page-web-application is that we display different content through DOM operation and AJAX calls. We only have one html file, and all other pages will be displayed and controled by javascript.
For example:
* `http://localhost:3000`:  Display index.html
We call "/items" using "GET" method, if the status code of the response is 401, we do the following operation:
```javascript
const stage = document.getElementById("#stage");
stage.innerHTML = "";
const loginPageTemplate = document.getElementById("#login");
const loginPage = loginPageTemplate.content.cloneNode(true);
stage.appendChild(loginPage);
```
If we have already logged in the response code is 200, we can do the following:
```javascript
const stage = document.getElementById("#stage");
stage.innerHTML = "";
const itemPageTemplate = document.getElementById("#item");
const itemPage = itemPageTemplate.content.cloneNode(true);
stage.appendChild(loginPage);
```
We don't refresh the page, we just partially update some DOM nodes

## Q5: What is Progressive Enhancement?  What is the difference in an SPA that uses Progressive Enhancement compared to an SPA that doesn't use Progressive Enhancement?
Progressive enhancement is a method allows Web developers to concentrate on webpage content first.
The SPA using Progressive Enhancement is the all the content/elements are already there, we can:
1. Working without JS
1. Good for SEO (Search Engine Optimization)
1. Good for accessiblity and various devices
1. Great for ensuring backend is secure
1. Fairly rare due to extra effort 

## Q6: Explain how a REST service is or is not similar to a dynamic asset.
Similar:
* If there is any code change, we need to restart the server

Different:
* Dynamic asset return HTML intended for the browser, or CSS, JS, images and media for other assests
* Service endpoints can return HTML fragments, text, JSON, XML, YAML, etc

## Q7: Give an example of a piece of information you should not store in a cookie, and why you should not store it that way.
Example: password
Cookies are stored on clients and they are potentially accessible to anyone. It is dangerous to store sensible information in cookies. The worst case is that you closed your browser, but anyone else who open the browser can see all your personal secret information through cookies.

## Q8: Explain why it is useful to separate a function that fetches data from the what you do with that data
Separate the logic from the view actions. When the service call changes, logic changes or the view changes, it won't affect other part. This is the advantage of loose coupling.

## Q9: Explain why try/catch is useless when dealing with asynchronous errors (assume you aren't using async/await)
Because the try/catch flow finished before resovle/reject functions are called. If something in try scope, like a promise is correctly returned, than the try/catch flow is finished. The later happening errors won't be caught by the catch block.

## Q10: Is separation of concerns a front end issue, a server-side issue, or both?  Describe an example the demonstrates your answer.
Both.
Frontend example:

data.js
```javascript
const items = {};
const getItems = () => {
  return Promise.resolve(items);
};
export default getItems;
```
item.js
```javascript
import getItems from "./data.js";
const render = () => {
  getItems().then((items) => {
    return items.map((item)=> {
      return `<div>{item}</div>`;
    }).join("");
  });
}
```
If we need to use service call to get the data, we don't need to involve item.js and care about rending logic. What we should do is to modify data.js file

data.js
```javascript
const URL = "/items";
const getItems = () => {
  return fetch(URL).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      //error handling
    }
  });
};
```
Backend example:

server.js
```javascript
const {getItems} = require("./items");
app.get("/items", (req, res) => {
  getItems.then((items) => {
    res.json(items);
  });
});
```
items.js
```javascript
const items = {};
const getItems = () => {
  return Promise.resolve(items);
};
module.exports = {getItems};
```
Similar to the client side codes, if we are getting data from data base like SQL server, we don't need to change the router codes. We just need to change the method to get the items

items.js
```javascript
// Need some extra steps/codes, like connect to sql server, etc..
const items = {};
const getItems = () => {
  const requrest = new sql.Request();
  return new Promise((resolve, reject) => {
    request.query('select * from items', (err, recordset) => {
      resolve(recordset);
    });
  });
};
module.exports = {getItems};
```