<<<<<<< HEAD
import React from 'react'
import { useEffect, useState,useCallback } from 'react';
import { BiCalendar, BiTrash } from "react-icons/bi"
import Search from "./components/Search"
import AddAppointment from './components/AddAppointment';
import AppointmentInfo from "./components/AppointmentInfo"

function App() {

  let [appointmentList, setAppointmentList] = useState([])
  let [query, setQuery] = useState("")
  let [sortBy, setSortBy] = useState("petName")
  let [orderBy, setOrderBy] = useState("asc")
  const filteredAppointments = appointmentList.filter(
    item => {
      return (
        item.petName.toLowerCase().includes(query.toLowerCase()) ||
        item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
        item.aptNotes.toLowerCase().includes(query.toLowerCase())
      )
    }
  ).sort((a, b) => {
    let order = (orderBy === 'asc') ? 1 : -1
    return (
      a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
      ? -1 * order : 1 * order

    )
  })

  const fetchData = useCallback(
    () => {
      fetch('data.json')
      .then(response => response.json())
      .then(data => {
        setAppointmentList(data)
      })
    }, [])

    useEffect(() => {
      fetchData()
    }, [fetchData])
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl mb-3">
        <BiCalendar className="inline-block text-blue-500 align-top"/> My Appointments</h1>
        <AddAppointment 
        onSendAppointment={myAppointment => setAppointmentList([...appointmentList, myAppointment])}
        lastId={appointmentList.reduce((max, item) => Number(item.id) > max ? Number(item.id): max, 0 )}
        />
        <Search query={query}
        onQueryChange={myQuery => setQuery(myQuery)}
        orderBy={orderBy}
        onOrderByChange={mySort => setOrderBy(mySort)}
        sortBy={sortBy}
        onSortByChange={mySort => setSortBy(mySort)}
        />
        <ul className="divide-y divide-gray-200">
          {filteredAppointments.map(appointment => (
              <AppointmentInfo key={appointment.id}
              appointment={appointment}
              onDeleteAppointment={
                appointmentId =>
                setAppointmentList(appointmentList.filter(appointment => 
                  appointment.id !== appointmentId))
              }
            />
          ))}

        </ul>
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
>>>>>>> bb433da5c1223b04499f2e80b7aeb925c8353395
    </div>
  );
}

export default App;
