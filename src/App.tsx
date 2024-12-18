import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { Layout } from './components/UI/Layout/Layout'
import { MainPage } from './containers/MainPage/MainPage'
import { LoginForm } from './components/Form/LoginForm/LoginForm'
import { ProductsPage } from './components/ProductsPage/ProductsPage'
import { ProductInfoPage } from './components/MainPage/ProductsBlock/ProductInfoPage/ProductInfoPage'
import { AboutUsPage } from './components/AboutUsPage/AboutUsPage'
import { FAQPage } from './components/FAQPage/FAQPage'
import { ContactPage } from './components/ContactPage/ContactPage'
import { DeliveryPage } from './components/DeliveryPage/DeliveryPage'
import { StorePolicyPage } from './components/StorePolicyPage/StorePolicyPage'
import { BasketPage } from './components/BasketPage/BasketPage'
import { ScrollToTop } from './components/UI/ScrollToTop/ScrollToTop'
import { FAQ } from './data/data'
import { DronesPage } from './components/ProductsPage/DronesPage/DronesPage'
import { CamerasPage } from './components/ProductsPage/CamerasPage/CamerasPage'
import { AccessoriesPage } from './components/ProductsPage/AccessoriesPage/AccessoriesPage'

function App() {

  return (
    <>
    <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/drones' element={<DronesPage />} />
          <Route path='/cameras' element={<CamerasPage />} />
          <Route path='/accessories' element={<AccessoriesPage />} /> 
          <Route path='/product/:id' element={<ProductInfoPage />} />
          <Route path='/about-us' element={<AboutUsPage />} />
          <Route path='/faq' element={<FAQPage qustions={FAQ} />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/delivery' element={<DeliveryPage />} />
          <Route path='/store-polyce' element={<StorePolicyPage />} />
          <Route path='/basket' element={<BasketPage />} />
        </Route>
        <Route path='/login' element={<LoginForm />} />
      </Routes>
    </>
  )
}

export default App
