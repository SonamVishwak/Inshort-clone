import { Box } from "@mui/material";
import InfoHeader from "./component/InfoHeader";
import Header from "./component/header";
import styled from "@emotion/styled";
import Articles from "./component/Articles";
const Container = styled(Box)`
  width: 60%;
  margin: 30px auto 0 auto;
`;
function App() {
  return (
    <Box>
      <Header />
      <Container>
        <InfoHeader />
        <Articles />
      </Container>
    </Box>
  );
}

export default App;
