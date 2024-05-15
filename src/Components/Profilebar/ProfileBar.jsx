import { ArrowCircleLeft, DotsThreeOutlineVertical } from "@phosphor-icons/react";

const ProfileBar = ({ setChatOpened, darkTheme }) => {
  return (
    <div className={`flex justify-between items-center w-full rounded-t-lg ${!darkTheme ? 'bg-[#479ae0]' : 'bg-[#3ce0bc]'}`}>
      <div className=" ml-2 flex justify-between items-center w-60 lg:w-44 lg:ml-4 ">
        <ArrowCircleLeft
          size={32}
          color="#ffffff"
          weight="duotone"
          onClick={() => {
            setChatOpened(false);
          }}
          className="lg:hidden"
        />
        <img
          src="https://thumbs.wbm.im/pw/medium/769696e34b3e45081d14212795d01414.avif"
          alt=""
          className="rounded-full h-[50px] w-[50px]"
        />
        <h3 className="font-bold">Roland Garros</h3>
      </div>
      <DotsThreeOutlineVertical size={32} color="#ffffff" weight="duotone" />
    </div>
  );
};

export default ProfileBar;
