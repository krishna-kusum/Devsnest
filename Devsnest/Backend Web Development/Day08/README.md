# Express Middleware

- Functions that execute during the lifecycle of a request to the Express server.
- They executed before the controller function in get, post, etc. operations.
- Controller function is a callback function.
- next is the most essential parameter for middleware to function.
- Middleware functions are not responsible for giving responses(res).
- Logger Middleware is used to keep a logs ,e.g.number of times a function is executed, api is called

> Response is given to the middleware when , say, the middleware checks the identity of the admin.

* Query params are used for get requests, to get something from the backend.
* Body is used to send(post) data to the backend using post requests. 

> Middleware is most commonly used for authentication
- token is processed by middleware for auth.
- token received is destructured and ,say, password is retrieved from the object( here req.body) 
