import './Hero.css'

const Hero = () => {
    return(
        <section className='hero--container'>
            <img className='hero--leftimg' src="../images/desktop/image-hero-left.png" alt="" />
            <div className='hero--text'>
                <h1 className='hero--title'>Group Chat for Everyone</h1>
                <h2 className='hero--subtitle'>
                    Meet makes it easy to connect with others 
                    face-to-face virtually and collaborate across 
                    any device.
                </h2>
                <div className='hero--buttons'>
                    <button className='hero--download'>Download <span>v1.3</span></button>
                    <button className='hero--info'>What is it?</button>
                </div>
            </div>
            <img className='hero--rightimg' src="../images/desktop/image-hero-right.png" alt="" />
        </section>
    )
}

export default Hero