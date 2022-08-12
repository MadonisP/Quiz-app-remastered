import React from 'react'

const Help = () => {
    return (
        <>
            <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", top: "0px", margin: "0", padding: "0", height: "100%", overflow: "hidden" }}>
                <iframe
                    src="https://www.youtube.com/watch?v=ZlWPKypW20Q"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen
                    title="video"
                    width="100%" height="90%"
                />{" "}
                <p>also here is a link for the help video :<a href="https://www.youtube.com/watch?v=ZlWPKypW20Q">click here</a></p>

            </div>

        </>
    )
}

export default Help