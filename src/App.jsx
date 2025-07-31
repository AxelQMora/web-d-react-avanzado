import { ChatBot } from './components/ChatBot'
import { ChatProvider } from './context/chatContext'
import './index.css'

export const App = () => {
  // Guarda la respuesta de llama2

  return (
    <ChatProvider>
      <ChatBot />
    </ChatProvider>

  )
}
