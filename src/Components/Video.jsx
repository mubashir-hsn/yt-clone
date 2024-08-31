import React from 'react'
import { Link } from 'react-router-dom'
import Time from '../loader/Time'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { abbreviateNumber } from 'js-abbreviation-number'

const Video = ({ video }) => {
  return (
    <div>
      <Link to={`/video/${video?.videoId}`}>
        <div>
          {/* Video thumbnail  */}
          <div className=' relative h-48 md:h-56'>
            <img className='h-full w-full md:rounded-xl md:hover:rounded-none duration-200' src={video?.thumbnails[0]?.url} alt="" />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>
          {/* Video Context*/}
          <div className='flex items-start mt-3 space-x-3'>
            {/* Video thumbnail & User Profile logo */}
            <div>
              <div className='flex w-9 h-9 rounded-full overflow-hidden'>
                <img className='w-full h-full rounded-full overflow-hidden' src={video?.author?.avatar[0]?.url} alt="" />
              </div>
            </div>

            <div>
              {/* Video title & User name */}
              <span className='text-sm font-bold line-clamp-2'>{video?.title}</span>

              <span className='flex items-center mt-1 text-[12px] text-gray-600'>
                {video?.author?.title}
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (<BsFillCheckCircleFill className='text-gray-600 ml-1 text-[12px]' />)}
              </span>
              {/* Video views & Published time */}
              <div className='flex text-gray-500 text-[12px]'>
                <span>
                  {`${abbreviateNumber(
                    video?.stats?.views, 2
                  )} views`}
                </span>
                <span className='flex items-center justify-center text-[24px] leading-none relative top-[-10px] mx-1'>
                  .
                </span>
                <span>{video?.publishedTimeText}</span>
              </div>
            </div>

          </div>
        </div>
      </Link>
    </div>
  )
}

export default Video