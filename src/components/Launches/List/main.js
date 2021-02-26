import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import styled from "styled-components";
import { GENERAL_INFO } from "../../../graphQL/queries";
import loadingIcon from "../../../images/LoadingIcon.svg";
import { convertISODate } from "../../../utils/date/main";
import useToast from "../../Generic/Toast/hooks/useToast";

const List = styled.div`
  .list-item {
    list-style: none;
    background-color: rgb(255, 255, 255);
    margin: 10px auto;
    padding: 10px 20px;

    &-anchor {
      text-decoration: none;
      color: inherit;

      .mission-description {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .date {
        text-align: right;
      }
    }
  }
`;

const LoadingIcon = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function LaunchList() {
  const toast = useToast();
  const { error, loading, data } = useQuery(GENERAL_INFO);

  useEffect(() => {
    if (error) {
      toast.setToastInfo(error.message);
    }

    if (data) {
      const { launchesPast } = data;

      // Store the launches info in sessionStorage to make it accessible throughout the app
      window.sessionStorage.setItem(
        "missionList",
        JSON.stringify(launchesPast)
      );
    }
  }, [error, data]);

  if (loading) {
    return (
      <LoadingIcon>
        <img src={loadingIcon} alt="loading animation" />
        <h1>Loading</h1>
      </LoadingIcon>
    );
  }

  return (
    <section>
      <h1>
        Last Launches{" "}
        <span role="img" aria-label="emoji decoration">
          🚀
        </span>
      </h1>
      <List>
        {data.launchesPast &&
          data.launchesPast.map((mission, index) => (
            <li key={index} className="list-item">
              <a className="list-item-anchor" href={`/mission/${index}`}>
                <h2>{mission.mission_name}</h2>
                <p className="mission-description">
                  {mission.details || "No details available for this mission"}
                </p>
                <p className="date">
                  <i>{convertISODate(mission.launch_date_local)}</i>
                </p>
              </a>
            </li>
          ))}
      </List>
    </section>
  );
}

export default LaunchList;
