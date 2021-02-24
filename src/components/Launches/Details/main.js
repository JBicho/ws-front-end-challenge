import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Article = styled.article`
  background-color: rgb(255, 255, 255);
  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  .text-content,
  .footer {
    text-align: center;
    padding: 20px;
  }

  .footer {
    .external-link {
      padding: 10px;
      border-radius: 5px;
    }
  }
`;

const HeaderImage = styled.img`
  width: 100%;
  height: auto;
`;

const Header = styled.header`
  text-align: center;
`;

const Footer = styled.footer`
  .external-link {
    text-decoration: none;
    color: inherit;
    border: solid rgb(237, 241, 245) 2px;
    border-radius: 5px;
  }
`;

function LaunchDetails() {
  let { id } = useParams();
  const [selectedMission, setSelectedMission] = useState(null);

  useEffect(() => {
    if (!selectedMission) {
      const missionList = JSON.parse(sessionStorage.getItem("missionList"));
      const findMission = missionList[id];

      setSelectedMission(findMission);
    }
  }, [selectedMission]);

  return selectedMission ? (
    <section>
      <Article>
        <Header>
          {selectedMission.ships.length ? (
            <HeaderImage
              src={selectedMission.ships[0].image}
              alt="launch media"
            />
          ) : (
            <h2>No media available for this mission</h2>
          )}
        </Header>
        <div className="text-content">
          <h2>{selectedMission.mission_name}</h2>
          <p>
            {selectedMission.details || "No details available for this mission"}
          </p>
        </div>
        <Footer className="footer">
          <a
            className="external-link"
            href={selectedMission.links.article_link}
            target="_blank"
            rel="noreferrer"
          >
            See more
          </a>
        </Footer>
      </Article>
    </section>
  ) : (
    <h1>
      No data available for this mission.
      <br /> Please try again in a bit
    </h1>
  );
}

export default LaunchDetails;
