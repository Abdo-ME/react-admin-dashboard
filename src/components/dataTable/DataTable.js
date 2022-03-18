import './dataTable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../datatablesource";
import { Link } from 'react-router-dom';



const DataTable = ({ title ,pathName}) => {

    const actionCollumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: () => {
                return (
                    <div className="cellAction">
                        <Link to="/users/test">
                        <div className="viewButton">View</div>
                        </Link>
                        <div className="deleteButton">Delete</div>
                    </div>
                )
            }
        }
    ]
return (
    <div className='dataTable'>
        <div className="datatableTitle">
                {title}
            <Link to={`/${pathName}/new`} className='link'>
                Add New
            </Link>
        </div>
        <DataGrid className="datagrid"
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