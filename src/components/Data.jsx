import React from "react";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import styled from "styled-components";

const Container = styled.div`
  background-color: #f5f8f8;
  margin-top: 25px;
`;

const DataTop = styled.div`
  text-align: center;
`;

const DataTopTitle = styled.h2`
  padding-top: 35px;
  font-size: 28px;
  font-weight: 800;
  color: #364a43;
`;

const DataTopDesc = styled.h3`
  padding-top: 8px;
  font-size: 15px;
  font-weight: 400;
`;
const DataDesc = styled.h4`
  text-align: center;
  margin-top: 5px;
  font-size: 11px;
  font-weight: light;
`;
const DataItems = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 3rem;
`;
const DataItem = styled.div`
  margin: 10px;
  padding: 10px;
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  border-radius: 12px;
  height: 110px;
  width: 9rem;
  background-color: white;
  margin-bottom: 25px;
`;
const Icon = styled.div`
  margin: 9px;
  color: #32df8f;
  text-align: center;
`;
const DataNum = styled.h1`
  text-align: center;
  font-size: 25px;
  font-weight: bold;
`;

const Data = () => {
  return (
    <Container>
      <DataTop>
        <DataTopTitle>We always try to give you the best service</DataTopTitle>
        <DataTopDesc>
          We always try to make our customer Happy. We provide all kind <br />
          of facilities. Your Satisfaction is our main priority.
        </DataTopDesc>
      </DataTop>

      <DataItems>
        <DataItem>
          <Icon>
            <CalendarMonthOutlinedIcon style={{ fontSize: 40 }} />
          </Icon>
          <DataNum>15+</DataNum>
          <DataDesc>Years of Experience</DataDesc>
        </DataItem>

        <DataItem>
          <Icon>
            <BarChartOutlinedIcon style={{ fontSize: 40 }} />
          </Icon>
          <DataNum> 15k+</DataNum>

          <DataDesc>Happy Travelers</DataDesc>
        </DataItem>

        <DataItem>
          <Icon>
            <PinDropOutlinedIcon style={{ fontSize: 40 }} />
          </Icon>
          <DataNum>650+</DataNum>

          <DataDesc>Places Visited</DataDesc>
        </DataItem>

        <DataItem>
          <Icon>
            <HistoryOutlinedIcon style={{ fontSize: 40 }} />
          </Icon>
          <DataNum> 2k+</DataNum>

          <DataDesc>Travel History</DataDesc>
        </DataItem>
      </DataItems>
    </Container>
  );
};

export default Data;
