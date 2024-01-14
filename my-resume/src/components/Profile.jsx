export const Profile = ({name, email}) => { // name and email are props/ inputs
    return ( // return syntax
        <> 
         <h1>{name}</h1>
         <a href={`mailto${email}`}>{email}</a>
        </>
    )
}