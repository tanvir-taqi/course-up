import React, { useEffect } from 'react';

const Blog = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
      })
    return (
        <div className='py-32'>
            <h1 className="text-center text-3xl font-semibold"> Blogs </h1>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5 md:px-20 py-20">
                <div className='md:p-6 border rounded-tl-3xl rounded-bl-3xl rounded-br-3xl border-slate-700'>
                    <hi className="py-4  text-xl font-bold">what is `cors`?</hi>
                    <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
                </div>
                <div className='md:p-6 border rounded-tl-3xl rounded-bl-3xl rounded-br-3xl border-slate-700'>
                    <hi className="py-4  text-xl font-bold">Why are you using `firebase`? What other options do you have to implement authentication?</hi>
                    <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.There are also several free testing features linked with Firebase where you can test and preview your project free of cost. Withal, after the certain limit of use of services or database memory consumption, you would have to pick a paid plan for Firebase.It has Many more features like real time database,google analytics,free hosting etc. "Auth0" , "Keycloak","MongoDB" , "Passport" , "Okta" etc are the best alternatives to firebase for authentication.</p>
                </div>
                <div className='md:p-6 border rounded-tl-3xl rounded-bl-3xl rounded-br-3xl border-slate-700'>
                    <hi className="py-4  text-xl font-bold">How does the private route work?</hi>
                    <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.</p>
                </div>
                <div className='md:p-6 border rounded-tl-3xl rounded-bl-3xl rounded-br-3xl border-slate-700'>
                    <hi className="py-4  text-xl font-bold">What is Node? How does Node work?</hi>
                    <p>Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.Node.js takes a different approach. It runs a single-threaded event loop registered with the system to handle connections, and each new connection causes a JavaScript callback function to fire. The callback function can handle requests with non-blocking I/O calls, and if necessary can spawn threads from a pool to execute blocking or CPU-intensive operations and to load-balance across CPU cores. Node’s approach to scaling with callback functions requires less memory to handle more connections than most competitive architectures that scale with threads, including Apache HTTP Server, the various Java application servers, IIS and ASP.NET, and Ruby on Rails.</p>
                </div>

            </div>
            
        </div>
    );
};

export default Blog;