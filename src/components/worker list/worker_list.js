import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTable, useSortBy } from "react-table";
import { Link } from "react-router-dom";
import workplace1icon from "./workplaces.png";
import location1icon from "./location.png";
import services1icon from "./services.png";
import "./worker_list.css"; // Plik CSS do stylizacji tabeli

function WorkersTable() {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    const fetchWorkers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3Aworkers&maxFeatures=50&outputFormat=application%2Fjson"
        );
        const workersData = response.data.features.map((feature, index) => ({
          number: index + 1,
          name: feature.properties.name,
          lastname: feature.properties.lastname,
          location: feature.properties.city,
          function: feature.properties.function,
          idwork: feature.properties.id_place,
        }));
        setWorkers(workersData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchWorkers();
  }, []);

  const data = React.useMemo(() => workers, [workers]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Lp",
        accessor: "number",
      },
      {
        Header: "Imię",
        accessor: "name",
      },
      {
        Header: "Nazwisko",
        accessor: "lastname",
      },
      {
        Header: "Miasto",
        accessor: "location",
      },
      {
        Header: "Funkcja",
        accessor: "function",
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
        <h1>Baza danych o pracownikach</h1>
        <div className="buttons">
          <Link to="/services/map">
            <img
              className="locationicon"
              src={location1icon}
              alt="lokalizacja"
            />
          </Link>
          <Link to="/services/workplacelist">
            <img
              className="workplaceicon"
              src={workplace1icon}
              alt="miejsca pracy"
            />
          </Link>
          <Link to="/services">
            <img className="servicesicon" src={services1icon} alt="usługi" />
          </Link>
        </div>
      </div>
      <table {...getTableProps()} className="workers-table">
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

export default WorkersTable;
