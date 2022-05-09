import { HomeTwoTone, MailTwoTone, MobileTwoTone } from '@ant-design/icons'

export default function Address() {
    return (
        <div>
            <div className='addrBlock'>
                <HomeTwoTone style={{ fontSize: '24px' }} className="footerIcon" />
                <div className='footerContent'>
                    Office 1: Rajiv Pujari, Shirol, Kolhapur MIDC Agar road,pin-416103
                </div>
            </div>
            <div className='addrBlock'>
                <MailTwoTone style={{ fontSize: '24px' }} className="footerIcon" />
                <div className='footerContent'>
                    info@globalwastemanage.com
                </div>
            </div>
            <div className='addrBlock'>
                <MobileTwoTone style={{ fontSize: '24px' }} className="footerIcon" />
                <div className='footerContent'>
                    7777776654
                </div>
            </div>
        </div>
    )
}