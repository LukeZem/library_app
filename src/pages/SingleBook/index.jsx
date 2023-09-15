import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const SingleBook = ({ books }) => {
  /**1. get book id from url
    2. look through books array for the right book
    3. show THAT book's info */

  //1.
  const [bookToShow, setBookToShow] = useState(null);
  const location = useLocation()
  const params = new URLSearchParams(location.search);
  const bookIdFromURL = params.get('bookId');
  console.log(bookIdFromURL);

  //2.
  useEffect(() => {
    let myBook = books.find((book) => book.id === bookIdFromURL);
    console.log(myBook);
    setBookToShow(myBook);
  }, []);

  //3.
  return (
    <div className='page-container'>
      {bookToShow ?
        <>
          <h1>{bookToShow.title}</h1>
          <p>{bookToShow.author}</p>
          <p>{bookToShow.pages}</p>
        </>
        :
        <></>
      }

    </div>
  )
}

export default SingleBook