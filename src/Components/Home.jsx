import React from 'react'
import Navbar from './Navbar.jsx'
import Sidelock from './Sidelock.jsx'
import Video from './Video.jsx'
import { useAuth } from '../ContextApi/AuthProvider.jsx'
const Home = () => {
  const { data } = useAuth();
  return (
    <div className='h-[100vh] overflow-hidden '>
      <Navbar />
      <div className='flex flex-col md:flex-row gap-2 mt-2'>
        <Sidelock />
        <div className='h-[calc(100vh-2rem)] overflow-y-scroll overflow-x-hidden'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4 p-3'>
            {
              data.map((item) => {

                if (item.type !== 'video') return false;
                return (
                  <Video key={item.id} video={item?.video} />
                )

              })
            }
          </div>
        </div>

      </div>
    </div>

  )
}

export default Home