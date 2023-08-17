import { Column, usePagination, useSortBy, useTable } from "react-table";
import { User } from "../../../../store/features/DataTypes";
import { useAppSelector } from "../../../../store/store";
import styles from "./ListPage.module.scss";

const mockUsers: Array<User> = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    startDate: "2021-01-01",
    department: "Engineering",
    dateOfBirth: "1990-01-01",
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001",
  },
  {
    id: 2,
    firstName: "Jack",
    lastName: "Doe",
    startDate: "2021-01-01",
    department: "Engineering",
    dateOfBirth: "1990-01-01",
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001",
  },
  {
    id: 3,
    firstName: "John",
    lastName: "Doe",
    startDate: "2021-01-01",
    department: "Engineering",
    dateOfBirth: "1990-01-01",
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001",
  },
  {
    id: 4,
    firstName: "Sam",
    lastName: "Doe",
    startDate: "2021-01-01",
    department: "Engineering",
    dateOfBirth: "1990-01-01",
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001",
  },
  {
    id: 5,
    firstName: "John",
    lastName: "Doe",
    startDate: "2021-01-01",
    department: "Engineering",
    dateOfBirth: "1990-01-01",
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001",
  },
  {
    id: 6,
    firstName: "John",
    lastName: "Doe",
    startDate: "2021-01-01",
    department: "Engineering",
    dateOfBirth: "1990-01-01",
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001",
  },
  {
    id: 7,
    firstName: "John",
    lastName: "Doe",
    startDate: "2021-01-01",
    department: "Engineering",
    dateOfBirth: "1990-01-01",
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001",
  },
  {
    id: 8,
    firstName: "John",
    lastName: "Doe",
    startDate: "2021-01-01",
    department: "Engineering",
    dateOfBirth: "1990-01-01",
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001",
  },
  {
    id: 9,
    firstName: "John",
    lastName: "Doe",
    startDate: "2021-01-01",
    department: "Engineering",
    dateOfBirth: "1990-01-01",
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001",
  },
  {
    id: 10,
    firstName: "John",
    lastName: "Doe",
    startDate: "2021-01-01",
    department: "Engineering",
    dateOfBirth: "1990-01-01",
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001",
  },
  {
    id: 11,
    firstName: "John",
    lastName: "Doe",
    startDate: "2021-01-01",
    department: "Engineering",
    dateOfBirth: "1990-01-01",
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001",
  },
  {
    id: 12,
    firstName: "John",
    lastName: "Doe",
    startDate: "2021-01-01",
    department: "Engineering",
    dateOfBirth: "1990-01-01",
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001",
  },
];

const columns: Column<User>[] = [
      {
        Header: "First Name",
        accessor: "firstName",
      },
      {
        Header: "Last Name",
        accessor: "lastName",
      },
      {
        Header: "Start Date",
        accessor: "startDate",
      },
      {
        Header: "Department",
        accessor: "department",
      },
      {
        Header: "Date of Birth",
        accessor: "dateOfBirth",
      },
      {
        Header: "Street",
        accessor: "street",
      },
      {
        Header: "City",
        accessor: "city",
      },
      {
        Header: "State",
        accessor: "state",
      },
      {
        Header: "Zip Code",
        accessor: "zipCode",
      },
    ];

const List = () => {
  const users = useAppSelector((state) => state.users);
  // Mocked data for performance testing
  // if (users.length === 0) {
  //   users = mockUsers;
  // }

  const {
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state: { pageIndex},
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,      
    pageOptions,
  } = useTable({ columns, data: users }, useSortBy, usePagination);

  return (
    <main className={styles.page}>
      <h2>Current employees</h2>
      <table className={styles.table}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())} scope="col">
                {column.render("Header")}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {page.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
    <div className={styles.pagination}>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
      </div>
    </main>
  );
};

export default List;
