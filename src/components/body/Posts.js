import React from 'react'
import PostReactionItem from './PostReactionItem'
import { forwardRef } from 'react'
import {AiFillLike} from "react-icons/ai"
import {BiCommentDetail} from "react-icons/bi"
import {BiRepost} from "react-icons/bi"
import {RiSendPlaneFill} from "react-icons/ri"
import Profile from '../profile/Profile';

const Posts = forwardRef(({name,nameDetails,content,profileUrl},ref) => {

  const profileImg=()=>(
    profileUrl?(<img 
        src={profileUrl}
        alt=""
        className='aspect-square rounded-full w-12 object-cover'
    />):<Profile letter={name[0].toUpperCase()} />
  )
  
  return (
    <div ref={ref} className='posts border p-5 pb-1 bg-white border-gray-300 rounded-xl shadow-sm'>
        <div className="post--profile flex gap-3">
            <div>
                {profileImg()}
                
            </div>
            <div className="post--profile--head">
                <h3 className=' font-bold '>
                    {name}
                </h3>
                <h4 className=' text-sm font-semibold text-gray-500'>
                    {nameDetails}
                </h4>
            </div>
        </div>
        <div className="post--content font-semibold text-lg py-4 border-b-2 mb-1">
            <h2>
                {content}
            </h2>
        </div>
        <div className="post--reactions">
            <ul className='flex justify-between gap-1'>
                <li>
                    <PostReactionItem
                        icon={<AiFillLike/>}
                        title="Like"
                    />
                </li>
                <li>
                    <PostReactionItem
                        icon={<BiCommentDetail/>}
                        title="Comment"
                    />
                </li>
                <li>
                    <PostReactionItem
                        icon={<BiRepost className=' text-3xl'/>}
                        title="Repost"
                    />
                </li>
                <li>
                    <PostReactionItem
                        icon={<RiSendPlaneFill/>}
                        title="Send"
                    />
                </li>
            </ul>
        </div>
    </div>
  )
})

export default Posts