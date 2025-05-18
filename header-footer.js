class MyHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = 
        
        <header>
            <nav class="top-navigation-bar">
                <a href="index.html"> <img src="images/logo.png" alt="company-logo" class="logo" /></a>
                <ul class="top-navigation-links">
                    <li><a href="about.html" class="top-navigation-items">About</a></li>
                    <li><a href="services.html" class="top-navigation-items">Services</a></li>
                    <li><a href="#" class="top-navigation-items">Products</a></li>
                    <li><a href="#" class="top-navigation-items">Reviews</a></li>
                    <li><a href="#" class="top-navigation-items">Blog</a></li>
                    <li><a href="#" class="top-navigation-items">FAQ</a></li>
                    <li><a href="#" class="top-navigation-items">Booking</a></li>
                </ul>
                <img src="images/menu-icon.png" alt="menu-icon" class="menu-icon" />

                <ul class="social-media">
                    <li><a href="#"><img src="images/facebook.png" alt="facebook-icon" class="social-media-icons" /></a></li>
                    <li><a href="#"><img src="images/instagram.png" alt="instagram-icon" class="social-media-icons" /></a></li>
                    <li><a href="#"><img src="images/tiktok.png" alt="tiktok-icon" class="social-media-icons" /></a></li>
                    <li><a href="#"><img src="images/youtube.png" alt="youtube-icon" class="social-media-icons" /></a></li>
                </ul>
            </nav>
            
                 <div class="toggled-navigation-bar">
                    <div class="toggled-nav-items">
                        <ul class="toggled-navigation-links">
                            <li><a href="#" class="toggled-navigation-items">About</a></li>
                            <li><a href="#" class="toggled-navigation-items">Services</a></li>
                            <li><a href="#" class="toggled-navigation-items">Products</a></li>
                            <li><a href="#" class="toggled-navigation-items">Reviews</a></li>
                            <li><a href="#" class="toggled-navigation-items">Blog</a></li>
                            <li><a href="#" class="toggled-navigation-items">FAQ</a></li>
                            <li><a href="#" class="toggled-navigation-items">Booking</a></li>
                        </ul>

                        <ul class="toggled-social-media">
                            <li><a href="#"><img src="images/facebook.png" alt="facebook-icon" class="social-media-icons" /></a></li>
                            <li><a href="#"><img src="images/instagram.png" alt="instagram-icon" class="social-media-icons" /></a></li>
                            <li><a href="#"><img src="images/tiktok.png" alt="tiktok-icon" class="social-media-icons" /></a></li>
                            <li><a href="#"><img src="images/youtube.png" alt="youtube-icon" class="social-media-icons" /></a></li>
                        </ul>
                    </div>
                </div>
        </header>
        
    }
}

customElements.define('special-header', MyHeader)
