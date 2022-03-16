import './dataTable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../datatablesource";



const DataTable = () => {
    const actionCollumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: () => {
                return (
                    <div className="cellAction">
                        <div className="viewButton">View</div>
                        <div className="deleteButton">Delete</div>
                    </div>
                )
            }
        }
    ]
return (
    <div className='dataTable'>
        <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionCollumn)}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
    />
    </div>
)
}

export default DataTable