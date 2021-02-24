import { useEffect, useState } from "react";

function useProvideToast() {
  const [toastInfo, setInfo] = useState(false);

  const setToastInfo = (info) => setInfo(info);

  // When the toast is displayed, se a 3 second timer to make it disappear
  useEffect(() => {
    setTimeout(() => {
      if (toastInfo) {
        setInfo(false);
      }
    }, 3000);
  }, [toastInfo]);

  return {
    toastInfo,
    setToastInfo,
  };
}

export default useProvideToast;
