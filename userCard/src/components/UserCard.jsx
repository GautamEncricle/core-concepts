import React, { useState, useEffect } from 'react'
import axios from 'axios'

function UserCard() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then((res) => setUsers(res.data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className="max-w-4xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {users.map((user) => (
                <div key={user.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
                    <h2 className="text-xl font-semibold mb-2 text-indigo-600">{user.name}</h2>
                    <p className="text-gray-700"><span className="font-medium">Username:</span> {user.username}</p>
                    <p className="text-gray-700"><span className="font-medium">Email:</span> {user.email}</p>
                    <p className="text-gray-700"><span className="font-medium">Phone:</span> {user.phone}</p>
                    <p className="text-gray-700"><span className="font-medium">Website:</span> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline">{user.website}</a></p>
                    <p className="text-gray-700"><span className="font-medium">Company:</span> {user.company?.name}</p>
                    <p className="text-gray-700"><span className="font-medium">Address:</span> {user.address?.suite}, {user.address?.street}, {user.address?.city}</p>
                </div>
            ))}
        </div>
    )
}

export default UserCard
