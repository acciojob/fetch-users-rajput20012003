import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [people, setPeople] = useState([])

  function getData() {
    fetch('https://reqres.in/api/users')
      .then(data => data.json())
      .then(data => setPeople(data.data))
  }

  return (
    <div>
      {/* Do not remove the main div */}
      <header className="nav">
        <h1>Blue Whales</h1>
        <button className="btn"  onClick={getData} >Get User List</button>
      </header>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {
            people.length == 0 ? "No data found to display."
              :
              people.map((people, i) => {
                return (
                  <tr key={i} >
                    <td>{people.first_name}</td>
                    <td>{people.last_name}</td>
                    <td>{people.email}</td>
                    <td><img src={people.avatar} alt="" /></td>
                  </tr>
                )
              })

          }
        </tbody>
      </table>
    </div>
  )
}

export default App