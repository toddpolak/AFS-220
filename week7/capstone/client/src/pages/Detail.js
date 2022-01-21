import Description from "../components/Description"
import { useLocation } from 'react-router-dom'

export default function Detail() {
    const location = useLocation()
    const { item } = location.state

    return (
        <div id="body">
            <div className="content">
                <div className="body">
                    <Description item={item} />
                </div>
            </div>
        </div>
    )
}
