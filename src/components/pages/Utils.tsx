import styled from "styled-components";

const Container = styled.div`
  max-width: 960px;
  width: 100%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const MainSection = styled.section`
  min-height: 80vh;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2rem;
  padding: 16px;
`;

const SubTitle = styled.h2`
  font-size: 1.4rem;
  padding: 8px;
`;

const H3 = styled.h3`
  font-size: 1.2rem;
  padding: 4px;
`;

const Text = styled.p`
  padding: 4px;
  text-align: justify;
  text-justify: inter-word;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.2rem;
  gap: 0 10px;
`;

const Label = styled.span`
  font-size: 12px;
  font-weight: 300;
  padding: 0 20px;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
  flex: 1;
  background-image: linear-gradient(to right, #fbca1f 0, #fbca1f 100%);
  background-position: 0 -0.3em;
  background-size: 0 100%;
  background-repeat: no-repeat;
  transition: background 0.5s;

  &:hover {
    background-size: 100% 100%;
  }
`;

interface IconLinkProps {
  iconClass: string;
  label: string;
  link: string;
  style?: object;
}

const IconLink = ({ iconClass, link, label, style }: IconLinkProps) => {
  return (
    <IconContainer style={style}>
      <i className={iconClass} style={{ padding: "0 8px" }}></i>
      <p>
        <Link href={link}>{label}</Link>
      </p>
    </IconContainer>
  );
};

const FooterContainer = styled.footer`
  border-top: 1px solid #aaa;
  justify-content: center;
  align-items: center;
  padding-right: 50px;
  text-align: right;
  margin-top: 20px;
  font-weight: 300;
  display: flex;
  height: 100px;
  width: 100%;
`;

const Footer = () => {
  const date = new Date();
  return (
    <FooterContainer>
      <Container>
        {date.getFullYear()} &bull; with <i className="fa-solid fa-heart"></i>{" "}
        by sagungt
      </Container>
    </FooterContainer>
  );
};

const InlineContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 0 16px;
`;

const Item = styled.span`
  background-image: linear-gradient(to right, #fbca1f 0, #fbca1f 100%);
  background-position: 0 -0.3em;
  background-repeat: no-repeat;
  transition: background 0.5s;
  background-size: 0 100%;
  color: black;

  &:hover {
    background-size: 100% 100%;
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StyledCard = styled.div`
  text-align: center;
  font-family: inherit;
  font-size: 10px;
  margin: 4px;
  border: 3px solid black;
  box-shadow: 0.1em 0.15em;
  border-radius: 0.7em;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translate(-0.2em, -0.2em);
    box-shadow: 0.15em 0.15em;
  }

  & a {
    font-size: 1rem;
  }
`;

interface CardProps {
  title: string;
  description?: string;
  github?: string;
  link?: string;
}

const Card = ({ title, description, github, link }: CardProps) => {
  return (
    <>
      <StyledCard>
        <Bold>
          <SubTitle style={{ fontSize: "1.2rem" }}>{title}</SubTitle>
        </Bold>
        <Text
          style={{
            fontSize: "16px",
            textAlign: "start",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {description}
        </Text>
        <InlineContainer
          className="actions"
          style={{
            justifyContent: "center",
            borderTop: "solid 3px black",
            width: "100%",
            gap: "0",
          }}
        >
          {link && (
            <IconLink
              iconClass="fa-solid fa-link"
              link={link}
              label="Link"
              style={{ gap: "0" }}
            />
          )}
          {github && (
            <IconLink
              iconClass="fa-brands fa-github"
              link={github}
              label="Repo"
              style={{ gap: "0" }}
            />
          )}
          {link || github ? (
            ""
          ) : (
            <Text style={{ fontSize: "12px" }}>Deprecated</Text>
          )}
        </InlineContainer>
      </StyledCard>
    </>
  );
};

export {
  InlineContainer,
  LinksContainer,
  CardContainer,
  MainSection,
  Container,
  IconLink,
  SubTitle,
  Footer,
  Title,
  Label,
  Item,
  Bold,
  Text,
  Card,
  H3,
};
