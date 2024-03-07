import React from "react";
import { useRouteError } from "react-router-dom";

const CustomError = () => {
  const errorDetails = useRouteError();
  const errorMessage = errorDetails?.data;
  console.log("errorDetails", errorDetails);

  return (
    <div className="container m-4">
    <p>Status: {errorDetails.statusText}</p>
    <p>ErrorCode: {errorDetails.status} !!!</p>
    {errorMessage}
    </div>
  );
};

export default CustomError;
