import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;
const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 65%;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 50px;
  line-height: 50px;
  font-weight: 800;
  letter-spacing: 2px;
  margin-bottom: 30px;
  color: white;
`;
const Desc = styled.div`
  text-align: center;
  font-size: 15px;
  font-weight: light;
  margin-bottom: 25px;
  color: white;
`;
const Button = styled.button`
  border: none;
  padding: 10px 15px;
  background-color: #0f433d;
  color: white;
  cursor: pointer;
  font-weight: 600;
  border-radius: 7px;

  &:hover {
    -webkit-box-shadow: 4px 12px 20px -5px rgba(0, 0, 0, 0.77);
    box-shadow: 4px 12px 20px -5px rgba(0, 0, 0, 0.77);
  }
`;
const Featured = () => {
  return (
    <Container>
      <Info>
        <Title>
          Your Imagination Is <br /> Your Only Limit
        </Title>
        <Desc>
          We always try to make our customer Happy. We provide all kind of
          facilities.
          <br />
          Your Satisfaction is our main priority
        </Desc>
        <Button>Discover more</Button>
      </Info>
    </Container>
  );
};

export default Featured;
