const topic1 = {
    title:"How to justify content with space-between AND have everything centered?",
    date: Date.now(),
    answers: 3,
    content: "I'm running into a problem with flexbox\nI have a div that has a max-width of 920px. I want the boxes of content to fill up the div from left to right to the max possible width, with everything having equal margins. When the screen-size goes down to one box per row, I want that box to be centered on the screen.",
    likes: ["Amit", "Moshe", "John"],
    dislikes: [],
    tags: ["CSS", "React", "C#"],
    id: 1
}

const topic2 = {
    title:"How React JS index.js file contacting index.html for id references? ",
    date: Date.now(),
    answers: 3,
    content: "My doubt is I didn't mention index.js in any script tag in index.html. But how it is referencing the root div element in index.html? I was wondering as it is working fine. Please explain me.",
    likes: ["Amit", "John"],
    dislikes: ["Moshe"],
    tags: [".NET", "Cloud", "Microservices"],
    id: 2
}

export const topicsData = [topic1, topic2]