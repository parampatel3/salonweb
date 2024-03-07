export default function Home () {
    return (
        <>
        <Homebanner />
        <Homewelcome />
        </>
    );
}

function Homebanner () {
    return (
        <>
        <section class="banner_w3lspvt" id="home">
            <div class="csslider infinity" id="slider1">
                <input type="radio" name="slides" checked="checked" id="slides_1" />
                <input type="radio" name="slides" id="slides_2" />
                <input type="radio" name="slides" id="slides_3" />
                <input type="radio" name="slides" id="slides_4" />
                <ul>
                    <li>
                        <div class="banner-top">
                            <div class="overlay">
                                <div class="container">
                                    <div class="w3layouts-banner-info">
                                        <h3 class="text-wh">We make your hair <span>look <span class="clr">perfect</span></span></h3>
                                        <h4 class="text-wh">We make your hair <span>look Great, perfect!</span></h4>
                                        <a href="about.html" class="button-style mt-4 mr-2">Read More</a>
                                        <a href="#about" class="button-style mt-4">Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="banner-top1">
                            <div class="overlay">
                                <div class="container">
                                    <div class="w3layouts-banner-info">
                                        <h3 class="text-wh">Skilled Barbers Make<span>Great <span class="clr">Beards</span></span></h3>
                                        <h4 class="text-wh">We make your hair <span>look Great, perfect!</span></h4>
                                        <a href="about.html" class="button-style mt-4 mr-2">Read More</a>
                                        <a href="#about" class="button-style mt-4">Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="banner-top2">
                            <div class="overlay">
                                <div class="container">
                                    <div class="w3layouts-banner-info">
                                        <h3 class="text-wh">We make your hair <span>look <span class="clr">perfect</span></span></h3>
                                        <h4 class="text-wh">We make your hair <span>look Great, perfect!</span></h4>
                                        <a href="about.html" class="button-style mt-4 mr-2">Read More</a>
                                        <a href="#about" class="button-style mt-4">Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="banner-top3">
                            <div class="overlay">
                                <div class="container">
                                    <div class="w3layouts-banner-info">
                                        <h3 class="text-wh">Skilled Barbers Make<span>Great <span class="clr">Beards</span></span></h3>
                                        <h4 class="text-wh">We make your hair <span>look Great, perfect!</span></h4>
                                        <a href="about.html" class="button-style mt-4 mr-2">Read More</a>
                                        <a href="#about" class="button-style mt-4">Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="arrows">
                    <label for="slides_1"></label>
                    <label for="slides_2"></label>
                    <label for="slides_3"></label>
                    <label for="slides_4"></label>
                </div>
            </div>
        </section>
        </>
    );
}

function Homewelcome () {
    return (
        <>
        <section class="about py-5" id="about">
            <div class="container py-lg-5">
                <div class="row about-grids">
                    <div class="col-lg-8">
                        <h2 class="mt-lg-3">Welcome to our Hair salon</h2>
                        <h5 class="plane mt-md-4 mt-3">We make your hair <span>look Great, perfect!</span></h5>
                        <p class="">Sed ut perspiciatis unde omnis iste natus error ipsum voluptatem ut accusa ntium dolor remque laudantium, totam rem
                        aperiam, eaque ipsa quae abse illo quasi sed architecto beatae vitae dicta sut dolor etr explicabo. Morbi a luctus magna, eut rutrum
                        turpis. Sed perspiciatis unde omnis iste natus error ipsum voluptatem ut accusantium dolor.</p>
                        <p class="mt-3">Eaque ipsa quae abse illo quasi sed architecto beatae vitae dicta sut dolor etr explicabo. Morbi a luctus magna, eu rutrum
                        turpis. Sed perspiciatis unde omnis iste natus error et ipsum voluptatem ut accusantium dolor voluptatem ut accusa ntium dolor.</p>
                    </div>
                    <div class="col-lg-4 col-md-8 mt-lg-0 mt-5">
                        <div class="padding">
                            <img src="images/mustache.png" class="img-fluid" alt="" />
                            <form action="#" method="post" >
                                <div class="form-style-agile">
                                    <input placeholder="Your Name" name="name" type="text" required="" />
                                    <input placeholder="Contact Number" name="number" type="text" required="" />
                                    <input placeholder="Address" type="text" required="" />
                                    <input placeholder="Timing" type="text" required="" />
                                    <button class="book-btn btn">Quick Appointment </button>
                                </div>
                            </form>
                      </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export { Homebanner, Homewelcome }