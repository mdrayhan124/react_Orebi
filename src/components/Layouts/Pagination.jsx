import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Product from './Product'
import Flex from './Flex';

const Pagination = ({ itemsPerPage, data }) => {
    const items = data;
    function Items({ currentItems }) {
        return (
            <>
                {currentItems &&
                    currentItems.map((product) => (
                        <Product link={`/product/${product.id}`} className={"w-[370px]"} productImg={product.thumbnail} showBadge={true} productName={product.title} productPrice={`$ ${product.price}`} badgeName={"New"} />
                    ))}
            </>
        );
    }
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };
    return (
        <>
            <Flex className={' justify-center gap-x-10 gap-y-[50px] flex-wrap'}>
                <Items currentItems={currentItems} />

            </Flex>
            <ReactPaginate
                className="flex gap-4 mt-10"
                pageLinkClassName="inline-block py-2 px-4"
                activeLinkClassName="bg-[#eb8334] text-white"
                breakLabel="..."
                nextLabel=""
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel=""
                renderOnZeroPageCount={null}
            />
        </>
    );
}

export default Pagination