class HelloWorld extends React.Component {
    render() {
      return <h1 title={this.props.title} id={this.props.id}>
        Hello {this.props.frameworkName} world!!!
      </h1>
    }
  }