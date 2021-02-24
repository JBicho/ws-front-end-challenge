import { useContext } from "react";
import toastContext from "../Context/main";

function useToast() {
  return useContext(toastContext);
}

export default useToast;
