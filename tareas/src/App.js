import { useState } from 'react'
import './App.css';

function Form() {
  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState('')
  const [state, setState] = useState(false)
  const [id, setId] = useState(1)

  function handleChange(event) {
    setTask(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const newTask = {
      id,
      task,
      state,
    }

    setTasks(prevTask => {
      return prevTask.concat(newTask)
    })
    setId(id+1)
    setTask('')
    setState(false)
  }

  return (
    <>
      <form className="container" onSubmit={handleSubmit}>
        <div className="form">
          <input className="text" type="text" onChange={handleChange} value={task} required/>
          <span className="highlight"></span>
          <label className="label">Tarea</label>
          <label class="check">
            <input class="checkbox" type="checkbox" onChange={e => setState(e.target.checked)} checked={state}/>
            <span class="square"></span>
            <span class="detail">Completado</span>
          </label>
          <button type="submit" className="button">Enviar</button>
        </div>
      </form>
      <div>
        {tasks.map((t) => {
          return (
            <article key={t.id}>
              <p className="titleText"><span className="message">Tarea {t.id}: </span>{t.task.toUpperCase()}</p>
              <p className="textBody"><span className="message">Estado: </span>{t.state ? 'Completada' : 'Por Completar'}</p>
            </article>
          )
        })}
      </div>
    </>
  )
}

function App() {
  return (
    <div>
      <Form />
    </div>
  );
}

export default App;
