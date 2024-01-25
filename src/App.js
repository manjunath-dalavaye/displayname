import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstName.trim() === "" || lastName.trim() === "") {
      alert("Please fill in both first and last names.");
    } else {
      const fullName = `${firstName} ${lastName}`;
      setFullName(fullName);
    }
  };

  const main = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  };

  const formStyle = {
    border: "2px solid #ccc",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const fullNameStyle = {
    marginTop: "20px",
    textAlign: "center",
  };

  return (
    <div style={main}>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            pattern=".*"
          />
        </label>
        <br />
        <br />

        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            pattern=".*\S.*"
          />
        </label>
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
      {fullName && (
        <div style={fullNameStyle}>
          <p>Full Name: {fullName}</p>
        </div>
      )}
    </div>
  );
}

export default App;
