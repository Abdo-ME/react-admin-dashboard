import { useLocation } from "react-router-dom"
import DataTable from "../../components/dataTable/DataTable"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./list.scss"
const List = () => {
  const pathName = useLocation().pathname.slice(1)
  
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
          <DataTable title={pathName ==="users"?"Add New User":"Add New Products"} pathName={pathName} />
      </div>
     
    </div>
  )
}

export default List