import { demoStoryService } from '../services/demoData/demoStory.service'
import { demoDataService } from '../services/demoData/demoData.service';

import { StoryView } from '../cmps/StoryView'

export function HomePage() {
    const {users,stories}=demoDataService.createDemoData()
    // const stories = demoStoryService.generateRandomStories(2);
    return (
        <section className="stories-container">
            {stories.map((s, index) =>
                <div className='story-container' key={index}>{<StoryView story={s} />}</div>)}
        </section >
    )
}