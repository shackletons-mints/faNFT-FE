import react from 'react'
import './LotteryAgreement.css'

interface LotteryAgreementProps {
    title?: string
    text?: string
    list?: string[]
    subtext?: string
    subList?: string[]
    href?: string
    linkText?: string
}

const LotteryAgreement: React.FC<LotteryAgreementProps> = ({ title, text, list, subtext, subList, href, linkText }) => {
    return (
        <div className='lotAgree-card-container'>
            <h2 className='lotAgree-card-display-3'>{title}</h2>
            <p className="lotAgree-card-text">{text}</p>
            { list?.length > 0
                &&
                <ul className='list'>
                    {list?.map((item, idx) => (
                        <li className='agreement' key={idx}>
                            {item}
                        </li>
                    ))}
                    {href !== undefined && <a className='link' href={href} target='_blank'> {linkText}</a>}
                </ul>
            }
            <p className="lotAgree-card-text">{subtext}</p>
            { subList?.length > 0
                &&
                <ul className='list'>
                    {subList?.map((item, idx) => (
                        <li className='agreement' key={idx}>
                            {item}
                        </li>
                    ))}
                </ul>
            }
        </div>
    )
}

export default LotteryAgreement