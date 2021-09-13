# EVENT LOOP IN JS


## **Web APIs**
>DOM
>SET TIMEOUT
>FETCH

## EVENT LOOP
**[Event loop Execution](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)**

>CALL STACK
>WEB APIs
>CALLBACK QUEUE
>EVENT LOOP 
>CALL STACK, and so on...

* call stack first executes GEC(Global Execution Context) before handing async calls 
* ORDER of Execution (async) :- webapis -> callback queue ->event loop -> call stack
* can only push function from callback queue to stack when call stack is empty

### fetch

>`fetch(``).then().catch()`

*`fetch` sends output in the form of microtask.
*Microtask is a short function that handles promises.
*Microtask has higher priority than event loop.
*Microtask is executed first before returning control back to event loop.

### Microtask Queue and Starvation

>**Microtask Queue**

* A queue that handles microtasks
* Has higher priority than callback queue
* function `a` in Microtask queue is executed before function `b` in Callback queue.
* Task executed only when call stack is empty


>**Starvation**

* It happens when there is promise microtask scheduling at Microtask Queue
* Async calls of lower priority are not executed when microtasks are called continuously

