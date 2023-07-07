import MUIDataTable, {SelectableRows} from "mui-datatables";
import { useAppSelector } from "../../../../store/store";
import styles from "./List.module.scss";

const List = () => {
  const users = useAppSelector((state) => state.users);
  
  const columns = [
    {
      label: "First Name",
      name: "firstName",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      label: "Last Name",
      name: "lastName",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      label: "Start Date",
      name: "startDate",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      label: "Department",
      name: "department",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      label: "Date of Birth",
      name: "dateOfBirth",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      label: "Street",
      name: "street",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      label: "City",
      name: "city",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      label: "State",
      name: "state",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      label: "Zip Code",
      name: "zipCode",
      options: {
        filter: false,
        sort: true,
      },
    },
  ];

  const options = {
    filter: false,
    download: false,
    print: false,
    selectableRows: "none" as SelectableRows,
  }

  return (
    <main className={styles.page}>
      <MUIDataTable title={"Employee List"} data={users} columns={columns} options={options} />
    </main>
  );
};

export default List;
