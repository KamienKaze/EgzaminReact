import './App.css';
import { useState } from "react";


export default function App() {

    let courses = ["Programowanie w C#", "Angular dla początkujących", "Kurs Django"];

    const listCourses = courses.map((course) => <li key={Math.random()}>{course}</li>);

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
        if (courses[number - 1]) {
            console.log(courses[number - 1]);
        } else {
            console.log("Nieprawidłowy numer kursu");
        }
    }

    return (
        <div id="section">
            <h2> Liczba kursów: {courses.length} </h2>
            <ol>
                {listCourses}
            </ol>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Imię i nazwisko:</label>
                    <input type="text" className="form-control" id="name" value={name}
                           onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="number">Numer kursu:</label>
                    <input type="number" className="form-control" id="number" value={number}
                           onChange={(e) => setNumber(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary">Zapisz do kursu</button>
            </form>
        </div>);
}