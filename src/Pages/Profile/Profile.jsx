import PageTemplate from "../../Templates/PageTemplate";
import Section from "../../Components/Section/Section";

const Profile = ({ darkTheme, setSidebarOpen, sidebarOpen }) => {
  return (
    <PageTemplate
    darkTheme={darkTheme}
    setSidebarOpen={setSidebarOpen}
    sidebarOpen={sidebarOpen}
    >
      <Section>
        profile
      </Section>
    </PageTemplate>
  );
};

export default Profile;
