import React from 'react'
const List = ({people}) => {
  return (

    <div >
     {people.map((person)=>{
        const{id,image,name,age}= person
        return <article key={id} className='person'>
          <img src={image} alt="name" />
          <div>
            <h4>{name}</h4>
            <h6>{age} Years</h6>
          </div>
        </article>
      })}
    </div>
  )
}

export default List