const projects = {
    "FitLife" : {
        projectType:"Personal Project", 
        targetPlatform:"Mobile Application", 
        year: "2025", 
        desc: "FitLife is a cross-platform fitness application built with Flutter, designed to make workouts more accessible and personalized. It provides users with over 2000 exercises (with steps and GIFs), offline workouts, and intelligent recommendations based on personal data (age, gender, height, weight). Users can explore exercises by category, muscle group, or equipment, and save favorites for quick access. FitLife also features timers, workout plans, and custom notifications to keep users on track.",
        problem: "Many users struggle to find reliable workout guidance without paying for subscriptions or internet access.<br>Existing apps are often cluttered, hard to navigate, or lack offline functionality.\nBeginners don’t always know which exercises fit their body type, goals, or available equipment.\nStaying consistent with workouts requires reminders and simple tracking features.",
        solution: "Offering a clean, user-friendly interface with search & filter options.\nIncluding offline workouts that can be used without internet.\nProviding personalized exercise recommendations via BMI and user data.\nAllowing users to favorite exercises, create workout plans, and get notified about upcoming sessions.",
        keyFeatures: "2000+ Exercises with step-by-step guides and GIFs.\nSmart Search & Filters (by body part, muscle, or equipment).\nOffline Workouts pre-loaded for use without internet.\nPersonalized Recommendations using BMI & user profile data.\nFavorites & Custom Workout Plans with timers.\nWorkout Reminders via local notifications."
    },
    "Artify" : {
        projectType:"Personal Project",
        targetPlatform:"Mobile Application",
        year: "2025",
        desc: "Artify is a Flutter-based wallpaper application that allows users to explore, search, and download high-quality images from a wide variety of categories. Powered by the Unsplash API, Artify gives users the flexibility to browse wallpapers by category, keyword search, or discover new ones through a random feed. Users can download wallpapers in both low and high resolution, view only their downloaded wallpapers, or access all device photos to set them as home screen, lock screen, or both directly within the app.",
        problem: "Finding fresh, high-quality wallpapers can be time-consuming across multiple platforms.\nMany wallpaper apps restrict downloads or limit resolution.\nUsers often lack a smooth experience switching between downloaded and device images for wallpaper customization.",
        solution: "Providing search & category-based browsing for quick discovery.\nOffering download options (low & high quality).\nAllowing easy wallpaper management (downloaded vs all photos).\nGiving direct options to set wallpapers for home, lock, or both screens in one tap. ",
        keyFeatures: "Search wallpapers by keyword or explore categories.\nRandom wallpaper generator for fresh daily inspiration.\nHigh-quality downloads powered by Unsplash API.\nView & manage downloaded wallpapers separately.\nDirect wallpaper setting (home, lock, or both)."
    },
    "GreenPill" : {
        projectType:"Group Project", 
        targetPlatform:"Mobile Application", 
        year: "2025", 
        desc: "Greenpill is a modern e-learning app built with Flutter that enables users to discover, enroll, and track their learning journey in an engaging way. Learners can browse courses, watch embedded YouTube videos, track their progress per course as well as overall learning progress, and save courses to enroll later. Each course includes a direct feedback system that lets learners communicate with course authors.\nOn the admin side, course creators can upload, edit, or delete courses, track the total number of users and admins, and create learning challenges to boost engagement.",
        problem: "Many learning apps are complex and bloated, making it difficult for learners to track progress clearly.\nStudents often lack direct feedback channels to course authors.\nCourse creators struggle with easy course management and learner analytics.",
        solution: "Offering simple course enrollment and progress tracking (per-course & overall).\nEmbedding course videos directly via YouTube for accessibility.\nProviding direct course-level feedback between learners and authors.\nGiving admins tools to manage courses, track platform stats, and create challenges to motivate learners.",
        keyFeatures: "User side:\nEnroll in courses & save courses for later.\nWatch course videos (YouTube integration).\nProgress tracking (single course + overall progress %).\nProfile page with user details.\nFeedback submission to course authors.\n\nAdmin side:\nUpload, edit, delete courses.\nView users & admins statistics.\nCreate challenges for learners.\nPlatform-wide analytics."
    },
    "To-Do" : {
        projectType:"Personal Project", 
        targetPlatform:"Mobile Application", 
        year: "2024", 
        desc: "THis is To-Do's description",
        problem: "Problem",
        solution: "Solution",
        keyFeatures: "Key Features"
    },
    "KindBridge": {
        projectType:"Personal Project", 
        targetPlatform:"Mobile Application", 
        year: "2025", 
        desc: "The Kind-Bridge app is a Flutter-based platform designed to connect donors with NGOs in a simple and transparent way. Donors can post items they wish to donate, while NGOs can view available offers and accept donations directly through the app. The app provides a clear status-tracking system for donations, ensuring both parties remain updated at each step.",
        problem: "Donors often struggle to find reliable NGOs to donate items to.\nNGOs lack a centralized platform to easily discover and manage available donations.\nExisting donation systems can be complicated, involving unnecessary middlemen or delivery agents.",
        solution: "Directly connecting donors and NGOs in a single platform.\nAllowing donors to post, track, and manage donations.\nEnabling NGOs to accept donations easily and transparently.\nSimplifying the process by removing delivery agents.",
        keyFeatures: "Role selection: donor or NGO at sign-up.\nDonors can post items for donation.\nNGOs can view available donations and accept them.\nDonation status tracking (offered → accepted → completed).\nSimple and clean UI for quick interactions."
    }
};

const params = new URLSearchParams(window.location.search);
const projectName = params.get('name');

if(projects[projectName]){
    document.getElementById("prTitle").textContent = projectName;
    document.getElementById("headPrTitle").textContent = projectName;

    document.getElementById("headPrType").textContent = projects[projectName].projectType;
    document.getElementById("headTargetPlat").textContent = projects[projectName].targetPlatform;
    document.getElementById("headYear").textContent = projects[projectName].year;

    document.getElementById("prDisc").textContent = projects[projectName].desc;
    document.getElementById("prProblem").textContent = projects[projectName].problem;
    document.getElementById("prSolution").textContent = projects[projectName].solution;
    document.getElementById("prFeatures").textContent = projects[projectName].keyFeatures;

}
else{
    document.getElementById("prTitle").textContent = "Project Not Found";
    document.getElementById("prDisc").textContent = " ";
}
