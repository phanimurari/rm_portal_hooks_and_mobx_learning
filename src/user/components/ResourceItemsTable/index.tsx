

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { resourceItemType } from '../../store/types';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

interface tablePropTypes {
    listOfResources: Array<resourceItemType>;
    onDeleteResourceItem : (resourceItemId: number) => void
}



const ResourceItemsTable = (props: tablePropTypes) => {
    
    const { listOfResources , onDeleteResourceItem} = props

  
    
    
    return <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Resource Id</TableCell>
                    <TableCell align="left">Resource Name</TableCell>
                    <TableCell align="left">Responsible Person(RP)</TableCell>
                    <TableCell align="left">Team</TableCell>
                    <TableCell align="left">Allotment Date</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {listOfResources.map((resourceItem) => {
                
                    const deleteResourceItem = () => onDeleteResourceItem(resourceItem.resource_id)
                    
                    return <TableRow
                        key={resourceItem.resource_id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row" >
                            {resourceItem.resource_id}
                        </TableCell>
                        <TableCell align="left">{resourceItem.resource_name}</TableCell>
                        <TableCell align="left">{resourceItem.rp}</TableCell>
                        <TableCell align="left">{resourceItem.team}</TableCell>
                        <TableCell align="left">{resourceItem.using_form_date}</TableCell>
                        <TableCell align="left"><button type="button" onClick={deleteResourceItem}>Revoke Access</button></TableCell>
                    </TableRow>
                })}
            </TableBody>
        </Table>
    </TableContainer>

}



export default ResourceItemsTable   