import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
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
  const [queryInfo, setQueryInfo] = useState(null);
  const { error, loading, data } = useQuery(GENERAL_INFO);

  useEffect(() => {
    if (error) {
      toast.setToastInfo(error.message);
    }

    if (data && !queryInfo) {
      const { launchesPast } = data;

      // Store the launches info in sessionStorage to make it accessible throughout the app
      sessionStorage.setItem("missionList", JSON.stringify(launchesPast));

      // Storing data in state in case we need to make changes to it
      setQueryInfo(launchesPast);
    }
  }, [error, data]);

  if (loading) {
    return (
      <LoadingIcon>
        <img src={loadingIcon} alt="loading animation" />
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
        {queryInfo &&
          queryInfo.map((mission, index) => (
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
