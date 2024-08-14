import React from 'react'

const List = () => {
    let students = [
        {
            id:1,
            identiy:"tamedo",
            height : "6,1 ft",
            age:27
        },
        {
            id:2,
            identiy:"rebecca",
            height:"5,3ft",
            age:19
        }
        ,
        {
            id:3,
            identiy:"sarah",
            height:"5,9ft",
            age:25
        }
    ]
    let list = students.map((student , index)=> {
        return(
            <ul key = {index}>
            <li>{student.identiy}</li>
        </ul>
        ) 
})
  return (
    <>
       <div>
            {list}
        </div>
    </>
  )
}

export default List