import React from 'react';

const Blogs = () => {
    return (
        <div className=' shadow qna py-5 px-5 lg:px-20 flex flex-col gap-10'>
            <h1 className='text-4xl border-b-4  border-blue-400 py-3 mb-10'>Frequently Asked Questions</h1>

            <div>
                <h1 className='text-2xl font bold text-neutral py-3'>How will you improve the performance of a React Application?
                </h1>
                <p className='w-3/4'>
                A React application may be made more efficient in a variety of ways. As an example, wherever possible, keep state of components local. Memorying React components to avoid unwanted re-renders is also a good strategy. In addition, dynamic imports in React allow for code-splitting. React's virtualization of windows or lists. In React, photos may be loaded in a 'lazy' manner. Making Use of Structural Consistency. As many chunk files as you'd want
                </p>
            </div>

            <div>
                <h1 className='text-2xl font bold text-neutral py-3'>What are the different ways to manage a state in a React application?

                </h1>
                <p className='w-3/4'>
                The four major forms of state you need to keep track of in your React projects are: Local state, Global state, Server state, and URL state. A component's local state refers to the data it keeps. Managing local state in React is often accomplished via the usage of the useState hook. Additionally, for both local and global states, useReducer is an option that may be implemented in any way. Under the hood, it is quite similar to useState, except that it takes a reducer instead of a starting state. You'd need local state for things like showing or hiding a modal component and keeping track of input data for forms that have been disabled. Data that is shared across different components is referred to as global state. When data has to be accessed and updated across many parts of our program, we need to use global state. Authenticated user state is a frequent example of a global state. In order to get or update data from an external server, you must handle a variety of states, including loading and error state.
                </p>
            </div>


            <div>
                <h1 className='text-2xl font bold text-neutral py-3'>What is a unit test? Why should write unit tests?
                </h1>
                <p className='w-3/4'>
                Unit tests are typically automated tests written and run by software developers to ensure that a section of an application meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.
                </p>
            </div>


            <div>
                <h1 className='text-2xl font bold text-neutral py-3'>How does prototypical inheritance work?
                </h1>
                <p className='w-3/4'>
                The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.
                </p>
            </div>


            <div>
                <h1 className='text-2xl font bold text-neutral py-3'>Why you do not set the state directly in React?
                </h1>
                <p className='w-3/4'>
                Using setState allows you to move a state from one component to another without having to change the original. SetState is required for integrating an item into the current state (). Components that are stateful or stateless cannot be known by their parents and children, and they should not be concerned about whether or not they are defined as functions or classes. Any React component may have a state attached to it. A user action or a system event may cause the state of a component to change. If the component's state changes, React re-renders it. Before changing the state's value, it is important to create an initial state setup. To make changes to the object's current state, we use the setState() method. You may be sure that the component's current state has been maintained by requesting a re-render. If a synchronous call is performed to change an object's state, it may not be updated on the console at the right time.
                </p>
            </div>


        </div>
    );
};

export default Blogs;