import React from "react";

function BrowserList(props) {
    const students = [
        {
            company: 'Alfreds Futterkiste',
            contact: 'Maria Anders',
            country: 'Germany'
        },
        {
            company: 'Centro comercial Moctezuma',
            contact: 'Francisco Chang',
            country: 'Mexico'
        },
        {
            company: 'Ernst Handel',
            contact: 'Roland Mendel',
            country: 'Austria'
        },
        {
            company: 'Island Trading',
            contact: 'Helen Bennett',
            country: 'UK'
        },
        {
            company: 'Laughing Bacchus Winecellars',
            contact: 'Yoshi Tannamuri',
            country: 'Canada'
        },
        {
            company: 'Magazzini Alimentari Riuniti',
            contact: 'Giovanni Rovelli',
            country: 'Italy'
        }
    ];

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Company</th>
                    <th>Name</th>
                    <th>Country</th>
                </tr>
                </thead>
                <tbody>
                {students.map(student => (
                    <tr>
                        <td>{student.company}</td>
                        <td>{student.contact}</td>
                        <td>{student.country}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default BrowserList;
