import { demoStoryService } from '../services/demoData/demoStory.service'
import {StoryView} from '../cmps/StoryView'
export function HomePage() {
   const stories = demoStoryService.generateRandomStories(5);
    return (
        <section className="stories-container">
           {stories.map((s, index) => 
        <div key = {index}>{<StoryView story={s}/>}</div>)}
        </section >
    )
}