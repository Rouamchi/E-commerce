import React, { useEffect, useState } from "react";
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Rating from '../Components/Rating'


const ProductDetails = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([])

  const singleProduct = products.find(obj => obj._id === id)

  useEffect(() => {
    fetch('http://localhost:4000/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)

      })

      .catch((err) => {
        console.log(err)
      })

  }, [])

  if (singleProduct != null)
    return (
      <>
        <Header />
        <div className="w-full min-h-screen bg-gray-200 flex flex-col justify-center">
          <div className="relative m-3 flex flex-wrap mx-auto justify-center">
            <div className="relative block lg:flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative m-9 lg:m-0 w-4/5 lg:w-2/5 shrink-0 overflow-hidden rounded-xl lg:rounded-r-none bg-white bg-clip-border text-gray-700">
                <img key={singleProduct._id}
                  alt={singleProduct.imageAlt}
                  src={singleProduct.imageSrc}
                  className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h6 className="mb-4 mt-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                  startups {singleProduct.color}
                </h6>
                {/* Name */}
                <Link to='#' className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  {singleProduct.name}
                </Link>
                <p className="mb-4 mt-4 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                  {singleProduct.description}
                </p>

                <div className="relative block lg:flex w-full">
                  {/* Price */}
                  <div className="mt-2 w-32 h-8 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-800 antialiased">
                    Price: {singleProduct.price}$
                  </div>

                  {/* In Stock */}
                  <button className='flex lg:ml-14 select-none items-center gap-2 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none' type="button">
                    {singleProduct.countInStock > 0
                      ? <>
                        <div className=" mt-1 rounded-sm py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white bg-green-500 transition-all active:bg-green-600">
                          InStock</div>
                        <div className="mb-0 mt-1 lg:ml-4 block text-base text-gray-600 antialiased">
                          Quantity : {singleProduct.countInStock}
                        </div>
                      </>
                      : <div className=" mb-1 rounded-sm py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white bg-red-500 transition-all active:bg-red-600">
                        "Out Of Stock"</div>
                    }
                  </button>

                </div>

                {/* Rating */}
                <div className="w-36 justify-center transition-colors duration-150 text-lg md:text-xl">
                  <Rating value={singleProduct.rating} />
                </div>

                {/* Add to cart */}
                <Link className="inline-block" to="/ShoppingCart">
                  <div className="mt-4 lg:ml-8 block lg:flex justify-center gap-x-3">
                    <button href="/ShoppingCart" className="py-2 px-4 ml-4 bg-gray-600 text-white font-semibold border border-transparent rounded hover:bg-white hover:text-gray-600 hover:border-gray-600 transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
                      type='button'
                      disabled={singleProduct.countInStock === 0}>
                      Add To Cart</button>
                    <Link to="/" className="ml-3 lg py-2 px-4 bg-transparent text-gray-600 font-semibold border border-gray-600 rounded hover:bg-gray-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
                      Go Back</Link>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
}

export default ProductDetails