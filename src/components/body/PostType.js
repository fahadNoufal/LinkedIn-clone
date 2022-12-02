import React from 'react'

const PostType = ({icon,title}) => {
  return (
    <div className='flex gap-3 cursor-pointer px-3 py-2 rounded-md text-2xl items-center hover:bg-gray-200'>
        {icon}
        <h4 className='text-lg font-semibold text-gray-500'>{title}</h4>
    </div>
  )
}

export default PostType