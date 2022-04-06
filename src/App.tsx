import React, {useState} from 'react';

function App() {
  const [message, setMessage] = useState('')
  return (
      <div>
          <ol style={{ padding: 0, marginLeft: 15 }}>
              <li>Holding "shift" + pressing "enter" will make a new line</li>
              <li>Holding "alt" + pressing "enter" will make a new line</li>
          </ol>
          <textarea
              style={{ height: 100 }}
              placeholder="my textarea"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              onKeyDown={(event) => {
                  if (event.key !== 'Enter' || event.shiftKey) {
                      return;
                  }

                  if (event.altKey) {
                      setMessage((message) => `${message}\n`);
                      return;
                  }
              }}
          />
      </div>
  );
}

export default App;
