import React, { useState } from 'react'

type userType = {
    name: string,
    email: string,
    phone: string,
}

function StateType() {
    const [user,setUser] = useState<userType | null>(null);

    const handleLogin = () => {
        setUser({
            name: "Kenan",
            email: "kc@gmail.com",
            phone: "555444333",
        });
    }

    const handleLogout = () => {
        setUser(null)
    }

  return (
    <div>
        <button onClick={handleLogin}>Giriş Yap</button>
        <button onClick={handleLogout}>Çıkış Yap</button>
        <div>
            <p>{user?.name}</p>
            <p>{user?.email}</p>
            <p>{user?.phone}</p>
        </div>
    </div>
  )
}

export default StateType