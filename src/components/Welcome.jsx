const Welcome = (props) => {
    return (
        <div id="title">
            <h1>{props.websiteName}</h1>
            <h2>{props.websiteSubtitle}</h2>
        </div>
    )
}

export default Welcome;