import React from "react";
import styled from "styled-components";

const List = styled.div`
  .list-item {
    list-style: none;

    &-anchor {
      text-decoration: none;
      color: inherit;
      padding: 20px;

      .date {
        text-align: right;
      }
    }
  }
`;

function LaunchList() {
  return (
    <section>
      <h1>
        Last Launches{" "}
        <span role="img" aria-label="emoji decoration">
          🚀
        </span>
      </h1>
      <List>
        <li className="list-item">
          <a className="list-item-anchor" href="/details/missionname">
            <h2>Mission Name</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              bibendum sapien et placerat varius. Duis a velit ac nisl facilisis
              consequat. Aenean gravida cursus lectus in lobortis. Aenean
              ultricies, nisl in elementum laoreet, dolor elit feugiat mi, id
              semper arcu ante eu nisi.{" "}
            </p>
            <p className="date">
              <i>22/02/2021</i>
            </p>
          </a>
        </li>
      </List>
    </section>
  );
}

export default LaunchList;
