import { useNavigate } from "react-router-dom";
import LOGO from "pages/EmployeesProject/assets/ReneG.jpg"

import EmployeesContextProvider from "pages/EmployeesProject/contexts/EmployeesContext";

import {
  LayoutWrapper,
  Header,
  Main,
  Link,
  Logo,
  LogoImg,
  NavigationContainer,
} from "./styles";
import { LayoutProps, PagesNavigation } from "./types";

function LayoutEmployeesProject({ children }: LayoutProps) {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate(PagesNavigation.HOME);
  };

  return (
    <EmployeesContextProvider>
      <LayoutWrapper>
        <Header>
          <Logo onClick={goToHomePage}>
            <LogoImg
              src={LOGO}
              alt="logo picture"
            />
          </Logo>
          <NavigationContainer>
            <Link
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
                textDecoration: isActive ? "underline" : "none",
              })}
              to={PagesNavigation.CREATE_EMPLOYEES}
            >
              Create Employee
            </Link>
            <Link
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
                textDecoration: isActive ? "underline" : "none",
              })}
              to={PagesNavigation.EMPLOYEES}
            >
              Employees
            </Link>
          </NavigationContainer>
        </Header>
        <Main>{children}</Main>
      </LayoutWrapper>
    </EmployeesContextProvider>
  );
}

export default LayoutEmployeesProject;
