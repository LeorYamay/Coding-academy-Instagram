import { demoStoryService } from '../services/demoData/demoStory.service'
import { demoDataService } from '../services/demoData/demoData.service';

import {StoryView} from '../cmps/StoryView'

export function HomePage() {
    demoDataService.createDemoData() 
   const stories = demoStoryService.generateRandomStories(1);
    return (
        <section className="stories-container">
           {stories.map((s, index) => 
        <div key = {index}>{<StoryView story={s}/>}</div>)}
        </section >
    )
}