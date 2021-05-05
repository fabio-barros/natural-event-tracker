import spinner from "../assets/spinner.gif"
const Loader = () => {
    return (
        <div className="div loader">
            <img src={spinner} alt="loading"/>
            <h2>Buscando eventos</h2>
        </div>
    )
}

export default Loader
