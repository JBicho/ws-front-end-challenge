import React from "react";
import styled from "styled-components";
import useToast from "./hooks/useToast";

const ToastContainer = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: fit-content;
  padding: 0 20px;
  border-radius: 5px;
  background-color: rgb(220, 53, 69);
  color: rgb(255, 255, 255);
`;

function Toast() {
  const toast = useToast();

  if (!toast) {
    return <div></div>;
  }

  return (
    toast &&
    toast.toastInfo && (
      <ToastContainer>
        <h2>Error</h2>
        <p>
          {toast.toastInfo || "An error occurred please try again in a while"}
        </p>
      </ToastContainer>
    )
  );
}

export default Toast;
