import React from 'react'
import { useState } from 'react';
import BackButton from '../Component/BackButton';
import axios from 'axios';
import Spinner from '../Component/Spinner';
import { useNavigate,useParams } from 'react-router-dom';

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleBook = () => {
    setLoading(true);
    axios
      .delete(`https://bookstore-mini.netlify.app/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("check console");
        console.log(error);
    })
  }
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {
        loading ? <Spinner/> : ""
      }
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>
          Are You Sure You Want To Delete The Book
        </h3>
        <button className='p-4 bg-red-600 text-white m-8 w-full' onClick={handleBook}>Yes Delete It</button>
      </div>
    </div>
  )
}

export default DeleteBook