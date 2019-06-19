class HelloWorld extends React.Component {
    render(){
        if (this.props.user.login)
            return <a href="/logout"> Logout!</a>
        else
            return <a href="/login">Login!</a>
    }
}