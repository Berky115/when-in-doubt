
/*

A stateless component is a component without any state. Intended ideally to render. 

Common practice is to have as many statelss components as possible. Less to track makes everyone happy :)

You can write statelss componenets as you would a traditional one, with NO state. Alternatively you can you use the shorthand below
*/

class HelloWorld extends React.Component {
    render() {
        return <h1 {...this.props}> Hello {this.props.name}</h1>
    }
}

// recommended shorthand

const HelloWorldShortHand = function(props) {
    return <h1 {...props}> Hello {props.name }</h1>
}

// ES6 syntax is supported as well

const HelloWorldShortHandES6 = (props) => {
    return <h1 {...props}> Hello { props.name }</h1>
}