/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

const employeelist = () => {
  const navigate = useNavigate();
  let [data, setData] = useState([]);

  let dataFetching = async () => {
    let item = await axios.get("http://localhost:3008/employee");
    console.log(item.data);
    setData(item.data);
  };
  const LoadDetail = (id) => {
    navigate("/view/" + id);
  };

  useEffect(() => {
    dataFetching();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <h1>Employee List</h1>
              </div>
              <div className="card-body">
                <table className="table table-border table-hover cursor-pointer">
                  <thead className="table-dark text-white">
                    <tr>
                      <td>id</td>
                      <td>name</td>
                      <td>username</td>
                      <td>email</td>
                      <td>Action</td>
                    </tr>
                  </thead>

                  <tbody>
                    {data &&
                      data.map((item1) => {
                        return (
                          <tr>
                            <td>{item1.id}</td>
                            <td>{item1.name}</td>
                            <td>{item1.username}</td>
                            <td>{item1.email}</td>
                            <td colSpan={2}>
                              <a
                                onClick={() => {
                                  LoadDetail(item1.id);
                                }}
                                className="btn btn-primary"
                              >
                                Details
                              </a>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default employeelist;
