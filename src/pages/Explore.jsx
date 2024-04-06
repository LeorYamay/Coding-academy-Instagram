import { useParams } from 'react-router-dom'

export function Explore() {
    const params = useParams()
    const tag = params.tagName
    return (
        <div>
            explore{tag ? (" tag = " + tag) : ""}
        </div>
    )
}