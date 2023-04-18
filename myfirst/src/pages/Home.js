
import Navbar from './Navbar';



export default function Home() {

  const myStyle={
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/HomeBackground.png)`,
    height:'100vh',
    fontSize:'50px',
    backgroundSize: '100%',
    backgroundColor:'black',
    backgroundRepeat: 'no-repeat',
    margin: 0 
};
  return (
    <>
    <header style={myStyle}>  
      <Navbar />
    </header>
    <footer style={{backgroundColor:'black',color:'white',alignItems:'center',justifyContent:'center',paddingLeft:'45%',paddingBottom:'3%' }}>
      contact us
    </footer>
    </>
  );
}