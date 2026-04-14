const BASE = import.meta.env.VITE_API_URL;

export const POST_INIT_CONSTRUCTION = BASE + "/document/init-construction";
export const POST_ADD_SUBMISSION = BASE + "/document/add-submission";

export const GET_CONSTRUCTIONS_LIST = BASE + "/document/constructions-list";
export const GET_DECISIONS_LIST_OF_CONSTRUCTION =
  BASE + "/document/decisions/list-of-construction"; // + /:conId
export const GET_DECISION_BY_PER = BASE + "/document/decision"; // + /:conId/:period
export const GET_TCT_DECISIONS_LIST = BASE + "/document/decisions/tct-list";

// curl -X GET http://localhost:3000/api/document/decisions/list-of-construction/019d809f-122e-77a8-ae52-2dd6998ff23a
