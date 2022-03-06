import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from './components/Container'
import { Folders } from './pages/Folders'
import { Folder } from './pages/Folder'
import { Todo } from './pages/Todo'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container>
          <h1 className='text-lg font-medium'>To-do App</h1>
          <Routes>
            <Route path="/" element={<Folders />} />
            <Route path="/folder/:id" element={<Folder />}></Route>
            <Route path="/todo/:id" element={<Todo />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  )
}

export default App;
