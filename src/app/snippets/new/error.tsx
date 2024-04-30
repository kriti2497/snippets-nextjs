"use client";

import React from "react";
interface ErrorProps {
  error: Error;
  reset: () => void;
}
const Error = ({ error }: ErrorProps) => {
  return <div>{error ? error.message : ""}</div>;
};

export default Error;
