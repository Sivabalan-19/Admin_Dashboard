import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Home.css'
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill} from 'react-icons/bs'


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));


const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Level  0', 1021, 921, 1201, 1300),
    createData('Level  I', 245, 65, 245, 650),
    createData('Level  II', 137, 40, 170, 40),
    createData('Level  III', 65, 16, 0, 0),
    createData('Level  IV', 0, 0, 0, 0),
    
  ];
function Home() {

  return (
    <main className='main-container'>
        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>SYSTEMS</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>65</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Total COURSES</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>3</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>TOTAL STUDENTS</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>1526</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>MAL PRACTICE</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>51</h1>
            </div>
        </div>

        <TableContainer component={Paper} sx={{marginTop:"100px",padding:"0px 180px"}}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Levels</StyledTableCell>
            <StyledTableCell align="right">C PROGRAMMING </StyledTableCell>
            <StyledTableCell align="right">PYTHON </StyledTableCell>
            <StyledTableCell align="right">JAVA</StyledTableCell>
            <StyledTableCell align="right">UI/UX</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </main>
  )
}

export default Home