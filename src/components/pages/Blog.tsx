import { Container, Title, Text, Footer } from "./Utils";

const Blog = () => {
  return (
    <>
      <Container style={{ minHeight: "73vh" }}>
        <Title>.posts</Title>
        <Text>No articles yet...</Text>
      </Container>
      <Footer />
    </>
  );
};

export default Blog;
