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
        </div>
    )
}

export default Home;