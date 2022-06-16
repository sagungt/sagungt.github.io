import {
  InlineContainer,
  LinksContainer,
  Container,
  SubTitle,
  IconLink,
  Footer,
  Title,
  Label,
  Item,
  Text,
  Bold,
  H3,
} from "./Utils";

const Profile = () => {
  return (
    <>
      <Container style={{ minHeight: "65vh" }}>
        <div style={{ padding: "0 10px" }}>
          <Title>.profile</Title>
          <SubTitle
            style={{ marginBottom: 0, paddingBottom: 0, marginTop: "20px" }}
          >
            Sri Agung Tirtayasa
          </SubTitle>
          <Label>Developer|Engineer</Label>
          <H3>About me</H3>
          <Text>Hello world!</Text>
          <Text>Currently a web developer or engineer.</Text>
          <Text>
            A tech enthusiast who interested in <Bold>web</Bold>,{" "}
            <Bold>machine learning</Bold>, <Bold>data</Bold>,{" "}
            <Bold>decentralized</Bold>, <Bold>scientific programming</Bold>,
            etc.
          </Text>
          <SubTitle style={{ marginTop: "20px" }}>Tech & Specialities</SubTitle>
          <InlineContainer>
            <Item>JavaScript</Item>
            <Item>TypeScript</Item>
            <Item>React</Item>
            <Item>Python</Item>
            <Item>PHP</Item>
            <Item>Problem Solving</Item>
            <Item>Networking</Item>
            <Item>GIT</Item>
            <Item>Linux</Item>
            <Item>Cloud</Item>
            <Item>SQL/NoSQL</Item>
            <Item>Data Viz</Item>
            <Item>Scraping</Item>
          </InlineContainer>
          <SubTitle style={{ marginTop: "20px" }}>Cert</SubTitle>
          <H3>Web Development</H3>
          <LinksContainer>
            <IconLink
              iconClass="fa-solid fa-fire"
              label="Front-End Web Developer Expert by Dicoding"
              link="https://www.dicoding.com/certificates/L4PQ362R7PO1"
            />
            <IconLink
              iconClass="fa-solid fa-fire"
              label="Progressive Web Apps by Dicoding"
              link="https://www.dicoding.com/certificates/07Z6L8E4YPQR"
            />
            <IconLink
              iconClass="fa-solid fa-fire"
              label="Back-End Fundamental by Dicoding"
              link="https://www.dicoding.com/certificates/NVP719JGRPR0"
            />
            <IconLink
              iconClass="fa-solid fa-fire"
              label="Architecting on AWS by Dicoding"
              link="https://www.dicoding.com/certificates/53XEWJKEKXRN"
            />
            <IconLink
              iconClass="fa-solid fa-fire"
              label="Front End Development Libraries by FreeCodeCamp"
              link="https://www.freecodecamp.org/certification/agung/front-end-development-libraries"
            />
            <IconLink
              iconClass="fa-solid fa-fire"
              label="Back End Development and APIs by FreeCodeCamp"
              link="https://www.freecodecamp.org/certification/agung/back-end-development-and-apis"
            />
          </LinksContainer>
          <H3>Machine Learning</H3>
          <LinksContainer>
            <IconLink
              iconClass="fa-solid fa-brain"
              label="Machine Learning for Beginner by Dicoding"
              link="https://www.dicoding.com/certificates/81P228L98POY"
            />
            <IconLink
              iconClass="fa-solid fa-brain"
              label="Alibaba Cloud AI Forward 2021 by Alibaba"
              link="#profile"
            />
            <IconLink
              iconClass="fa-solid fa-brain"
              label="Intermediate Machine Learning by Kaggle"
              link="https://www.kaggle.com/learn/certification/sriagungtirtayasa/intermediate-machine-learning"
            />
          </LinksContainer>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Profile;
