import React from 'react'

const page = ({ params }: { params: { id: string }}) => {

  const { id } = params;
  return (
    <h1 className='text-5xl'>Users Profile: {id} </h1>
  )
}

export default page;
