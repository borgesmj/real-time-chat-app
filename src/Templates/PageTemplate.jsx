import Sidebar from "../Components/Sidebar/Sidebar";

const PageTemplate = ({children, openSidebar, sidebarOpen}) => {
  return (
    <div className="w-[96dvw] h-[95dvh] relative main-shadow rounded-lg">
      <Sidebar openSidebar = {openSidebar} sidebarOpen={sidebarOpen}/>
      {children}
    </div>
  );
};

export default PageTemplate;
