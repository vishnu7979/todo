import React from 'react'

const ListingOfTask = ({task,index,removeTask}) => {
  return (
    <>
        <div className='listTask'>
            {task.title}
            <button onClick={()=>{removeTask(index)}} className='deletebtn'>
                Delete
            </button>
        </div>
    </>
  )
}

export default ListingOfTask