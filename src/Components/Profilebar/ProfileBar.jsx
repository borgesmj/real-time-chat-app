import {ArrowCircleLeft} from '@phosphor-icons/react'

const ProfileBar = ({setChatOpened}) => {
  return (
    <div>
        <ArrowCircleLeft size={32} color="#ffffff" weight="duotone" onClick={() => {setChatOpened(false)}} className='md:hidden'/>
    </div>
  )
}

export default ProfileBar
