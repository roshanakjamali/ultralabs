export const handleError = (error: any) => {
  return error.response
    ? error.response.status
    : "Something Wrong Happened to Server";
};
