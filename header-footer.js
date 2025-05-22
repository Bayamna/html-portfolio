class MyHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = 
        
        `<header>
            <nav class="top-navigation-bar">
                <a href="index.html"> <img src="images/logo.png" alt="company-logo" class="logo" /></a>
                <ul class="top-navigation-links">
                    <li><a href="index.html" class="top-navigation-link">Home</a></li>
                    <li><a href="about.html" class="top-navigation-link">About</a></li>
                    <li><a href="services.html" class="top-navigation-link">Services</a></li>
                    <li><a href="#" class="top-navigation-link">Products</a></li>
                    <li><a href="#" class="top-navigation-link">Reviews</a></li>
                    <li><a href="#" class="top-navigation-link">Blog</a></li>
                    <li><a href="#" class="top-navigation-link">FAQ</a></li>
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
                            <li><a href="index.html" class="toggled-navigation-link">Home</a></li>
                            <li><a href="about.html" class="toggled-navigation-link">About</a></li>
                            <li><a href="services.html" class="toggled-navigation-link">Services</a></li>
                            <li><a href="#" class="toggled-navigation-link">Products</a></li>
                            <li><a href="#" class="toggled-navigation-link">Reviews</a></li>
                            <li><a href="#" class="toggled-navigation-link">Blog</a></li>
                            <li><a href="#" class="toggled-navigation-link">FAQ's</a></li>
                            <li><a href="#" class="toggled-navigation-link">Booking</a></li>
                        </ul>

                        <ul class="toggled-social-media">
                            <li><a href="#"><img src="images/facebook.png" alt="facebook-icon" class="social-media-icons" /></a></li>
                            <li><a href="#"><img src="images/instagram.png" alt="instagram-icon" class="social-media-icons" /></a></li>
                            <li><a href="#"><img src="images/tiktok.png" alt="tiktok-icon" class="social-media-icons" /></a></li>
                            <li><a href="#"><img src="images/youtube.png" alt="youtube-icon" class="social-media-icons" /></a></li>
                        </ul>
                    </div>
                </div>
        </header>`
    }
}

customElements.define('special-header', MyHeader)

class MyFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML =
        
        `<footer class="footer-wrapper">
            <div class="footer-items">
                <p class="copyright-text">Curves Republic Ltd. © 2025.</p>
                <div class="contacts">
                    <div class="contact-icon-background">
                        <img src="images/call.png" alt="call-icon" class="contact-icons">
                    </div>
                    <div class="contact-icon-background">
                        <img src="images/whatsapp.png" alt="whatsapp-icon" class="contact-icons" >
                    </div>
                    <p class="contact-numbers">024 378 3130 - 020 431 8170</p>
                </div>
            </div>
        </footer>`
    }

}
customElements.define('special-footer', MyFooter)
