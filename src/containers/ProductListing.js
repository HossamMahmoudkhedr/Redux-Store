import React, {useEffect} from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from '../containers/ProductComponent'
import { setProducts } from '../redux/actions/productActions'
const ProductListing = () => {
  const products = useSelector((state) => state)
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products').catch((err) => {
      console.log(err)
    })
    dispatch(setProducts(response.data))
  }
  console.log(products)
  useEffect(() => {
    fetchProducts()
  }, [])
  console.log("products:", products)
  return (
    <ProductComponent />
  )
}

export default ProductListing