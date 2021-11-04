import {useState} from 'react'
import CommandChild from './CommandChild'
import { commandsList } from './CommandsList'

const CommandBlock = () => {
    const [showNSFW, setShowNSFW] = useState(false);
    return (
        <div className="CommandBlock">
            {
                commandsList.map(now => (
                    <div className="MiniBlock">
                        <h3>{now.title}
                        {now.title === "NSFW" &&
                            <span onClick={() => setShowNSFW(!showNSFW)} style={{color: "#0066cc",cursor:"pointer", fontSize: "60%", marginLeft: 9}}>{showNSFW ? "Hide" : "Show"}</span>
                        }</h3> 
                        { (now.title !== "NSFW" || showNSFW)  &&
                            now.body.map((child) => <CommandChild content={child}/>)
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default CommandBlock
