import React from "react";
import styled from "styled-components";

const Article = styled.article`
  background-color: rgb(255, 255, 255);

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

function LaunchDetails() {
  return (
    <section>
      <Article>
        <header>
          <HeaderImage
            src="https://i.imgur.com/MtEgYbY.jpg"
            alt="launch detail"
          />
        </header>
        <div className="text-content">
          <h2>Mission name</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum
            sapien et placerat varius. Duis a velit ac nisl facilisis consequat.
            Aenean gravida cursus lectus in lobortis. Aenean ultricies, nisl in
            elementum laoreet, dolor elit feugiat mi, id semper arcu ante eu
            nisi.
          </p>
        </div>
        <footer className="footer">
          <button className="external-link">See More</button>
        </footer>
      </Article>
    </section>
  );
}

export default LaunchDetails;
