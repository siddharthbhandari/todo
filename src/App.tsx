import { useEffect, useState } from 'react';
import './App.css';

interface Task {
  id: number;
  todo: string;
  completed: boolean;
  selection: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://dummyjson.com/todos');
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        const data = await res.json();
        setTasks(data.todos);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
            <div className='table-container'>
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
              {tasks.map(task => (
                <tr key={task.id}>
                  <td>{task.id}</td>
                  <td>{task.todo}</td>
                  <td>{task.completed?.toString()}</td>
                  <td>{task.selection?.toString()}</td>
                </tr>
              ))}
            </tbody>
              
            </table>
            </div>
          </div>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
