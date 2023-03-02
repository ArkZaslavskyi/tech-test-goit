import { Main } from "./Container.styled";

const Container = ({children}) => {
  return (
    <Main>
      {children}
    </Main>
  )
};

export default Container;