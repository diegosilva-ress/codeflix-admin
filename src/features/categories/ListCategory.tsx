import {Box, Button, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import * as React from "react";
import {useAppSelector} from "../../app/hooks";
import {selectCategories} from "./categorySlice";
import {DataGrid, GridColDef, GridRenderCellParams, GridRowsProp, renderActionsCell} from '@mui/x-data-grid';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete'

export const CategoryList = () => {
    const categories = useAppSelector(selectCategories);

    const rows: GridRowsProp = categories.map((category) => ({
        id: category.id,
        name: category.name,
        isActive: category.is_active,
        createdAt: new Date(category.created_at).toLocaleDateString('pt-BR'),
    }))

    const columns: GridColDef[] = [
        {field: 'name', headerName: 'Name', flex: 1},
        {field: 'isActive', headerName: 'Active', flex: 1, type: 'boolean', renderCell: renderIsActiveCell},
        {field: 'createdAt', headerName: 'CreatedAt', flex: 1},
        {field: 'id', headerName: 'Actions', flex: 1, renderCell: renderActionsCell},
    ]

    function renderIsActiveCell(row: GridRenderCellParams) {
        return (
            <Typography color={row.value ? 'primary' : 'secondary'}>
                {row.value ? 'Active' : 'Inactive'}
            </Typography>
        );
    }

    function renderActionsCell(params: GridRenderCellParams) {
        return (
            <IconButton color='secondary'
                        onClick={() => console.log('clicked')}
                        aria-label='delete'>
                <DeleteIcon />
            </IconButton>
        );
    }

    return (
        <Box maxWidth="lg" sx={{mt: 4, mb: 4}}>
            <Box display="flex" justifyContent="flex-end">
                <Button
                    variant="contained"
                    color="secondary"
                    component={Link}
                    to="/categories/create"
                    style={{marginBottom: "1rem"}}
                >
                    New Category
                </Button>
            </Box>
            <div style={{height: 300, width: '100%'}}>
                <DataGrid
                    rows={rows}
                    columns={columns}/>
            </div>
        </Box>
    );
}