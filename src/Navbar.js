import React from 'react'
import './Navbar.css'


const Navbar = () => {
  return (
    <div>
        <header>
            <nav class="navbar">
                <a href="#"     class="nav-branding">LUCI<span class="fer">FER</span></a>
                <ul class="nav-menu">
                    <li class="nav-item">
                        <a href="" class="nav-link">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="about.html" class="nav-link">About</a>
                    </li>
                    <li class="nav-item">
                        <a href="services.html" class="nav-link">Services</a>
                    </li>
                    <li class="nav-item">
                        <a href="services.html" class="nav-link">Contact us</a>
                    </li>
                </ul>
                <div class="hamburger">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </nav>
        </header>
        <div class="content">
		    <h4>Hello, my name is</h4>
		    <h1>Lucifer <span>Morningstar</span></h1>
		    <h3>I'm a Web Developer.</h3>
		    <div class="newslatter">
			    <form>
				    <input type="email" name="email" id="mail" placeholder="Enter Your Email"></input>
				    <input type="submit" name="submit" value="Lets Start"></input>
			    </form>
		    </div>
		</div>
    </div>
  )
}

export default Navbar