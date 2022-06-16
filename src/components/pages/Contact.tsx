import {
  LinksContainer,
  Container,
  IconLink,
  SubTitle,
  Footer,
  Title,
} from "./Utils";

const Contact = () => {
  return (
    <>
      <Container style={{ minHeight: "73vh" }}>
        <div style={{ padding: "0 10px" }}>
          <Title>.addresses</Title>
          <SubTitle>get in touch!</SubTitle>
          <LinksContainer>
            <IconLink
              iconClass="fa-solid fa-at"
              label="agungjordan.aj@gmail.com"
              link="mailto:agungjordan.aj@gmail.com"
            />
            <IconLink
              iconClass="fa-brands fa-github"
              label="GitHub"
              link="https://github.com/sagungt"
            />
            <IconLink
              iconClass="fa-brands fa-instagram"
              label="Instagram"
              link="https://instagram.com/sagungt"
            />
            <IconLink
              iconClass="fa-brands fa-linkedin-in"
              label="LinkedIn"
              link="https://www.linkedin.com/in/sagungt/"
            />
          </LinksContainer>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Contact;
