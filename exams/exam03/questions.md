# Exam 3 Questions

* Answers should be roughly 2-5 sentences, and in your own words.  
* Some questions ask for a code sample - keep them short and to the point.
* Be sure to be clear - be careful not to use vague pronouns like "it" if I can't be completely sure what "it" is.
* I cannot assume knowledge you don't demonstrate, so be clear and explicit.

* NOTE: Because there is no coding portion to Exam 3, each of these questions is worth more to your grade than the questions on previous Exams!  Be sure to have answers you are confident shows your understanding!

## Q1: I have said that React JSX components are like functions and follow many of the same best practices.  Give at least 2 such best practices that are good for both JS functions and JSX Components.  (Be substantive!)
* Readability
* Separation of Concerns
* Avoid side effect

If we compare JSX components with pure function, they are similar in many places. Given the same input/props, always get the same result. (Unless you use `useEffect` to get something). The input/props are readonly, we are not supposed to change these values directly. All params declared by `useState()` is just like temporary variables, they don't have side effect and will be used within the function/component only. 

## Q2: I have said that using Progressive Enhancement (supporting both MPA and SPA) is best, but many places don't do so because of the effort involved.  What is at least one major reason not to use SPA alone?
* SPA along is not good for SEO(search engine optimization)
* SPA usually is not readable

## Q3: The "proxy" setting in your package.json is required for the create-react-app dev server to call a local service, but not if you are calling a service that will always be on a different domain.  Explain what happens (in terms of network traffic) when your dev server is running on localhost port 3000 and the page makes a call to `/service` when you have "proxy" set to `http://localhost:4000` and a server running on localhost port 4000 that has the `/service` service.  hint: This should list and describe multiple request/response steps.
* When having a service call, the server running on port 3000 received the request. This server will try to find out whether it is a call to get static react files or normal service call which it hasn't. If the call is not going to get the static files, it will send the request to port 4000, get the response and pipe the response back to the client.

## Q4: Follow-up: Using the above scenario, list and describe what the network calls are like after you run `npm run build` and are only running all of your content on localhost port 4000 when your JSX makes a call to `/service`
* My understanding of "are only running all of your content" is running port 4000 only. In this case, the client call service on port 4000 directly. All static files and services are called through port 4000.

## Q5: I have said that you can only pass data "down" in React, not "up".  What does that mean?  Give simple code sample if that makes it easier to describe.
* Parent component has the right to pass the data to the child component, but child component can't directly pass the data to the parent components. Because parent component knows exactly what child component is, but child components have no idea how many and which parent component is using it. They can pass the necessary data back through other methods, like provider, or dispatch events.
Example: see below question

## Q6: Follow-up: If you can't pass data "up" the component tree, how can anything that is "down" change data?  Give simple code samples if that makes it easier to describe.
* Parent component pass callback to child component, parent component setup a context, or parent listener to specific events.
```Javascript
const Login = memo(({refreshPageWithUsername}) => {
    const [username, setUsername] = useState("");
    const keyPressHandler = useCallback((event)=>{
        const value = event.target.value;
        setUsername(value);
    }, [setUsername]);
    const signin = useCallback((event) => {
        event.preventDefault();
        api.post(LOGIN_IN_URL, {username}).then(()=>{
            setUsername("");
            refreshPageWithUsername(username);
        }).catch((response) => {
            setUsername("");
            if (response.status === STATUS_CODES.UNAUTHORIZED || response.status === STATUS_CODES.FORBIDDEN) {
                dispatch(EVENTS.DISPLAY_ERROR, ERROR_TYPE.SESSION_ERROR);
            } else if (response.status === STATUS_CODES.NETWORK_ERROR) {
                dispatch(EVENTS.DISPLAY_ERROR, ERROR_TYPE.NETWORK_ERROR);
            }
        });
    }, [username, setUsername]);
    return (
        <div className="login-page">
            <label>
                User Name:
                <input id="user-name" type="text" value={username} onChange={keyPressHandler} minLength={1}/>
            </label>
            <button className="signin" onClick={signin}>submit</button>
        </div>
    );
});
export default Login; 
```

## Q7: Imagine you have a collection of student records, with each having a student id, a name, and an address. (an example of one item in the collection would be: { id: "654321", name: "Bao", address: "123 Main Street" })  Imagine you also have collection of steps to create a pizza, with each step having an ingredient, a quantity, and an instruction. (an example of one item in the collection would be the object { qty: "1 cup", ingredient: "shredded cheese", instructions: "sprinkle over pizza" })

Give a code sample where each collection is shown with at least one more element (2+ students for the first collection, 2+ pizza-making steps).  Make sure you make proper use of arrays and objects.  Explain why you've chosen each way of making a collection (e.g. Why you use an array for one or both, or why you use an object for one or both)

* In order to search student fast, we use id as key and store student in an object. We don't care about the order of which student data is put first.
On the contrary, we do care about the order of steps to make a pizza. So an array is a better data structure to store the steps.

## Q8: How does inheritance in JS relate to a prototype?  Give a simple code sample if it helps explain.
* JS use prototype chain to inherit methods from parent object.
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
Here, `tom.hiss()` is calling method from prototype.

## Q9: What is wrong about this code sample? `if( !username || username == undefined) { ` be sure to explain why that is wrong.
* The second condition is useless. The first condition contains second condition.

## Q10: What is decoupling?  What is an example of decoupling in a React app?
* Every changes on each parts won't affect others.
Example: Parent component only care about which child component to display, while child component handle and hide the detail of the behavior of UI components, like the behavior of input or radio box. Parent component provide context can doesn't care whethere child componentns use it or not.

