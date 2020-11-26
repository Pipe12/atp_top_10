import React from 'react';

const List = ({ birthdayList = [] }) => {
  console.log(birthdayList.length)
  return (
    <>
      {
        birthdayList.map(item => {
          return (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>{item.points}</p>
            </div>
          )
        })
      }
    </>
  )
}

export default List;
