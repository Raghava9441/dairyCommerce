import React, { useState } from 'react';
import { TextField, Select, MenuItem, Button, InputAdornment, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface ProductSearchProps {
    onSearch: (searchTerm: string, category: string) => void;
}

const ProductSearch: React.FC<ProductSearchProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('');

    const handleSearch = () => {
        onSearch(searchTerm, category);
    };

    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <InputBase
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for products"
                />
                <Select
                    variant='filled'
                    value={category}
                    onChange={(e) => setCategory(e.target.value as string)}
                    displayEmpty
                    inputProps={
                        {
                            sx: {
                                width: '120px',
                                backgroundColor: "transparent",
                            },
                        }
                    }
                    sx={{
                        borderLeft: 'none',
                        borderRight: 'none',
                        width: '120px',
                    }}
                >
                    <MenuItem value="" disabled>
                        All Categories
                    </MenuItem>
                    <MenuItem value="electronics">Electronics</MenuItem>
                    <MenuItem value="clothing">Clothing</MenuItem>
                    <MenuItem value="books">Books</MenuItem>
                </Select>
                <Button variant="contained" onClick={handleSearch} sx={{ height: '100%' }}>Search</Button>
            </div >
        </Paper>
    );
};

export default ProductSearch;
