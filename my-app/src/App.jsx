import { useState } from 'react'
import CodeEditor from './components/CodeEditor'
import {Box} from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box minH='100vh' bg='#0f0a19' color='gray.500' px={6} py={8} >
    <CodeEditor/>
    </Box>
  )
}

export default App
