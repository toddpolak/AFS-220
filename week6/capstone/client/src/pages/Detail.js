import Description from "../components/Description"
import { useLocation } from 'react-router-dom'

export default function Detail() {
    const location = useLocation()
    const { item } = location.state

    return (
        <div id="body">
            <div class="content">
                <div class="body">
                    <Description item={item} />
                </div>
            </div>
        </div>
    )
}
