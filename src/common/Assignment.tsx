import React from "react";
import "./Assignment.css";

interface AssignmentProps {
  children: React.ReactNode;
}

const Assignment = ({ children }: AssignmentProps) => {
  return (
    <div className="assignment-box">
      <div className="assignment-title">Assignment</div>
      <div className="assignment-content">{children}</div>
    </div>
  );
};

export default Assignment;
