import React from 'react';

const Blog = () => {
    return (
        <div className='w-11/12 mx-auto my-10'>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-5">
                <div className="collapse-title text-xl font-medium">
                    Difference between SQL and NoSQL
                </div>
                <div className="collapse-content">
                    <ul className='list-disc px-10'>
                        <li>SQL databases are relational, NoSQL databases are non-relational.</li>
                        <li>SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</li>
                        <li>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
                        <li>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</li>
                        <li>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</li>
                    </ul>
                </div>
            </div>
            <div tabIndex={1} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-5">
                <div className="collapse-title text-xl font-medium">
                    What is JWT, and how does it work?
                </div>
                <div className="collapse-content">
                    <p>JSON Web Token is an open industry standard used to share information between two entities, usually a client (like your app’s frontend) and a server (your app’s backend).

                        They contain JSON objects which have the information that needs to be shared. Each JWT is also signed using cryptography (hashing) to ensure that the JSON contents (also known as JWT claims) cannot be altered by the client or a malicious party.</p>
                </div>
            </div>
            <div tabIndex={2} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-5">
                <div className="collapse-title text-xl font-medium">
                    What is the difference between javascript and NodeJS?
                </div>
                <div className="collapse-content">
                    <p>JavaScript is a high-level programming language that makes our web pages and web applications dynamic and interactive by giving them the ability to think and act.</p> <br />
                    <p>Node.js is a runtime environment for JavaScript built on Google's v8 engine whose main purpose is to run JavaScript on the server and hence JavaScript can be executed outside of the browser.</p>
                </div>
            </div>
            <div tabIndex={3} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How does NodeJS handle multiple requests at the same time?
                </div>
                <div className="collapse-content">
                    <p>When a new request comes in, NodeJS checks if it requires any blocking IO operations, if not, the EventLoop processes it and sends the response back to the client directly. If yes, then the request is forwarded to the thread manager, which then based on an algorithm, picks up an idle thread from the pool and lets it process the request. After completion of the request processing operation, the thread, returns the response back to the EventLoop which is then forwarded to the client.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;