import Section from "../../Components/Section/Section";
import PageTemplate from "../../Templates/PageTemplate";
const ContactList = ({ darkTheme, setSidebarOpen, sidebarOpen, currentUser }) => {
  return (
    <PageTemplate
      darkTheme={darkTheme}
      setSidebarOpen={setSidebarOpen}
      sidebarOpen={sidebarOpen}
      currentUser={currentUser}
    >
      <Section>ContactList</Section>
    </PageTemplate>
  );
};

export default ContactList;
