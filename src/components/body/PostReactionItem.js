import React from 'react'

const PostReactionItem = ({icon,title}) => {
  return (
    <div className=' md:text-2xl text-sm font-semibold flex gap-2 text-gray-500 items-center cursor-pointer hover:bg-gray-200 rounded-md  py-3'>
        <div className='scale-150 max-w-[40px]'>
          {icon}
        </div>
        <h3 className=' sm:block hidden text-base '>{title}</h3>
    </div>
  )
}

export default PostReactionItem