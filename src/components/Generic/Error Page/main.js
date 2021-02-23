import React from "react";
import styled from "styled-components";

const ErrorMessage = styled.div`
  text-align: center;
`;

function ErrorPage() {
  return (
    <section>
      <ErrorMessage>
        <h1 className="message">
          The page you requested does not exist or is unavailable at the moment.
          <br />
          Please refresh the page or try again in a bit.
        </h1>
      </ErrorMessage>
    </section>
  );
}

export default ErrorPage;
