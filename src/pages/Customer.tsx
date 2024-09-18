import { ReactElement, useCallback, useState } from "react";
import { Column } from "react-table";
import TableHOC from "../components/TableHOC";
import AdminSidebar from "../components/AdminSidebar";
import { FaTrash } from "react-icons/fa";

interface DataType {
  avatar: ReactElement;
  name: string;
  gender: string;
  email: string;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Avatar",
    accessor: "avatar",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const img = "https://randomuser.me/api/portraits/women/54.jpg";
const img1 = "https://randomuser.me/api/portraits/women/54.jpg";

const arr: DataType[] = [
  {
    avatar: <img style={{borderRadius: "50%"}} src={img} alt="Shoes" />,
    name: "Lara",
    email: "lara46@gmail.com",
    gender: "Female",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },

  {
    avatar: <img style={{borderRadius: "50%"}} src={img1} alt="Shoes" />,
    name: "Lara",
    email: "lara46@gmail.com",
    gender: "Female",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
];

const Customer = () => {
  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(
    TableHOC<DataType>(columns, data, "dashboard-product-box", "Product", true),
    []
  );

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main>
        <Table />
      </main>
    </div>
  );
};

export default Customer;
