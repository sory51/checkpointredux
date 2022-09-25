import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, updateTask, doneTask } from '../redux/actions'
import { useState } from 'react'
import { motion } from 'framer-motion'
const Task = ({ task }) => {
  const dispatch = useDispatch()
  const [edit, setEdit] = useState(false)
  const [input, setInput] = useState(task.text)
  const [done, setDone] = useState(task.isDone)

  const editHandler = () => {
    setEdit(!edit)
    edit && setInput(task.text)
    dispatch(updateTask({
      ...task
      , text: input,
      isDone: done
    }))
  }

  const doneHandler = () => {
    setDone(!done)

    dispatch(doneTask({
      ...task,
      isDone: !done
    }))
  }

  return (
    <>
      <motion.div className='taskItem'   animate={{ x: 20}}
  transition={{ ease: "easeOut", duration: 2 }} >
        {edit ? <input value={input} onChange={(e) => setInput(e.target.value)} /> : <div>{task.text} </div>}
        <button className='btn btn-danger'
          onClick={() => dispatch(deleteTask(task.id))}
        >Delete</button>
        <button className='btn btn-warning'
          onClick={

            () => editHandler()
          }
        >{edit ? "update" : "edit"}</button>

        <input type="checkbox" name="box" checked={done} onChange={() => doneHandler()} />
        <label htmlFor="box">done</label>

      </motion.div >




    </>
  )
}

export default Task

