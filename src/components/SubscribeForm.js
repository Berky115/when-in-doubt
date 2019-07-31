import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

import '../assets/stylesheets/subscribeModal.css';

const url = 'https://gmail.us3.list-manage.com/subscribe/post?u=904b3bbac8d316bffbaf412bc&amp;id=1ca48e9029';
const SimpleForm = () => <MailchimpSubscribe url={url} />;

const SubscribeForm = () => (
	<MailchimpSubscribe
		url={url}
		render={({ subscribe, status, message }) => (
			<div>
				<SimpleForm onSubmitted={formData => subscribe(formData)} />
				{status === 'sending' && <div style={{ color: 'blue' }}>sending...</div>}
				{status === 'error' && <div style={{ color: 'red' }} dangerouslySetInnerHTML={{ __html: message }} />}
				{status === 'success' && <div style={{ color: 'green' }}>Subscribed !</div>}
			</div>
		)}
	/>
);

export default SubscribeForm;
