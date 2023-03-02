import Container from "./components/Container/Container";
import User from "./components/User/User";
import data from "./users.json";
function App() {
  console.log(data.users);
  return (
    <Container>
      {/* <User logo={data.logo} picture={data.picture} /> */}
      <User user={data.users[0]} {...data.awatar} />
    </Container>
  );
}

export default App;
