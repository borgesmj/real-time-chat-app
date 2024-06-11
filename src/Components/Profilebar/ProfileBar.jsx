import { ArrowCircleLeft, DotsThreeOutlineVertical } from "@phosphor-icons/react";

const ProfileBar = ({ setChatOpened, darkTheme, chatName }) => {
  return (
    <div className={`flex justify-between items-center w-full bg-[var(--primary-200)] h-12 md:h-20 absolute top-0`}>
      <div className=" ml-2 flex justify-between items-center w-fit lg:w-fit lg:ml-4 ">
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
          src="default-pfp.png"
          alt=""
          className="rounded-full h-[50px] w-[50px]"
        />
        <h3 className="font-bold ml-3">{chatName}</h3>
      </div>
    </div>
  );
};

export default ProfileBar;
