import './Main.css'

const Main = () => {
    return(
        <main className='main--container'>
            <div className='main--marker'>
                <div className='vertline'></div>
                <h1 className='pagenum'>01</h1>
            </div>

            <div className='main--images'>
                <img src="../images/desktop/image-man-texting.jpg" alt="" />
                <img src="../images/desktop/image-men-in-meeting.jpg" alt="" />
                <img src="../images/desktop/image-woman-in-videocall.jpg" alt="" />
                <img src="../images/desktop/image-women-videochatting.jpg" alt="" />
            </div>

            <div className='main--text'>
                <h2>Built for modern use</h2>
                <h1>Smarter meetings, all in one place</h1>
                <h3>
                    Send messages, share files, show your screen, 
                    and record your meetings — all in one workspace. 
                    Control who can join with invite-only team access, 
                    data encryption, and data export.
                </h3>
            </div>

            <div className='main--marker2'>
                <div className='vertline'></div>
                <h1 className='pagenum whitebg'>02</h1>
            </div>
        </main>
    )
}

export default Main