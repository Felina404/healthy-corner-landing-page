import { useEffect, useState } from 'react'

type PaginationProps = {
    itemsPerPage: number;
    totalItems: number;
    page: number;
    setPage: (page: number) => void;
};

function Pagination({itemsPerPage = 6, totalItems, page, setPage}: PaginationProps) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    return (
        <div className='flex gap-2 justify-center mt-4'>
            <button onClick={() => setPage(page -1)} disabled={page === 1} 
            className='px-3 py-1 rounded bg-grey-200 disabled:opacity-50 cursor-pointer'>
                Prev 
            </button>

            <span className='flex gap-1'>
                {totalPages <=5 ? (
                    Array.from({ length: totalPages}, (_, index) => (
                    <button 
                        key={index +1}
                        onClick = { () => setPage (index +1)} 
                        className={`px-3 py-1 rounded ${index + 1 === page ? 'bg-primary' : ''} cursor-pointer hover:bg-muted`}>
                        {index + 1}
                        </button>
                ))
                ): (
                    <>
                    <button 
                        onClick = { () => setPage (1)}
                        className={`px-3 py-1 rounded ${page === 1 ? 'bg-primary' : ''} cursor-pointer hover:bg-muted'`}>
                        1
                    </button>
                    {page > 3 && <span className='px-2'>...</span>}
                    {Array.from({length: 3}, (_, index) => {
                        const pageNum = page === 1 ? index + 2 : page === totalPages ? totalPages - 2 + index : page - 1 + index;
                        if (pageNum > 1 && pageNum < totalPages) {
                            return (
                                <button 
                                    key={pageNum}
                                    onClick = { () => setPage (pageNum)}
                                    className={`px-3 py-1 rounded ${pageNum === page ? 'bg-primary' : ''} cursor-pointer hover:bg-muted'}`}>
                                    {pageNum}
                                </button>
                            );
                        }
                        return null;
                    })}
                     {page < totalPages - 2 && <span className='px-2'>...</span>}
                    <button
                        onClick = { () => setPage (totalPages)}
                        className={`px-3 py-1 rounded ${page === totalPages ? 'bg-primary' : ''} cursor-pointer hover:bg-muted}`}>
                        {totalPages}
                    </button>
                    </>
                )}               
            </span>

            <button onClick={() => setPage(page +1)} disabled={page === totalPages}
             className='px-3 py-1 rounded bg-grey-200 disabled:opacity-50  cursor-pointer'>
                Next
            </button>
        </div>
    )
}

export default Pagination;
