import { User,UsersThree, HeartStraight, GearSix, EnvelopeSimple } from "@phosphor-icons/react";
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className='w-fit h-dvh sidebar-bg flex flex-col justify-evenly px-2'>
      <section className="flex flex-col justify-between h-40">
        <EnvelopeSimple size={32} weight="regular" color="white" />  
        <HeartStraight size={32} weight="regular" color="white"  />
        <UsersThree size={32} weight="regular" color="white"  />
        <User size={32} weight="regular" color="white"  />
      </section>
        <GearSix size={32} weight="regular" color="white"  />
    </div>
  )
}

export default Sidebar
