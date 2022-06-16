import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 150px;
  background-color: grey;
  background: linear-gradient(to top, transparent 0%, rgb(0, 0, 0, 0.5) 50%);
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 10px;
`;

const Logo = styled.h3`
  margin-right: 40px;
  font-size:20px
  font-weight: bold;
  text-align: center;
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
`;

const Image = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          Emerald <br />
          Travels
        </Logo>
        <Center>
          <span className='item'>Home</span>
          <span className='item'>About Us</span>
          <span className='item'>Packages</span>
        </Center>
        <div className='right'>
          <Image src='https://images.unsplash.com/photo-1569210954449-4e8dc4e022a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGZhY2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
        </div>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
