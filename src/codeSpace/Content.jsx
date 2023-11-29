import { Routes, Route, Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import { Listwork } from "./workPage/listwork";
import { Taskwork } from "./workPage/taskwork";

export const Content = ({ userTask, fetchErr, isLoading, checks, deletes }) => {
  return (
    <div className="mx-auto flex flex-col justify-between">
      <div>
        <Routes>
          <Route path="/listwork" element={<Listwork />} />
          <Route
            path="*/taskwork"
            element={
              <Taskwork
                userTask={userTask}
                fetchErr={fetchErr}
                isLoading={isLoading}
                checks={checks}
                deletes={deletes}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
};
