import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Library = ({ books }) => {
  
  //1. get id from url
  //2. look throug books array for the right books
  //3. show THAT book's info


  return (
    <div className='page-container'>
      <h1>Library</h1>
      {books.map((eachBook) => {
        return (<Link to={`/single_book/?bookId=${eachBook.id}`} key={JSON.stringify(eachBook)}>
          <div >{eachBook.title}</div>
        </Link>
        )

      })}
    </div>
  )
}

export default Library