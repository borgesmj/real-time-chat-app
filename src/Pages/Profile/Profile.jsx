import PageTemplate from "../../Templates/PageTemplate";
import Section from "../../Components/Section/Section";

const Profile = ({ darkTheme, setSidebarOpen, sidebarOpen, currentUser }) => {
  return (
    <PageTemplate
    darkTheme={darkTheme}
    setSidebarOpen={setSidebarOpen}
    sidebarOpen={sidebarOpen}
    currentUser={currentUser}
    >
      <Section>
        profile
      </Section>
    </PageTemplate>
  );
};

export default Profile;
