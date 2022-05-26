import React from 'react';

const Answer = (props) => {
    return (
        <div>
            <div>
                <h2><b>How React Works?</b></h2>

                <p>
                    React is a free and open source front-end javascript library or javascript based UI development library. Its using by mobile and web application development and create by Facebook, React code snippets used for UI called components. It design simple views for each state in your application update and render just the right component when your data change virtual DOM, components and props, state management, React render, React keys, Navigation are called to data change using by react components. Used react to build their applications. React allows nesting components in between others to create complex functions without bloating the code. As each component has has its own controls its easy to maintain them. Its important to note that ReactJs is not a javascript frame work. Thats because its only responsible for rendering the components of an applications view layer.
                </p>


                <h2><b>Difference with Props and State?</b></h2>

                <ul>
                    <b>Props:</b>
                    <li>Props are used to pass data from one component to another.</li>
                    <li>Props are read only.</li>
                    <li>Props are immutable.</li>
                    <li>Props are variable passed to its by parent component.</li>
                    <li>Props are external and controlled by whatever renders the component.</li>
                    <li>props changed can be parent component.</li>
                    <li>Use this to pass data child component.</li>
                    <li>Have better performance than State.</li>
                </ul>
                <ul>
                    <b>State:</b>
                    <li>State is local data storage that is local to the component only and can't be passed to other components.</li>
                    <li>State change can be asynchronous.</li>
                    <li>State is mutable.</li>
                    <li>State variables are directly initialized and manage by the component.</li>
                    <li>State is the internal and controlled by the React component itself.</li>
                    <li>It can not be changed parent component.</li>
                    <li>State should not be accessed from child component.</li>
                    <li>State worse performance than props</li>
                </ul>
            </div>
        </div>
    );
};

export default Answer;