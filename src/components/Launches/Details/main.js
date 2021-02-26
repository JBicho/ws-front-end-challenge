import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Article = styled.article`
  margin: 0 auto;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  max-width: 800px;
  min-width: 500px;
  padding-bottom: 5px;

  .text-content {
    padding: 20px;
  }
`;

const Header = styled.header`
  width: 100%;
  position: relative;

  .slider {
    position: relative;
    height: inherit;
    width: inherit;

    .slider-wrapper {
      position: relative;
      height: inherit;
      width: inherit;

      .prev,
      .next {
        background: none;
        border: none;
        font-size: 45px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1;
        cursor: pointer;
      }

      .prev {
        left: 20px;
      }

      .next {
        right: 10px;
      }
    }
  }
`;

const HeaderImage = styled.img`
  width: inherit;
  height: inherit;
`;

const NoMediaText = styled.div`
  text-align: center;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 20px;

  .external-link {
    text-decoration: none;
    color: inherit;
    border: solid rgb(237, 241, 245) 2px;
    border-radius: 5px;
    padding: 10px;
  }
`;

function LaunchDetails() {
  let { id } = useParams();
  const [selectedMission, setSelectedMission] = useState(null);
  const [activeImage, setActiveImage] = useState();
  const [slideImages, setSlideImages] = useState([]);

  useEffect(() => {
    if (!selectedMission) {
      const missionList = JSON.parse(
        window.sessionStorage.getItem("missionList")
      );
      const mission = missionList[id];
      const missionImages = mission && mission.ships.map((obj) => obj.image);

      setActiveImage(missionImages[0]);
      setSlideImages(missionImages);
      setSelectedMission(mission);
    }
  }, [selectedMission]);

  const slideNav = (direction) => {
    const imageIndex = slideImages.indexOf(activeImage);

    if (
      imageIndex + direction >= 0 &&
      imageIndex + direction < slideImages.length
    ) {
      setActiveImage(slideImages[imageIndex + direction]);
    }
  };

  return selectedMission ? (
    <section>
      <Article>
        <Header>
          <div className="slider">
            {slideImages.length ? (
              <div className="slider-wrapper">
                {slideImages.length > 1 && (
                  <div>
                    <button
                      className="next"
                      onKeyDown={() => slideNav(1)}
                      onClick={() => slideNav(1)}
                    >
                      <span role="img" aria-label="arrow left">
                        ➡️
                      </span>
                    </button>
                    <button
                      className="prev"
                      onKeyDown={() => slideNav(-1)}
                      onClick={() => slideNav(-1)}
                    >
                      <span role="img" aria-label="arrow right">
                        ⬅️
                      </span>
                    </button>
                  </div>
                )}

                <HeaderImage src={activeImage} alt="launch media" />
              </div>
            ) : (
              <NoMediaText>
                <h2>No media available for this mission</h2>
              </NoMediaText>
            )}
          </div>
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
    <h1>No data available for this mission. Please try again in a bit</h1>
  );
}

export default LaunchDetails;
