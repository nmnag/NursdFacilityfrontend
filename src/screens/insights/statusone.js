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

const columns = [
    { id: 'name', 
    label: 'Name',
     minWidth: 50 
    },
    {
      id: 'pay',
      label: 'Pay',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'status',
      label: 'Status',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
  ];
  
  function createData(name, pay, status) {
    // const duration
    // if(etime-stime>=0){
    // duration = etime-stime;
    // }
    // else{
    // duration = stime-etime;
    // }
    return { name, pay, status };
  }
  
  const rows = [
    createData('Martha C.(RN)','Morning','Checked in at 6:30 am'),
    createData('Jeniffer k.(BCN)','Morning','Checked in at 6:35 am'),
    createData('Martha C.(RN)','Evening','Running Late by 5 mins'),
    createData('Jeniffer k.(BCN)','Evening','On the way'),
    createData('Martha C.(RN)','Night','Called Off Quick Schedule Shift'),
    createData('Jeniffer k.(BCN)','Night','Onboard')
    
  ];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

function Status1() {
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
            <Typography variant="h6" margin-left={20} gutterBottom component="div">
                Ward 1
            </Typography>

            <Button variant="primary">Edit</Button>{' '}
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
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
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
export default Status1;