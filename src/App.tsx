import { useState } from 'react'
import './App.css'


function App() {
  const [state, setState] = useState<{
    state: 'ready' | 'loading' | 'finish' | 'error',
    data?: typeof import("*.md")
  }>({ state: 'ready' });

  return (
    <div className="App">
      <button onClick={() => {
        if (state.state === 'loading') return;
        import('./md/test.md').then((res) => {
          setState({
            state: 'finish',
            data: res
          })
        }).catch((e) => {
          console.log(e);

          setState({ state: 'error' })
        })
      }}>get html</button>{state.state}
      <div style={{
        border: '1px solid black'
      }}>
        {
          JSON.stringify(state.data)
        }
      </div>
    
      <div style={{
        border: '1px solid black'
      }} dangerouslySetInnerHTML={{
        __html: state.data?.default || ''
      }}>

      </div>
    </div>
  )
}

export default App
