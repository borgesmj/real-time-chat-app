import Sidebar from "../Components/Sidebar/Sidebar";

const PageTemplate = ({children, openSidebar, sidebarOpen}) => {
  return (
    <div className="w-full h-full relative xl:w-4/5 2xl:w-3/4">
      <Sidebar openSidebar = {openSidebar} sidebarOpen={sidebarOpen}/>
      {children}
    </div>
  );
};

export default PageTemplate;
