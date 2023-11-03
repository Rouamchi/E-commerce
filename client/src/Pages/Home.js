import React from 'react'
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Rating from '../Components/Rating'
import { Link } from 'react-router-dom'
import products from '../allProducts'


const Home = () => {

  return (
    <>
      <Header />
      <main>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map((singleProduct) => (
                <div to={singleProduct.id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img src={singleProduct.imageSrc} alt={singleProduct.imageAlt} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-lg text-gray-700 font-sans font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        <Link to={`/ProductDetails/${singleProduct.id}`}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {singleProduct.name}
                        </Link>
                      </h3>
                      <p className="mt-1 mb-1 font-sans text-sm font-semibold uppercase leading-relaxed tracking-normal text-gray-500 antialiased">{singleProduct.color}</p>
                      <Rating value={singleProduct.rating} />
                    </div>
                    <div>
                      <p className="text-2xl mb-3 font-medium text-gray-900">
                        {singleProduct.price}</p>
                      <Link to="/ProductDetails" className="py-1 px-4 mt-2 mr-4 bg-gray-500/80 text-white font-semibold rounded hover:bg-white hover:text-gray-600 hover:border-gray-500 transition ease-in duration-200 transform active:translate-y-0">
                        Buy</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home