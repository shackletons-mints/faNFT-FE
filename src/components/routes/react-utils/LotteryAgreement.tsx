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
    listIndentions?: number[]
}

const LotteryAgreement: React.FC<LotteryAgreementProps> = ({ title, text, list, subtext, subList, href, linkText, listIndentions }) => {
    console.log(list)
    return (
        <div className='lotAgree-card-container'>
            <h1 className='lotAgree-card-display-3'>{title}</h1>
            <p className="lotAgree-card-text">{text}</p>
            { list?.length > 0
                &&
                <ul id="agreement" className='list'>
                    {list?.map((item, idx) => (
                        <li className='agreement' key={idx}>
                            {(idx === list?.length - 1 && href) 
                                &&
                                <>
                                {item}
                                    <a className='link' href={href} target='_blank'>{linkText}</a>
                                </>
                            }
                            {(listIndentions?.includes(idx)) && <>&emsp; &emsp; </>}
                            {(idx !== list?.length - 1) && item}
                        </li>
                    ))}
                    {/* {href !== undefined && } */}
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
