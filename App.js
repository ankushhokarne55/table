import React, { useState } from "react";
import "./App.css";
import data from "./mock-data.json";
import Grid from '@mui/material/Grid';

const App =() => {
  const[contacts,setContacts]=useState(data);
  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
          <Grid item xs={12} container spacing={2}>
            <Grid item lg={3} sm={6} xs={12}><th>Name</th></Grid>
            <Grid item lg={3} sm={6} xs={12}><th>Code</th></Grid>
            <Grid item lg={3} sm={6} xs={12}><th>salary</th></Grid>
            <Grid item lg={3} sm={6} xs={12}><th>department</th></Grid>
          </Grid>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact)=>(
            <tr>
            <Grid item xs={12} container spacing={2}>
            <Grid item lg={3} sm={6} xs={12}><td>{contact.Name}</td></Grid>
            <Grid item lg={3} sm={6} xs={12}><td>{contact.Code}</td></Grid>
            <Grid item lg={3} sm={6} xs={12}><td>{contact.salary}</td></Grid>
            <Grid item lg={3} sm={6} xs={12}><td>{contact.department}</td></Grid>
            </Grid>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App;