import '../styles/Navbar.css';


const Navbar = () => {
  return (
    
<div class="nav">
  <div class="d1"><a href="#home">Home</a></div>
  <div class="d1"><a href="#html">Controls</a></div> 
  <div id="d2">  </div>
  <div class="d3"><input type="text" id="search" name="search" placeholder="Search"></input></div>
  <div class="d3"><button>Search</button></div>
</div>

    );
}

export default Navbar;