import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const columns = [
    { id: 'types', label: 'Ward 1',color:"secondary", minWidth: 170 },
    // { id: 'stime', label: 'Start Time', minWidth: 100 },
    // {
    //   id: 'stime',
    //   label: 'Start Time',
    //   minWidth: 170,
    //   align: 'right',
    //   format: (value) => value.toLocaleString('en-US'),
    // },
    // {
    //   id: 'etime',
    //   label: 'End Time',
    //   minWidth: 170,
    //   align: 'right',
    //   format: (value) => value.toLocaleString('en-US'),
    // },
    {
      id: 'pay',
      label: 'Pay',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toFixed(2),
    },
  ];
  
  function createData(types,pay) {
    // const duration
    // if(etime-stime>=0){
    // duration = etime-stime;
    // }
    // else{
    // duration = stime-etime;
    // }
    return { types,pay };
  }
  
  const rows1 = [
    createData( "RN", "$41.00/hr"),
    createData( "CNA","$41.00/hr"),
    createData( "CNA","$43.00/hr"),
  ];


  const rows2 = [
    createData( "RN", "$41.00/hr"),
    createData( "CNA","$41.00/hr"),
  ];


  const rows3 = [
    createData( "RN", "$41.00/hr"),
    
  ];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

function ShiftTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer 
      // className={classes.container}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <div style={{display:"inline-flex", backgroundColor:"#f1faff"}}>
            <Typography variant="h6" margin-left={20} gutterBottom component="div" backgroundColor="primary">
                Wards
            </Typography>
            <Link to="/editward" style={{color:"white"}}>
            <Button variant="contained" color="primary" >
            
              Edit details
              
            </Button>
            </Link>
            </div>

            {/* <Typography variant="h7" margin-left={20} gutterBottom component="div">
                Ward 1 
            </Typography> */}

            {/* <Button variant="primary">Edit Text</Button>{' '} */}
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
          <Typography variant="h7"  gutterBottom component="div" color="primary">
              Morning
            </Typography>
            {rows1.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
             <Typography variant="h7" color="primary" gutterBottom component="div">
                Evening
            </Typography>
            {rows2.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
            <Typography variant="h7" color="primary" gutterBottom component="div">
                Night
            </Typography>
            {rows3.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[3, 5, 30]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      /> */}
    </Paper>
  );
}
export default ShiftTable;