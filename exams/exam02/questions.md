# Exam 2 Questions

* Answers should be roughly 2-5 sentences, and in your own words.  
* Some questions ask for a code sample - keep them short and to the point.
* Be sure to be clear - be careful not to use vague pronouns like "it" if I can't be completely sure what "it" is.
* I cannot assume knowledge you don't demonstrate, so be clear and explicit.

## Q1: The first rule I've given about REST services is that the URL should represent a resource.  What does that mean?  Give an example where a url DOES not represent a resource, then describe how to modify it so that it does.
The target of an HTTP request is called a "resource". So it means that the URL should be semantic that represents a "resource" to interact with.
Bad example: `/deleteStudent`
`deleteStudent` It is not a resource, it is more like an action
Good example: `/student/:id` with `delete` method
`student/:id` is the specific resource, and we use `delete` method to operate this resource

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

## Q4: Explain the differences between a multiple-page-web application and single-page-web application.  Be sure to fully demonstrate your understanding.

## Q5: What is Progressive Enhancement?  What is the difference in an SPA that uses Progressive Enhancement compared to an SPA that doesn't use Progressive Enhancement?

## Q6: Explain how a REST service is or is not similar to a dynamic asset.

## Q7: Give an example of a piece of information you should not store in a cookie, and why you should not store it that way.

## Q8: Explain why it is useful to separate a function that fetches data from the what you do with that data
Separate the logic from the view actions. When the logic changes or the view changes, it won't affect other part. This is the advantage of loose coupling.

## Q9: Explain why try/catch is useless when dealing with asynchronous errors (assume you aren't using async/await)
Because the try/catch flow finished before resovle/reject functions are called. If something in try scope, like a promise is correctly returned, than the try/catch flow is finished. The later happening errors won't be caught by the catch block.

## Q10: Is separation of concerns a front end issue, a server-side issue, or both?  Describe an example the demonstrates your answer.

