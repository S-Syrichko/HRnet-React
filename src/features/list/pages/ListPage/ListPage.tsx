import { SelectableRows } from "mui-datatables";
import { Suspense, lazy, useMemo } from "react";
import { useAppSelector } from "../../../../store/store";
import styles from "./ListPage.module.scss";
const MUIDataTable = lazy(() => import("mui-datatables"));

const List = () => {
  const users = useAppSelector((state) => state.users);

  const columns = useMemo(
    () => [
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
    ],
    []
  );

  const options = {
    filter: false,
    download: false,
    print: false,
    selectableRows: "none" as SelectableRows,
    viewColumns: false,
    pagination: false,
  };

  return (
    <main className={styles.page}>
      <Suspense fallback={<div>Loading...</div>}>
        <MUIDataTable
          title={"Current Employees"}
          data={users}
          columns={columns}
          options={options}
        />
      </Suspense>
    </main>
  );
};

export default List;
