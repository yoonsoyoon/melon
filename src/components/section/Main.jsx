import Footer from "./Footer"
import Header from "./Header"
import Search from "./Search"





const Main = (props) => {
  return (
    <>
    
      <Header/>
      <main id='main' role='main'>
      <Search/>
        {props.children}
      </main>
      <Footer/>
    </>

  )
}

export default Main