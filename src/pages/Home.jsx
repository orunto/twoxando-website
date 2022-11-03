import '../css/Home.css'

const Home = () => {
    return(
        <div className='Home'>
            <nav>
                {/* <img id='logo' src='' /> */}
                <span>TWOXANDO</span>
                
                <ul>
                    <li>Home</li>
                    <li>DevBlog</li>
                    <li>News</li>
                    <li>Contact</li>
                    <button>Waitlist</button>
                </ul>

            </nav>

            <section id='lagosdogs'>
                <h1>LAGOS DOGS</h1>
                <p>Lagos Dogs os a story driven, third person shooter following  a trail of violent crimes and cybercimes in Lagos city</p>
                <button>Learn More</button>
            </section>
        </div>
    )
}

export default Home;