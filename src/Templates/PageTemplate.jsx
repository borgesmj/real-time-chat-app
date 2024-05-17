import Sidebar from "../Components/Sidebar/Sidebar";

const PageTemplate = ({children, openSidebar, sidebarOpen}) => {
  return (
    <div className="w-[95dvw] h-[95dvh] relative bg-red-500">
      <Sidebar openSidebar = {openSidebar} sidebarOpen={sidebarOpen}/>
      {children}
    </div>
  );
};

export default PageTemplate;
