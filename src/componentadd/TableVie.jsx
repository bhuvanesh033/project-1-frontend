export const TableVie = (prop)=>{
    const val = prop.dat
    return(
        <tr>
            <td>{val.name}</td>
            <td>{val.email}</td>
            <td>{val.location}</td>
            <td>{val.number}</td>
            <td>{val.event}</td>
            <td>{val.budget}</td>
            <td>{val.description}</td>
        </tr>    
    )
}