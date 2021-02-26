import React from "react";
import ReactRouter, { Route } from "react-router";
import { MemoryRouter } from "react-router-dom";
import TestRenderer from "react-test-renderer";
import LaunchDetails from "../../../../components/Launches/Details/main";

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

const localStorageMock = (() => {
  const obj = {
    missionList: JSON.stringify(mockMission),
  };

  return {
    getItem(key) {
      return obj[key];
    },
  };
})();

Object.defineProperty(window, "sessionStorage", {
  value: localStorageMock,
});

describe("Test error page", () => {
  it("Should render a no data warning when no mission is available", () => {
    jest.spyOn(ReactRouter, "useParams").mockReturnValue({ id: "0" });

    const component = TestRenderer.create(
      <MemoryRouter initialEntries={["/mission/0"]}>
        <Route exact path="/mission/:id">
          <LaunchDetails />
        </Route>
      </MemoryRouter>
    );

    const tree = component.toJSON();

    expect(tree.children).toContain(
      "No data available for this mission. Please try again in a bit"
    );
  });

  it("Should display the mission details", () => {
    jest.spyOn(ReactRouter, "useParams").mockReturnValue({ id: "0" });

    const component = TestRenderer.create(
      <MemoryRouter initialEntries={["/mission/0"]}>
        <Route exact path="/mission/:id">
          <LaunchDetails />
        </Route>
      </MemoryRouter>
    );

    const missionName = component.root.findByType("h2");
    const missionDetails = component.root.findByType("p");
    const missionImages = component.root.findByType("img");

    expect(missionImages.props.src).toEqual("https://i.imgur.com/MtEgYbY.jpg");
    expect(missionName.children.join("")).toContain("Starlink-15 (v1.0)");
    expect(missionDetails.children.join("")).toContain("Dummy details");
  });
});
