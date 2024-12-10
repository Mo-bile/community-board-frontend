"use client";

import Link from "next/link";
import styled from "styled-components";
import { useAuth } from "../hooks/useAuth";

const HeaderContainer = styled.header`
  background-color: #3498db;
  padding: 1rem 0;
`;

const Nav = styled.nav`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Button = styled.button`
  background-color: white;
  color: #3498db;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <HeaderContainer>
      <Nav>
        <NavList>
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/posts">Posts</NavLink>
          </li>
        </NavList>
        <NavList>
          {user ? (
            <>
              <li>
                <NavLink href="/create-post">Create Post</NavLink>
              </li>
              <li>
                <Button onClick={logout}>Logout</Button>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink href="/login">Login</NavLink>
              </li>
              <li>
                <NavLink href="/signup">Signup</NavLink>
              </li>
            </>
          )}
        </NavList>
      </Nav>
    </HeaderContainer>
  );
}
