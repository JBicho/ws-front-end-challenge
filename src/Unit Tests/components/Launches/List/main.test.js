import { MockedProvider } from "@apollo/client/testing";
import React from "react";
import TestRenderer from "react-test-renderer";
import LaunchList from "../../../../components/Launches/List/main";
import { GENERAL_INFO } from "../../../../graphQL/queries";

const mockMission = [
  {
    mission_name: "Starlink-15 (v1.0)",
    launch_date_local: "2020-10-24T11:31:00-04:00",
    links: {
      article_link: null,
    },
    ships: [
      {
        image: "https://i.imgur.com/MtEgYbY.jpg",
      },
      {
        image: "https://imgur.com/NHsx95l.jpg",
      },
      {
        image: "https://i.imgur.com/7VMC0Gn.jpg",
      },
      {
        image: "https://i.imgur.com/ABXtHKa.jpg",
      },
    ],
    details: "Dummy details",
    id: "109",
  },
];

const mocks = [
  {
    request: {
      query: GENERAL_INFO,
    },
    result: {
      data: {
        launchesPast: mockMission,
      },
    },
  },
];

describe("Test mission list component", () => {
  it("Should display loading", () => {
    const component = TestRenderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <LaunchList />
      </MockedProvider>
    );

    const tree = component.toJSON();

    expect(tree.children).toHaveLength(2);
    expect(tree.children[1].children).toStrictEqual(["Loading"]);
  });

  it("Should render the mission list", async () => {
    const component = TestRenderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <LaunchList />
      </MockedProvider>
    );

    await new Promise((resolve) => setTimeout(resolve, 0));

    const missionName = component.root.findByType("h2");
    const missionDetails = component.root.findAllByType("p");

    missionDetails.forEach((e, index) => {
      if (index === 0) {
        expect(e.children.join("")).toContain("Dummy details");
      }
    });

    expect(missionName.children.join("")).toContain("Starlink-15 (v1.0)");
  });
});
