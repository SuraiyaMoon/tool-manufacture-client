import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Blogs = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <h3 className='text-2xl text-primary font-semibold'>Welcome to <span className='text-secondary'>{user.displayName}</span> 's Blog</h3>
            <article className="card my-6 mx-12 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">How you will improve the performance of a react app?</h2>

                    <ul>
                        <p>Some Tips for  Optimization  of React Apps</p>
                        <li>1.Using Immutable Data Structures</li>
                        <li>2.Use Function/Stateless Components and React.PureComponent</li>
                        <li>3. Use React.Fragments to Avoid Additional HTML Element Wrappers</li>
                        <li>4.Avoid using Index as Key for map.</li>
                        <li>5.Use webpack.Webpack v4+ will minify your code by default in production mode.</li>
                    </ul>
                </div>
            </article>
            <article className="card mx-12 bg-base-100 shadow-xl my-6">
                <div className="card-body">
                    <h2 className="card-title">What are different ways to manage a state in a react app?</h2>

                    <ul>
                        <p>There are many way to handle state in react app.</p>
                        <li>1.useState()</li>
                        <li>2.UseContextAPI</li>
                        <li>3.useReducer()</li>
                    </ul>
                </div>
            </article>
            <article className="card mx-12 bg-base-100 shadow-xl my-6">
                <div className="card-body">
                    <h2 className="card-title">Why you don't set the state directly in react app?</h2>

                    <ul>
                        When any change happen in any react app ,react compare all the changes with his recorded old virtual DOM.If anyone change state directly ,she/he will not able see the changes until reload the app.
                    </ul>
                </div>
            </article>
            <article className="card mx-12 bg-base-100 shadow-xl my-6">
                <div className="card-body">
                    <h2 className="card-title">What is unit test? why should you write unit test?</h2>

                    <ul>

                    </ul>
                </div>
            </article>



        </div>
    );
};

export default Blogs;