import {useState} from 'react'

const CommandChild = ({content}) => {
    const [showChild, setShowChild] = useState(false);
    return (
        <div>
            <h4>{content.cmd}
            {content.usages &&
                <span onClick={() => setShowChild(!showChild)} style={{color: "#0066cc",cursor:"pointer", fontSize: "60%", marginLeft: 9}}>{showChild ? "Hide usage" : "Show usage"}</span>
            }</h4>
            <p>{content.desc}</p>
            {content.usages && showChild &&
                <ul>
                    {
                    content.usages.map((now) => (
                        <li>
                            <span style={{fontFamily: "Consolas"}}>{now.usage}</span>{now.param && <span className="param" style={{marginLeft: 3}}>{now.param}</span>}
                            {now.usageDesc && 
                                <span style={{marginLeft: 2}}>: {now.usageDesc}</span>
                            }
                        </li>
                    ))
                    }
                </ul>
            }
        </div>
    )
}

export default CommandChild