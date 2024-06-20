import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTable, useSortBy } from "react-table";
import { Link } from "react-router-dom";
import worker2icon from "./workers.png";
import location2icon from "./location.png";
import services2icon from "./services.png";
import "./workplace_list.css";

function WorkplacesTable() {
  const [workplaces, setWorkplaces] = useState([]);

  useEffect(() => {
    const fetchWorkplaces = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3Aworkplaces&maxFeatures=50&outputFormat=application%2Fjson"
        );
        const workplacesData = response.data.features.map((feature, index) => ({
          number: index + 1,
          name: feature.properties.name,
          location: feature.properties.city,
          country: feature.properties.country,
          idwork: feature.properties.id_place,
        }));
        setWorkplaces(workplacesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchWorkplaces();
  }, []);

  const data = React.useMemo(() => workplaces, [workplaces]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Lp",
        accessor: "number",
      },
      {
        Header: "Nazwa",
        accessor: "name",
      },
      {
        Header: "Miasto",
        accessor: "location",
      },
      {
        Header: "Kraj",
        accessor: "country",
      },
      {
        Header: "Numer oddziału",
        accessor: "idwork",
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data }, useSortBy);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div className="table-container">
      <div className="table-header">
        <h1>Baza danych o oddziałach</h1>
        <div className="buttons">
          <Link to="/services/map">
            <img
              className="locationicon"
              src={location2icon}
              alt="lokalizacja"
            />
          </Link>
          <Link to="/services/workerlist">
            <img className="workericon" src={worker2icon} alt="pracownicy" />
          </Link>
          <Link to="/services">
            <img className="servicesicon" src={services2icon} alt="usługi" />
          </Link>
        </div>
      </div>
      <table {...getTableProps()} className="workplaces-table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default WorkplacesTable;
