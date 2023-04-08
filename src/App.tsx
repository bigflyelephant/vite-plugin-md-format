import { useState } from 'react'
import './App.css'

function App() {
  const [state, setState] = useState<{
    state: 'ready' | 'loading' | 'finish' | 'error'
    data?: typeof import('*.md')
  }>({ state: 'ready' })

  return (
    <div className="App">
      <button
        onClick={() => {
          if (state.state === 'loading') return
          import('./md/test.md')
            .then(res => {
              setState({
                state: 'finish',
                data: res,
              })
            })
            .catch(e => {
              console.log(e)

              setState({ state: 'error' })
            })
        }}
      >
        get html
      </button>
      {state.state}
      <div className="section">{JSON.stringify(state.data?.assetURLs)}</div>
      <div className="section">{JSON.stringify(state.data?.metadata)}</div>
      <div className="section">{JSON.stringify(state.data?.toc)}</div>
      <div className="section">{JSON.stringify(state.data?.default)}</div>
      <div
        className="section"
        dangerouslySetInnerHTML={{
          __html: state.data?.default || '',
        }}
      />
    </div>
  )
}

export default App
