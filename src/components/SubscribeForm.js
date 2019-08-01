import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import '../assets/stylesheets/subscribeModal.css';

import '../assets/stylesheets/subscribeModal.css';

const url = 'https://gmail.us3.list-manage.com/subscribe/post?u=904b3bbac8d316bffbaf412bc&amp;id=1ca48e9029';
const SimpleForm = () => <MailchimpSubscribe url={url} />;

class SubscribeForm extends React.Component {
	constructor(props) {
		super(props);
		this.handleClose = this.handleClose.bind(this);
		this.state = {
			modalStyle: 'modal-container',
			overlayStyle: 'modal-overlay',
		};
	}
	handleClose() {
		this.setState({ modalStyle: 'closed', overlayStyle: 'close' });
	}
	render() {
		return (
			<MailchimpSubscribe
				url={url}
				render={({ subscribe, status, message }) => (
					<React.Fragment>
						<div className={this.state.modalStyle} id="modal-container">
							<div className="Inner-modal">
								<span> Join the party! </span>
								<SimpleForm onSubmitted={formData => subscribe(formData)} />
								{status === 'sending' && <div style={{ color: 'blue' }}>sending...</div>}
								{status === 'error' && (
									<div style={{ color: 'red' }} dangerouslySetInnerHTML={{ __html: message }} />
								)}
								{status === 'success' && <div style={{ color: 'green' }}>Subscribed !</div>}
								<button id="close-button" onClick={this.handleClose}>
									Cancel
								</button>
							</div>
						</div>
						<div className={this.state.overlayStyle} id="modal-overlay" />
					</React.Fragment>
				)}
			/>
		);
	}
}

export default SubscribeForm;
