import React from 'react'

const Profile = ({letter}) => {
  return (
    <div >
     <div className="aspect-square rounded-full w-12 bg-gray-200 flex justify-center items-center font-semibold text-2xl text-gray-400">
        {letter}
     </div>
    </div>
  )
}

export default Profile