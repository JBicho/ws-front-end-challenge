import { gql } from "@apollo/client";

const GENERAL_INFO = gql`
  {
    launchesPast(limit: 10) {
      mission_name
      launch_date_local
      links {
        article_link
      }
      ships {
        image
      }
      details
      id
    }
  }
`;

export { GENERAL_INFO };
