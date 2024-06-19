import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

interface Task {
  id: number;
  detail: string;
  status: string;
  selection: boolean;
}

// interface Tasks {
//   task: Task[];
// }

function App() {
  const [count, setCount] = useState(0)
  const [tasks, setTask] = useState<Task[]>([
    {
     id: 123,
     detail: "this is a task 1",
     selection: false,
     status: "completed" 
    },

    {
      id: 123,
      detail: "this is a task 2",
      selection: false,
      status: "completed" 
     },

     {
      id: 123,
      detail: "this is a task 3",
      selection: false,
      status: "completed" 
     },

     {
      id: 123,
      detail: "this is a task 4",
      selection: false,
      status: "completed" 
     }
  ]);
  const [new_tasks, setNewTasks] = useState<Task[]>([]);

  

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <div className="parent">
        <div className="header">
          <h1 className='title'>TODO List</h1>
        </div>
        <div className="dashboard">
          <div className="left-nav">
            <dt>
              <dd>
                test
              </dd>
              <dd>
                test2
              </dd>
              <dd>
                test3
              </dd>
            </dt>
          </div>
          <div className="detail">
            <table className='table'>
              <thead className='head'>
                <tr>  
                  <td></td>
                  <td>Detail</td>
                  <td>Status</td>
                  <td>Select</td>
                </tr>
              </thead>
              <tbody className='tbody'>
                {
                  tasks.map(
                    t => {
                      return (<tr>
                        <td>{t.id}</td>
                        <td>{t.detail}</td>
                        <td>{t.status}</td>
                        <td>{t.selection}</td>
                      </tr>)
                    }
                  )
                }

                {/* {
                  new_tasks.map(
                    t => {
                      return (<tr>
                        <td>
                          <input type="text" value={new_tasks.detail}></input>
                        </td>
                        <td>t.detail</td>
                        <td>t.status</td>
                        <td>t.selection</td>
                      </tr>)
                    }
                  )
                } */}
              </tbody>
              
            </table>
          </div>
        </div>
      </div>
      {/* <h1>Vite + React</h1> */}
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div> */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
