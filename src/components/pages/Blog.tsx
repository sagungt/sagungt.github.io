import { Container, Title, Text, Footer } from "./Utils";

const Blog = () => {
  return (
    <>
      <Container style={{ minHeight: "73vh" }}>
        <div style={{ padding: "0 10px" }}>
          <Title>.posts</Title>
          <Text>No articles yet...</Text>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Blog;
