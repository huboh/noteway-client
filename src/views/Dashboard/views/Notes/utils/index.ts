import { SITE_NAME } from "../../../../../constants";

export const getPageTitle = (count: number) => (
  (typeof count !== "number") || (count <= 0) || isNaN(count) ? `Notes - ${SITE_NAME}` : `Notes (${count > 99 ? "99+" : count}) - ${SITE_NAME}`.trim()
);