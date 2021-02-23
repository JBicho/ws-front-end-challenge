import React from "react";
import styled from "styled-components";
import LaunchList from "./components/Launches/List/main";

const Main = styled.main`
  max-width: 900px;
  margin: 0 auto;
`;

function Dashboard() {
  return (
    <Main>
      <LaunchList />
    </Main>
  );
}

export default Dashboard;
