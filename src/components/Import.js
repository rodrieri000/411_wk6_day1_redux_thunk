import React from 'react'
import {
    Button,
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow, 
    Menu, 
    MenuItem
} from '@material-ui/core'
import { MoreVert } from '@material-ui/icons'

const Import = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [MakeId, setMakeId] = React.useState(null);
    
    const handleClick = (event, makeId) => {
        setAnchorEl(event.currentTarget);
        setMakeId(makeId);
      };
    
    const handleClose = () => {
        setAnchorEl(null);
        props.deleteMake(MakeId)
      };

    return (
        <Container maxWidth="md" className="car-container">
            <Button variant="contained" color="primary" onClick={props.fetchMakes}>Import</Button>
            <h2>Count: {props.makes.length}</h2>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Make</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.makes.map((make, index) => (
                    <TableRow key={make.MakeId}>
                        <TableCell align="left">{make.MakeId}</TableCell>
                        <TableCell align="left">{make.MakeName}</TableCell>
                        <TableCell align="right"><MoreVert onClick= {(event) => handleClick(event, index)}/></TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
            <MenuItem onClick={handleClose}>Delete</MenuItem>
          </Menu>
        </Container>
    )
   
}

export default Import