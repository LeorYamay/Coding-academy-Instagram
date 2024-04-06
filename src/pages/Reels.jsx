import { useParams } from 'react-router-dom'

export function Reels(){
    const params = useParams()
    
    const reelId = params.reelId
    return(
        <div>
            Reel{reelId ? (" ID = " + reelId) : ""}
        </div>
        )
}