import React, { useEffect, useState } from 'react'
import Container from '../components/Layouts/Container'
import Flex from '../components/Layouts/Flex'
import SideBar from '../components/Layouts/SideBar'
import Pagination from '../components/Layouts/Pagination'
import BreadCrumb from '../components/Layouts/BreadCrumb'
import Filter from '../components/Layouts/Filter'

const Shop = () => {
  const [products, setProducts] = useState([])
  const [productsShow, setProductsShow] = useState([12])
  useEffect(() => {
    const showAllProduct = async () => {
      await fetch("https://dummyjson.com/products?limit=100").then((res) => res.json()).then((data) => setProducts(data.products));
    }
    showAllProduct();
  }, [])
  const handleShow=(e)=>{
    setProductsShow(e.target.value)
  }
  return (
    <section className=' font-dm'>
      <Container>
        <BreadCrumb
          path={window.location.pathname}
          name={window.location.pathname.split("/")[1]}
          pathName={window.location.pathname.split("/")[1]}
        />
        <Flex className={"gap-8"}>
          <SideBar></SideBar>
          <Flex className={"flex-col w-[1190px]"}>
            <Flex className={"justify-end gap-x-10"}>
            <Filter labelName={"Sort by:"} className={"w-[239px]"}>
                 <option value={""}>Featured</option>
                 <option value={""}>Top sales</option>
            </Filter>
            <Filter labelName={"Show:"} className={"w-[139px]"} handleFung={handleShow}>
                 <option value={"12"}>12</option>
                 <option value={"24"}>24</option>
                 <option value={"36"}>36</option>
                 <option value={"48"}>48</option>
            </Filter>
            </Flex>
            <Pagination itemsPerPage={productsShow} data={products} />
          </Flex>
        </Flex>
      </Container>
    </section>
  )
}

export default Shop