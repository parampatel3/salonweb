export default function Header() {
    return (
        <>
        <header>
            <div class="container">
                <nav class="py-md-4 py-3 d-lg-flex">
                    <div id="logo">
                        <h1> <a href="index.html"><span class="fa fa-scissors"></span> Men's Salon</a></h1>
                    </div>
                    <label for="drop" class="toggle"><span class="fa fa-bars"></span></label>
                    <input type="checkbox" id="drop" />
                    <ul class="menu mt-lg-4 ml-auto">
                        <li class="active"><a href="index.html">Home</a></li>
                        <li class=""><a href="about.html">About Us</a></li>
                        <li class=""><a href="services.html">Services</a></li>
                        <li class=""><a href="gallery.html">Gallery</a></li>
                        <li class="mr-2"><a href="contact.html">Contact</a></li>
                        <li class=""><span><span class="fa fa-phone"></span> +12 34 3456 7890</span></li>
                    </ul>
                </nav>
            </div>
        </header>
        </>
    );
}