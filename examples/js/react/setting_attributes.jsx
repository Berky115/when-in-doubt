class ProfileLink extends React.Component {
  render () {
    return (
      <a href={this.props.url}
        title={this.props.label}
        target="_blank">Profile
      </a>

    );
  }
}

// class ProfileLink extends React.Component {
//     render() {
//       return <a href={this.props.url}
//         title={this.props.label}
//         target="_blank">Profile
//       </a>
//     }
//   }
