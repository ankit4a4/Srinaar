import React from 'react'
import CraftSection from '../../../components/singleproduct/CraftSection'
import SingleProduct from '../../../components/singleproduct/SingleProduct'
import AlsoLike from '../../../components/singleproduct/AlsoLike'

const page = () => {
  return (
    <div>
     <SingleProduct />
     <CraftSection />
     <AlsoLike />
    </div>
  )
}

export default page
