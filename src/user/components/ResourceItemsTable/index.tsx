

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { resourceItemType } from '../../store/types';
import ButtonElement from '../Common/Button';


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
                        <TableCell align="left">
                            
                            <ButtonElement type="button" onClickMethod={deleteResourceItem} text="Revoke Access"/>
                    </TableCell>
                    </TableRow>
                })}
            </TableBody>
        </Table>
    </TableContainer>

}



export default ResourceItemsTable   