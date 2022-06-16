import {
  InlineContainer,
  CardContainer,
  Container,
  Footer,
  Title,
  Card,
  Item,
  H3,
} from "./Utils";
import { MouseEvent, useState } from "react";
import projects from "../../data/projects";

const tags = [...new Set(projects.map((project) => project.tags).flat())];

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [tag, setTag] = useState("all");

  const filter = (event: MouseEvent) => {
    const tagElement = event.target as HTMLSpanElement;
    setTag(tagElement.innerHTML);
    if (Number(tagElement.getAttribute("data-active")) === 1) {
      setTag("all");
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) => {
        return project.tags.includes(tagElement.innerHTML);
      });
      setFilteredProjects(filtered);
    }
  };

  return (
    <>
      <Container style={{ minHeight: "73vh" }}>
        <div style={{ padding: "0 10px" }}>
          <Title>.projects</Title>
          <CardContainer>
            {filteredProjects.map((project, index) => {
              return (
                <Card
                  key={index}
                  title={project.title}
                  description={project.description}
                  link={project.link}
                  github={project.github}
                />
              );
            })}
          </CardContainer>
          <H3>Tags: </H3>
          <InlineContainer>
            {tags.map((currentTag, index) => {
              return (
                <Item
                  key={index}
                  onClick={filter}
                  style={{
                    cursor: "pointer",
                    fontWeight: tag === currentTag ? "bold" : "normal",
                  }}
                  data-active={tag === currentTag ? 1 : 0}
                >
                  {currentTag}
                </Item>
              );
            })}
          </InlineContainer>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Projects;
