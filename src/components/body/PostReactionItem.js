import React from 'react'

const PostReactionItem = ({icon,title}) => {
  return (
    <div className=' text-2xl font-semibold flex gap-2 text-gray-500 items-center cursor-pointer hover:bg-gray-200 rounded-md px-4 py-3'>
        {icon}
        <h3 className=' text-base'>{title}</h3>
    </div>
  )
}

export default PostReactionItem