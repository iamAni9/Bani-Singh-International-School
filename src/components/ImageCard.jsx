import React from 'react'

function ImageCard(props) {
  return (
    <>
        <div class="w-full max-w-sm bg-white flex flex-col items-center">
            <img class="p-4 rounded-lg image-container" src={props.image} alt="product image" />
            <h1 className='text-2xl font-bold'>{props.name}</h1>
            <h1 className='text-lg font-medium'>{props.desg}</h1>
        </div>
    </>
  )
}

export default ImageCard