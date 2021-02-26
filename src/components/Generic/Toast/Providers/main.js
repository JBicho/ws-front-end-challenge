import PropTypes from "prop-types";
import React from "react";
import toastContext from "../Context/main";
import useProvideToast from "../hooks/useProvideToast";

function ProvideToast({ children }) {
  const info = useProvideToast();

  return <toastContext.Provider value={info}>{children}</toastContext.Provider>;
}

ProvideToast.propTypes = {
  children: PropTypes.any,
};

export default ProvideToast;
