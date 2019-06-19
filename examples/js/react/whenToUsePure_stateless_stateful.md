## How do you decide, how do you choose between these three based on the purpose/size/props/behaviour of our components?

Extending from React.PureComponent or from React.Component with a custom shouldComponentUpdate method have performance implications. Using stateless functional components is an "architectural" choice and doesn't have any performance benefits out of the box (yet).

For simple, presentational-only components that need to be easily reused, prefer stateless functional components. This way you're sure they are decoupled from the actual app logic, that they are dead-easy to test and that they don't have unexpected side effects. The exception is if for some reason you have a lot of them or if you really need to optimise their render method (as you can't define shouldComponentUpdate for a stateless functional component).

Extend PureComponent if you know your output depends on simple props/state ("simple" meaning no nested data structures, as PureComponent performs a shallow compare) AND you need/can get some performance improvements.

Extend Component and implement your own shouldComponentUpdate if you need some performance gains by performing custom comparison logic between next/current props and state. For example, you can quickly perform a deep comparison using lodash#isEqual:

class MyComponent extends Component {
    shouldComponentUpdate (nextProps, nextState) {
        return !_.isEqual(this.props, nextProps) || !_.isEqual(this.state, nextState);
    }
}
Also, implementing your own shouldComponentUpdate or extending from PureComponent are optimizations, and as usual you should start looking into that only if you have performance issues (avoid premature optimizations). As a rule of thumb, I always try to do these optimisations after the application is in a working state, with most of the features already implemented. It's a lot easier to focus on performance problems when they actually get in the way.

More details
Functional stateless components:

These are defined just using a function. Since there's no internal state for a stateless component, the output (what's rendered) only depends on the props given as input to this function.

Pros:

Simplest possible way of defining a component in React. If you don't need to manage any state, why bother with classes and inheritance? One of the main differences between a function and a class is that with the function you are sure the output depends only on the input (not on any history of the previous executions).

Ideally in your app you should aim to have as many stateless components as possible, because that normally means you moved your logic outside of the view layer and moved it to something like redux, which means you can test your real logic without having to render anything (much easier to test, more reusable, etc.).

Cons:

No lifecycle methods. You don't have a way to define componentDidMount and other friends. Normally you do that within a parent component higher in the hierarchy so you can turn all the children into stateless ones.

No way to manually control when a re-render is needed, since you can't define shouldComponentUpdate. A re-render happens every time the component receives new props (no way to shallow compare, etc.). In the future, React could automatically optimise stateless components, for now there's some libraries you can use. Since stateless components are just functions, basically it's the classic problem of "function memoization".

Refs are not supported: https://github.com/facebook/react/issues/4936

A component that extends PureComponent class VS A normal component that extends Component class:

React used to have a PureRenderMixin you could attach to a class defined using React.createClass syntax. The mixin would simply define a shouldComponentUpdate performing a shallow comparison between the next props and the next state to check if anything there changed. If nothing changes, then there's no need to perform a re-render.

If you want to use the ES6 syntax, you can't use mixins. So for convenience React introduced a PureComponent class you can inherit from instead of using Component. PureComponent just implements shouldComponentUpdate in the same way of the PureRendererMixin. It's mostly a convenience thing so you don't have to implement it yourself, as a shallow comparison between current/next state and props is probably the most common scenario that can give you some quick performance wins.

Example:

class UserAvatar extends Component {
    render() {
       return <div><img src={this.props.imageUrl} /> {{ this.props.username }} </div>
    }
} 
As you can see the output depends on props.imageUrl and props.username. If in a parent component you render <UserAvatar username="fabio" imageUrl="http://foo.com/fabio.jpg" /> with the same props, React would call render every time, even if the output would be exactly the same. Remember though that React implements dom diffing, so the DOM would not be actually updated. Still, performing the dom diffing can be expensive, so in this scenario it would be a waste.

If the UserAvatar component extends PureComponent instead, a shallow compare is performed. And because props and nextProps are the same, render will not be called at all.

Notes on the definition of "pure" in React:

In general, a "pure function" is a function that evaluates always to the same result given the same input. The output (for React, that's what is returned by the render method) doesn't depend on any history/state and it doesn't have any side-effects (operations that change the "world" outside of the function).

In React, stateless components are not necessarily pure components according to the definition above if you call "stateless" a component that never calls this.setState and that doesn't use this.state.

In fact, in a PureComponent, you can still perform side-effects during lifecycle methods. For example you could send an ajax request inside componentDidMount or you could perform some DOM calculation to dynamically adjust the height of a div within render.

The "Dumb components" definition has a more "practical" meaning (at least in my understanding): a dumb component "gets told" what to do by a parent component via props, and doesn't know how to do things but uses props callbacks instead.

Example of a "smart" AvatarComponent:

class AvatarComponent extends Component {
    expandAvatar () {
        this.setState({ loading: true });
        sendAjaxRequest(...).then(() => {
            this.setState({ loading: false });
        });
    }        

    render () {
        <div onClick={this.expandAvatar}>
            <img src={this.props.username} />
        </div>
    }
}
Example of a "dumb" AvatarComponent:

class AvatarComponent extends Component {
    render () {
        <div onClick={this.props.onExpandAvatar}>
            {this.props.loading && <div className="spinner" />}
            <img src={this.props.username} />
        </div>
    }
}
In the end I would say that "dumb", "stateless" and "pure" are quite different concepts that can sometimes overlap, but not necessarily, depending mostly on your use case.