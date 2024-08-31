import moment from 'moment'
import React from 'react'

const Time = ({time}) => {
    const videotime = moment()?.startOf('day')?.seconds(time)?.format("H:mm:ss");
  return (
    <div>
        <span className='absolute right-2 bottom-2 text-white bg-black rounded-md text-xs px-2 py-1'>{videotime}</span>
    </div>
  )
}

export default Time