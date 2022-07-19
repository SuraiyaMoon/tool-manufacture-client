import React from 'react';
import EachItem from './EachItem';
import { faEnvelopesBulk, faCircleQuestion, faMessage } from '@fortawesome/free-solid-svg-icons';

const ContactFAq = () => {
    return (
        <div className='bg-primary my-12 text-white grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <EachItem
                tittle='Contact Us'
                about='Call our Service Hotline or use our contact form.'
                time='Mon-Fri: 7:00-19:00'
                btnTittle='Open Contact Form'
                icon={faEnvelopesBulk}
            >

            </EachItem>
            <EachItem
                tittle='FAQ'
                about='Visit the Frequently Asked Questions section.
                We may already have the answer for your questions.'
                btnTittle='Ask Your Question'
                icon={faCircleQuestion}
            >
            </EachItem>
            <EachItem
                tittle='TEXT Customer Service'
                about='Have a service related question? Text us here.'
                time='Mon-Fri: 7:00-19:00'
                btnTittle='Click To Text'
                icon={faMessage}
            >
            </EachItem>

        </div>
    );
};

export default ContactFAq;