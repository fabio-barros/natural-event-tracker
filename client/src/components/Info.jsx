import "../styles/css/Info.css"

const Info = ({info}) => {
    return (
        <div className="location">
            <h2>Informações do evento</h2>
            <ul>
                <li>
                    ID: <strong>{info.id}</strong>
                </li>
                <li>

                    TITLE: <strong>{info.title}</strong>
                </li>
            </ul>
        </div>
       
    )
}

export default Info
