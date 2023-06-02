//npm install react-table --force
//https://react-table-library.com/?path=/docs/library-themes-mantine--select
import React from 'react';
import ReactTable from "react-table";
import { useTable, useSortBy, useFilters, useGlobalFilter, useAsyncDebounce } from 'react-table';

function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
}) {
    const count = preGlobalFilteredRows.length
    const [value, setValue] = React.useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined)
    }, 200)

    return (
        <span>
            Search:{' '}
            <input
                value={value || ""}
                onChange={e => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                placeholder={`${count} records...`}
                style={{
                    fontSize: '1.1rem',
                    border: '0',
                }}
            />
        </span>
    )
}

// Define a default UI for filtering
function DefaultColumnFilter({
    column: { filterValue, preFilteredRows, setFilter },
}) {
    const count = preFilteredRows.length

    return (
        <input
            value={filterValue || ''}
            onChange={e => {
                setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
            }}
            placeholder={`Search ${count} records...`}
        />
    )
}

function TableDemo() {

    const data = React.useMemo(
        () => [
            {
                col1: 'Minsk',
                col2: '27',
                col3: 'rain',
                col4: '739',
                col5: '90',
            },
            {
                col1: 'Vilnius',
                col2: '30',
                col3: 'rain',
                col4: '740',
                col5: '87',
            },
            {
                col1: 'London',
                col2: '23',
                col3: 'rain',
                col4: '743',
                col5: '77',
            },
            {
                col1: 'Madrid',
                col2: '34',
                col3: 'sunny',
                col4: '738',
                col5: '40',
            },
            {
                col1: 'Warsaw',
                col2: '25',
                col3: 'heavy rain',
                col4: '739',
                col5: '88',
            },
        ],
        []
    )

    const columns = React.useMemo(
        () => [
            {
                Header: 'City',
                accessor: 'col1', // accessor is the "key" in the data
            },
            {
                Header: 'Temperature',
                accessor: 'col2',
            },
            {
                Header: 'Weather Forecast',
                accessor: 'col3',
            },
            {
                Header: 'Pressure',
                accessor: 'col4',
            },
            {
                Header: 'Humidity',
                accessor: 'col5',
            },
        ],
        []
    )

    const defaultColumn = React.useMemo(
        () => ({
            // Let's set up our default Filter UI
            Filter: DefaultColumnFilter,
        }),
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        visibleColumns,
        preGlobalFilteredRows,
        setGlobalFilter,
    } = useTable(
        {
            columns,
            data,
            defaultColumn, // Be sure to pass the defaultColumn option
        },
        useFilters,
        useGlobalFilter,
        useSortBy
    );

    return (
        <div style={{ marginTop: 100, marginLeft: 150 }}>
            <table {...getTableProps()} style={{ border: 'solid 1px black' }}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                    style={{
                                        borderBottom: 'solid 3px red',
                                        color: 'black',
                                    }}
                                >
                                    {column.render('Header')}
                                    <span style={{ marginLeft: 30 }}>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? '🔽'
                                                : '🔼'
                                            : ''}
                                    </span>
                                    <div>{column.canFilter ? column.render('Filter') : null}</div>
                                </th>
                            ))}
                        </tr>
                    ))}
                    <tr>
                        <th
                            colSpan={visibleColumns.length}
                            style={{
                                textAlign: 'left',
                            }}
                        >
                            <GlobalFilter
                                preGlobalFilteredRows={preGlobalFilteredRows}
                                globalFilter={state.globalFilter}
                                setGlobalFilter={setGlobalFilter}
                            />
                        </th>
                    </tr>
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td
                                            {...cell.getCellProps()}
                                            style={{
                                                padding: '10px',
                                                border: 'solid 1px gray',
                                            }}
                                        >
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default TableDemo;

