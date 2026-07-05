import Footer from "../components/shared/Footer/Footer";
import NavBar from "../components/shared/NavBar/NavBar";




export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>
    <header>
        <NavBar/>
      </header>
      <main>

     
   {children}
    </main>
    <footer>
      <Footer/>
    </footer>
   </div>
  
}
