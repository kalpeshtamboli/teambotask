import React from "react";
import { useState } from "react";
import { data } from "./Clientdata";
import { Employeedata } from "./Employeedata";

const TeamboTabs = () => {
  const [openTab, setOpenTab] = useState(1);
  const [clientData, setClientData] = useState(data);
  const [employeeData, setEmployeeData] = useState(Employeedata);

  return (
    <div className="mb-12 font-bold  ">
      <div className="mainContainer flex ">
        <div className="Tabs">
          <div className="container">
            <div className=" items-center justify-center max-w-xl">
              <ul className=" space-y-5">
                <li>
                  <a
                    href="#"
                    onClick={() => setOpenTab(1)}
                    className="inline-block px-4 py-2 text-gray-600 bg-white rounded shadow bg-blue-100 active:text-white active:bg-blue-700 "
                  >
                    Company
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => setOpenTab(2)}
                    className="inline-block px-4 py-2 text-gray-600 bg-white rounded shadow bg-blue-100 active:text-white active:bg-blue-700"
                  >
                    Client
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => setOpenTab(3)}
                    className="inline-block px-4 py-2 text-gray-600 bg-white rounded shadow bg-blue-100 active:text-white active:bg-blue-700"
                  >
                    Employee
                  </a>
                </li>
              </ul>
            </div>

            <div className="Tab-Content ">
              <div className={openTab === 1 ? "block" : "hidden"}></div>
              <div className={openTab === 2 ? "block" : "hidden"}>
                <table className="px-5">
                  <thead>
                    <tr>
                      <th>Task</th>
                      <th>Teammates</th>
                      <th>Assigned</th>
                      <th>Corrections</th>
                      <th>manhour</th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {clientData.map(
                      ({
                        Company,
                        Task,
                        Teammates,
                        Assigned,
                        Corrections,
                        manhours,
                      }) => {
                        return (
                          <tr className="mx-auto">
                            <td className="">{Task}</td>

                            <td className="px-5 ">{Teammates}</td>
                            <td className="px-5 ">{Assigned}</td>
                            <td className="px-5">{Corrections}</td>
                            <td className="px-10">{manhours}</td>
                          </tr>
                        );
                      }
                    )}
                  </tbody>
                </table>
              </div>
              <div className={openTab === 3 ? "block" : "hidden"}>
                <table className="">
                  <thead>
                    <tr>
                      <th>Employee</th>
                      <th>Task</th>
                      <th>Live Task</th>

                      <th>Man Hour</th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {employeeData.map(
                      ({ Employee, Task, LiveTasks, manHours }) => {
                        return (
                          <tr className="mx-auto">
                            <td className="px-5">{Employee}</td>

                            <td className="px-5 ">{Task}</td>

                            <td className="px-5 text-blue-400">{LiveTasks}</td>
                            <td className="px-10">{manHours}</td>
                          </tr>
                        );
                      }
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TeamboTabs;
