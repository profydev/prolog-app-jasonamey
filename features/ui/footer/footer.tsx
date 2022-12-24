import styled from "styled-components";
import { breakpoint, color, space } from "@styles/theme";
import Link from "next/link";

const footerItems = [
  { text: "Docs", href: "/dashboard" },
  { text: "Help", href: "/dashboard" },
  { text: "API", href: "/dashboard" },
  { text: "Community", href: "/dashboard" },
];

const Container = styled.footer`
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 ${space(8)};
  color: ${color("gray", 400)};
  background-color: ${color("gray", 50)};
  @media (min-width: ${breakpoint("desktop")}) {
    flex-direction: row;
    justify-content: space-between;
    left: 17.5rem;
    height: 3.75rem;
  }
`;

const Version = styled.span`
  color: ${color("gray", 400)};
  order: 2;
  @media (min-width: ${breakpoint("desktop")}) {
    order: 0;
  }
`;

const Nav = styled.div`
  color: ${color("gray", 500)};
`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;
const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${space(1)};
  padding: ${space(0, 3)};
`;
const Anchor = styled(Link)`
  text-decoration: none;
  color: ${color("gray", 500)};
`;
const FooterLogo = styled.img``;

export function Footer() {
  return (
    <Container>
      <Version>Version: 14.5.1</Version>
      <Nav>
        <List>
          {footerItems.map((item) => (
            <ListItem key={item.text}>
              {" "}
              <Anchor href={item.href} passHref>
                {item.text}
              </Anchor>
            </ListItem>
          ))}
        </List>
      </Nav>
      <FooterLogo src={"/icons/logo-small.svg"} />
    </Container>
  );
}
