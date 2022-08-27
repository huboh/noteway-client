import { useMemo, useState } from "react";
import { getFuntions, dashboardState } from "../../utils";

const useDashBoard = () => {
  const [state, setState] = useState(dashboardState);

  return useMemo(() => ({
    ...state, ...getFuntions(setState, state)
  }),
    [state]
  );
};

export {
  useDashBoard as default
};