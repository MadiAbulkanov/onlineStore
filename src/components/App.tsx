import { Route, Routes } from 'react-router-dom'
import { Layout } from './layout/Layout.tsx'
import { MainPage } from './MainPage/MainPage.tsx'
import { LoginForm } from './Form/LoginForm/LoginForm.tsx'
import { ProductInfoPage } from './ProductInfoPage/ProductInfoPage.tsx'
import { AboutUs } from './InfoPages/AboutUs/AboutUs.tsx'
import { FAQ } from './InfoPages/FAQ/FAQ.tsx'
import { Contact } from './InfoPages/Contact/Contact.tsx'
import { Delivery } from './InfoPages/Delivery/Delivery.tsx'
import { StorePolicy } from './InfoPages/StorePolicy/StorePolicy.tsx'
import { BasketPage } from './BasketPage/BasketPage.tsx'
import { ScrollToTop } from './helpers/ScrollToTop/ScrollToTop.tsx'
import {ProductsRouter} from "./ProductsRouter/ProductsRouter.tsx";

function App() {

  return (
    <>
    <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path='/:category' element={<ProductsRouter />} />
          <Route path='/product/:id' element={<ProductInfoPage />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/delivery' element={<Delivery />} />
          <Route path='/store-polyce' element={<StorePolicy />} />
          <Route path='/basket' element={<BasketPage />} />
        </Route>
        <Route path='/login' element={<LoginForm />} />
      </Routes>
    </>
  )
}

export default App;
