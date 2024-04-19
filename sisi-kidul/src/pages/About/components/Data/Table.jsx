import React from 'react';
import dummyData from './Components/DataDummy';

const Table = () => {
    return (
        <div id='table'>
            <table className="table-auto border-collapse border border-green-800">
                <thead>
                    <tr>
                        <th className="border border-green-600 px-4 py-2">No.</th>
                        <th className="border border-green-600 px-4 py-2">Kota</th>
                        <th className="border border-green-600 px-4 py-2">Data</th>
                    </tr>
                </thead>
                <tbody>
                    {dummyData.map((item) => (
                        <tr key={item.id}>
                            <td className="border border-green-600 px-4 py-2">{item.id}</td>
                            <td className="border border-green-600 px-4 py-2">{item.city}</td>
                            <td className="border border-green-600 px-4 py-2">{item.dataValue}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
