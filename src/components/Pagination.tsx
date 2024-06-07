import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    handlePreviousPage: () => void;
    handleNextPage: () => void;
    disabledPrev: boolean;
    disabledNext: boolean;
}

const CustomPagination: React.FC<PaginationProps> = ({ totalPages, currentPage, handlePreviousPage, handleNextPage, disabledPrev, disabledNext }) => {
    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        if (page < currentPage) {
            handlePreviousPage();
        } else {
            handleNextPage();
        }
    };
    console.log(currentPage);

    return (
        <Stack spacing={2} direction="row" justifyContent="center" alignItems="center">
            {/* <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                disabled={disabledPrev && disabledNext}
                variant="outlined"
                shape="rounded"
                color="primary"
            /> */}

            <Pagination count={totalPages} variant="outlined" color="primary" />
        </Stack>
    );
};

export default CustomPagination;
