import React from "react";

function renderTable(props) {
  return (
    <>
      <h2 className="section-title">API</h2>
      <div className="section-block">
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
            </thead>
            <tbody>
            {props.map((value, index) => {
              return (
                <tr>
                  <th scope="row">{value.name}</th>
                  <td>{value.type}</td>
                  <td>{value.default}</td>
                  <td>{value.description}</td>
                </tr>
              )
            })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default renderTable;
