import { FC, ReactNode } from "react";
import NavBar from "../Navbar/Navbar";


interface Child {
  children: ReactNode;
}

const Layout: FC<Child> = ({ children }) => {
  return (
    <>
      <NavBar></NavBar>
      <main>{children}</main>
    </>
  );
};

export default Layout;
