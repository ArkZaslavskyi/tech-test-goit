import { useEffect, useState } from "react";
import { UsersList } from "./App.styled";
import Container from "./components/Container/Container";
import User from "./components/User/User";
import data from "./users.json";

// const USERS_LOCAL_STORAGE = "";
function App() {
  const [users, setUsers] = useState(() =>
    window.localStorage.getItem("users") &&
    !!JSON.parse(window.localStorage.getItem("users")).length &&
    JSON.parse(window.localStorage.getItem("users")).length ===
      data.users.length
      ? JSON.parse(window.localStorage.getItem("users"))
      : [
          ...data.users.map((user) => {
            if (user.follow === undefined) {
              user.follow = false;
            }
            return user;
          }),
        ]
  );

  useEffect(() => {
    window.localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleClick = (id) => {
    const newUsers = [...users];
    const user = newUsers.find((user) => user.id === id);

    user.followers = !user.follow ? user.followers + 1 : user.followers - 1;
    user.follow = !user.follow;

    setUsers(newUsers);
  };

  return (
    <Container>
      {!users.length ? (
        "Loading..."
      ) : (
        <UsersList>
          {users.map((user) => (
            <User
              key={user.id}
              user={user}
              onClickButton={() => handleClick(user.id)}
            />
          ))}
        </UsersList>
      )}
    </Container>
  );
}

export default App;
