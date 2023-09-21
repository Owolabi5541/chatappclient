import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('def01b9c-7ba3-4236-af71-bba7d73f39c8', props.user.username, props.user.secret)
    return (<div>
        <MultiChatSocket style= {{height : "100vh"}} {...chatProps} />
        <MultiChatWindow  style= {{height : "100vh"}} {...chatProps} />
    </div>)
}

export default ChatsPage