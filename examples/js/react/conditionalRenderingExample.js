import React from 'react'

class ConditionalRender extends React.Component {
    render() {
       return <React.Fragment>  
            {(this.isModal) ?
            <Modal isOpen={true} returnTo={this.props.location.state.returnTo}>
                {this.props.children}
            </Modal> : ''
            }
          </React.Fragment>
    }
}

export default ConditionalRender