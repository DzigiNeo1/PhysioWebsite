import { useEffect } from "react";
export const useScrollTo = (x, y, event) => {
  event.preventDefault();
  useEffect(() => {
    window.scrollTo(x, y);
  });
};
