const User = ({name,location,contact}) =>{
    return(
        <div className="p-4 border border-secondary">
        <div>Name : {name}</div>
        <div>Location : {location}</div>
        <div>Contact  : {contact}</div>
        </div>
        
    )
}

export default User;