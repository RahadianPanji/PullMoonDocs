import CommandChild from './CommandChild'
import { commandsList } from './CommandsList'

const CommandBlock = () => {
    return (
        <div className="CommandBlock">
            {
                commandsList.map(now => (
                    <div className="MiniBlock">
                        <h3>{now.title}</h3> 
                        {
                            now.body.map((child) => <CommandChild content={child}/>)
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default CommandBlock
