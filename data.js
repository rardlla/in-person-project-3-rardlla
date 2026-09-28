// Week 4 JavaScript Portfolio Project - Data Organization
// Students will learn to organize their portfolio data using JavaScript objects and arrays

// TODO: Fill in your personal information
const portfolio = {
    // Personal information object
    owner: {
        name: "Riska Ardilla Putri",        // TODO: Add your name
        title: "UX Researcher & Designer",      // TODO: Add your professional title
        email: "riskardlla@berkeley.edu", // TODO: Add your email
        location: "Berkeley,CA",  // TODO: Add your location
        bio: "Passionate about creating user-centered designs and conducting impactful research" // TODO: Add your bio
    },
    
    // Skills as an array
    skills: [
        "Qualitative Research",   // TODO: Replace with your actual skills
        "Quantitative Research",  // TODO: Add more skills
        "UX Research",    // TODO: Students should have at least 5 skills
        "UX Design",
        "Figma",
        "Canva"
        // TODO: Add more skills - aim for 5-7 skills total
    ],
    
    // Projects as array of objects
    projects: [
        {
            title: "Revamp UI/UX Digital Loan App “AwanTempo”",
            description: "A study to uncover what was really holding users of AwanTempo (micro-lending app) to disburse without someone walking them through it",
            technologies: ["Qualitative Research", "UX Researcher"], // Array of technologies used
            completionDate: "2025-08-15",   // When you completed it
            featured: true                   // Is this a featured project?
        },
        {
            title: "Finding the Right Home for 23,000+ Indonesian Midwives",
            description: "A research initiative to find the right e-learning platform for 23,000+ Indonesian midwives by listening closely to the people who would use it every day, and letting their experience shape the final recommendation",
            technologies: ["Qualitative Research", "UX Researcher"],
            completionDate: "2025-09-01",
            featured: true
        },
        {
            title: "How Design Decisions Create Data Problem for Pregnancy Risk Detection Feature", 
            description: "A research initiative to understand how midwives actually use the app in the field, and what that means for the accuracy of pregnancy risk detection",
            technologies: ["Qualitative Research", "UX Researcher"],
            completionDate: "2025-09-01",
            featured: true
        }
        // TODO: Add more projects during class
    ],
    
    // Contact and availability information
    availability: {
        freelance: true,    // TODO: Set to true if available for freelance work
        fullTime: false,     // TODO: Set to true if seeking full-time position
        partTime: true       // TODO: Set to true if available for part-time work
    }
};

// Let's explore our data structure in the console
console.log("=== PORTFOLIO DATA EXPLORER ===");
console.log("Full portfolio object:", portfolio);

// TODO: During class, we'll add more console.log() statements to explore the data
// Examples students will try:
// console.log("Owner name:", portfolio.owner.name);
// console.log("First skill:", portfolio.skills[0]);
// console.log("Number of projects:", portfolio.projects.length);
console.log("My name:", portfolio.owner.name);
console.log("Total skills:", portfolio.skills.length);
console.log("First project:", portfolio.projects[0]);

// TODO: Students will learn to access nested properties
// console.log("Email:", portfolio.owner.email);
// console.log("Second project:", portfolio.projects[1]);
// console.log("Available for freelance?", portfolio.availability.freelance);

// TODO: Students will create summary strings using template literals
// let summary = `${portfolio.owner.name} is a ${portfolio.owner.title} with ${portfolio.skills.length} skills.`;
// console.log("Summary:", summary);
