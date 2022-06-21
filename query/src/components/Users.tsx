import type { Person } from "./Example"

export const Users = ({ users }: { users: Person[] }) => {
  return (
    <div  
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "2rem",
      }}
    >
      {users.map(user => (
        <div 
          key={user.email}
          style={{
            width: "100%",
            display: "grid",
            placeItems: "center",
          }}
        >
          <img 
            src={user.picture.large} 
            alt={user.name.first + " " + user.name.last}
            style={{ borderRadius: "100%" }}
          />
          <h1 style={{fontSize: "1rem"}}>
            {user.name.first} {user.name.last}
          </h1>
          <h2 style={{fontSize: "1rem"}}>{user.location.country}</h2>
        </div>
      ))}
    </div>
  )
}
