import React,{ Component } from 'react';
import Customer from './components/Customer'
import './App.css';
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { withStyles } from '@material-ui/core/styles';
import { classes } from 'istanbul-lib-coverage';

const styles = theme => ({
  root: {
    width : '100%',
    marginTop: theme.spacing.unit * 3,
    overflow: "auto"
  },
  table: {
    minWidth : 1080
  }
})

const customers = [
  {
  'id' :1,
  'image':'https://placeimg.com/64/64/1',
  'name' : 'kimseungmok',
  'birthday' : '19950823',
  'gender' : 'man',
  'job' : 'programmer'
},
{
  'id' :2,
  'image':'https://placeimg.com/64/64/2',
  'name' : 'yuna',
  'birthday' : '19970815',
  'gender' : 'woman',
  'job' : 'services'
},
{
  'id' :3,
  'image':'https://placeimg.com/64/64/3',
  'name' : 'mi-tan',
  'birthday' : '19970000',
  'gender' : 'woman',
  'job' : 'services'
},
]

class App extends Component {
  render (){

    const { classes } = this.props;

    return(
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {
            customers.map(customerInfo => {
              return(
              <Customer
                key={customerInfo.id}

                id={customerInfo.id}
                image={customerInfo.image}
                name ={customerInfo.name}
                birthday ={customerInfo.birthday}
                gender ={customerInfo.gender}
                job ={customerInfo.job}
              />
              );
            })
          }
          </TableBody>
        </Table>
    </Paper>
    );
  }
}

export default withStyles(styles)(App);
