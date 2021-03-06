import Head from "next/head";
import Link from "next/link";
import {
  Button,
  Container,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

import styles from "./Navbar.module.scss";

export default function Appbar() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.text}>
        <Navbar
          bg=""
          expand="lg"
          className={styles.navbar_wrap}
        >
          <Container>
            <div className="d-flex justify-content-between">
              <Navbar.Brand href="/">
                <div className={styles.logo_wrapper}>
                  <img src="/logo.png" alt="logo" />
                </div>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </div>
            <Navbar.Collapse
              id={`basic-navbar-nav justify-content-end ${styles.navbar_list_wrap}`}
              style={{ justifyContent: "flex-end" }}
            >
              <Nav
                className="me-auto"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Link href="/" passHref={true}>
                  <Nav.Link>Home</Nav.Link>
                </Link>
                <NavDropdown
                  title="Services"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.1">
                    Action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <Link href="/" passHref={true}>
                  <Nav.Link href=""> About Us</Nav.Link>
                </Link>
                <Nav.Link href="#link">
                  How it Works
                </Nav.Link>
                <Nav.Link href="#link">Contact Us</Nav.Link>
                <Nav.Link href="#link">
                  <Button className={styles.order_btn}>
                    Order Now
                  </Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}
