import React from 'react'
import icon from './icon.svg'

const ListTask = ({tasks,index,removeTask}) => {
  return (
    <>
    <div className='listTaskContainer'>
      <div>
      <div className='inputOutput' >{tasks.title}</div>
      <div className='dateOutput'>{tasks.date}</div>
      </div>
      <img src={icon} onClick={()=>removeTask(index)}/>
    </div>
    
    </>
  )
}

export default ListTask