import React from 'react'
import ShopProducts from '../../components/shop/ShopProducts'
import ShopHero from '../../components/shop/ShopHero'

const page = () => {
  return (
    <div>
      <ShopHero heading="Explore The
Luxury" heading2="Outfits" />
      <ShopProducts />
    </div>
  )
}

export default page
