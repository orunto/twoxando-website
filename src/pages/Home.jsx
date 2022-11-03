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
            <section id='experience'>
                <h1>EXPERIENCE LAGOS</h1>
                <p>Coming to PC and consoles</p>
                <button>Our Process</button>
            </section>
            <section id='onourway'>
                <h1>ON OUR WAY</h1>
                <p>Lagos dogs is in it’s early stages of developmentand in  abid to carry our fans along in the process we’ve created an updates list</p>
                <form>
                    <input type='email' name='email' id='email' placeholder='johndoe@example.com' />
                    <button type='submit'>Stay in the loop</button>
                </form>
            </section>
        </div>
    )
}

export default Home;