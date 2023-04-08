import Navbar from './navbar'
// import Footer from './footer'
// import Contact from './contact'

export default function Layout({ children }) {
    return (
      <>
        {/* <Contact /> */}
        <Navbar />
        <main>{children}</main>
        {/* <Footer /> */}
      </>
    )
}