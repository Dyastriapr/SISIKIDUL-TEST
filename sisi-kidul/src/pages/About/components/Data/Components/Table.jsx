import React from 'react';

const Table = () => {
    return (
        <div className="overflow-x-auto">
            <table className="table-auto border-collapse border border-green-800">
                <thead>
                    <tr>
                        <th className="border border-green-600 px-4 py-2">No.</th>
                        <th className="border border-green-600 px-4 py-2">Provinsi</th>
                        <th className="border border-green-600 px-4 py-2">APK SMP Sederajat Tahun 2022</th>
                        <th className="border border-green-600 px-4 py-2">APM SMP Sederajat Tahun 2022</th>
                        <th className="border border-green-600 px-4 py-2">APK SMP Sederajat Tahun 2023</th>
                        <th className="border border-green-600 px-4 py-2">APM SMP Sederajat Tahun 2023</th>
                        <th className="border border-green-600 px-4 py-2">IPM SMP Sederajat Tahun 2022</th>
                        <th className="border border-green-600 px-4 py-2">IPM SMP Sederajat Tahun 2023</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td className="border border-green-600 px-4 py-2">{index + 1}</td>
                            <td className="border border-green-600 px-4 py-2">{row[0]}</td>
                            <td className="border border-green-600 px-4 py-2">{row[1]}</td>
                            <td className="border border-green-600 px-4 py-2">{row[2]}</td>
                            <td className="border border-green-600 px-4 py-2">{row[3]}</td>
                            <td className="border border-green-600 px-4 py-2">{row[4]}</td>
                            <td className="border border-green-600 px-4 py-2">{row[18]}</td>
                            <td className="border border-green-600 px-4 py-2">{row[19]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
