import { Tab } from '../types';

export const translations = {
  en: {
    // App Identity
    appName: 'GDG Dhahran',
    
    // Navigation
    [Tab.Home]: 'Home',
    [Tab.Explore]: 'Explore',
    [Tab.Events]: 'Events',
    [Tab.Profile]: 'Profile',
    languageToggle: 'AR',

    // Home Page
    welcomeBanner: 'Welcome to GDG Dhahran',
    welcomeGoodMorning: 'Good Morning!',
    welcomeGoodEvening: 'Good Evening!',
    quickActions: 'Quick Actions',
    yourGamification: 'Your Progress',
    xp: 'XP',
    level: 'Level',
    rank: 'Rank',
    upcomingEventsTitle: 'Upcoming Events',
    featuredContributors: 'Featured Contributors',
    trendingDiscussions: 'Trending Discussions',
    latestContent: 'Latest Content',
    latestNews: 'Latest News',

    // Explore Page
    exploreTitle: 'Explore',
    articles: 'Articles',
    videos: 'Videos',
    guides: 'Guides',
    projects: 'Projects',
    resources: 'Resources',
    jobBoard: 'Job Board',
    challenges: 'Challenges',
    discussions: 'Discussions',
    
    // Community & Content Creation
    whatToCreate: 'What would you like to create?',
    postDiscussion: 'Post Discussion',
    createArticle: 'Post Article',
    createVideo: 'Post a Video',
    createProject: 'Share a Project',

    createDiscussion: 'Create Discussion',
    whatsOnYourMind: "What's on your mind?",
    post: 'Post',
    
    createArticleTitle: 'Create a New Article',
    articleTitle: 'Article Title',
    articleContent: 'Write your article content here...',
    publishArticle: 'Publish Article',

    createVideoTitle: 'Share a Video',
    videoUrl: 'Video URL (e.g., YouTube, Vimeo)',
    shareVideo: 'Share Video',
    
    createProjectTitle: 'Share a Project',
    projectUrl: 'Project URL (e.g., GitHub, Behance)',
    projectDescription: 'Briefly describe your project',
    shareProject: 'Share Project',

    // Events Page
    eventsPageTitle: 'Events',
    upcoming: 'Upcoming',
    past: 'Past',

    // Profile Page
    profileTitle: 'My Profile',
    myBadges: 'My Badges',
    myContributions: 'My Contributions',
    myCheckIns: 'Event Check-ins',
    savedItems: 'Saved Items',
    editProfile: 'Edit Profile',
    
    // Gamification
    badgeCommunityHelper: 'Community Helper',
    badgeChallengeChampion: 'Challenge Champion',
    badgeTopContributor: 'Top Contributor',

    // Generic
    viewAll: 'View All',
    
    // Hero Section
    heroTitle: 'Google Developer Group – Dhahran',
    heroSubtitle: 'Building developer skills, growing networks, and launching local tech projects.',
    joinCommunity: 'Join the Community',
    viewEvents: 'View Events',
    
    // Stats
    membersJoined: 'Members Joined',
    projectsBuilt: 'Projects Built',
    
    // Events
    rsvp: 'RSVP',
    eventTitle1: 'DevFest Dhahran 2024',
    eventDate1: 'Dec 15, 2024 | 9:00 AM',
    eventLocation1: 'KFUPM, Dhahran',
    eventSpeaker1: 'Various Speakers',
    eventCategory1: 'AI/ML',
    eventTitle2: 'Intro to Gemini API',
    eventDate2: 'Nov 22, 2024 | 6:00 PM',
    eventLocation2: 'Online',
    eventSpeaker2: 'Ahmed Al-Mansoori',
    eventCategory2: 'AI/ML',
    eventTitle3: 'Flutter Workshop',
    eventDate3: 'Oct 30, 2024 | 7:00 PM',
    eventLocation3: 'The Garage, Khobar',
    eventSpeaker3: 'Fatima Al-Zahra',
    eventCategory3: 'Mobile',
    eventTitle4: 'Web Performance Deep Dive',
    eventDate4: 'Sep 10, 2024 | 5:00 PM',
    eventLocation4: 'Online',
    eventSpeaker4: 'Yousef Al-Harbi',
    eventCategory4: 'Web',

    // RSVP Modal
    rsvpModalTitle: 'RSVP for this Event',
    rsvpModalText: 'You will be redirected to our registration page to confirm your attendance. We look forward to seeing you there!',
    rsvpModalGoogleForm: 'Proceed to Google Form',
    rsvpModalClose: 'Close',

    // Content
    articleTitle1: 'Mastering State Management in Flutter',
    articleTitle2: 'A Guide to the Gemini API for Web Devs',
    postTitle1: 'Best practices for deploying on Google Cloud Run?',
    postTitle2: 'Anyone attending the upcoming Web Dev meetup?',
    
    // Footer
    footerText: `© ${new Date().getFullYear()} Google Developer Group – Dhahran`,
    privacyPolicy: 'Privacy Policy',
    codeOfConduct: 'Code of Conduct',

    // FIX: Add missing translations
    // About Page
    aboutTitle: 'About GDG Dhahran',
    missionStatement: 'Our Mission',
    missionText: 'To be a platform for developers to connect, learn, and grow together, fostering a vibrant tech community in the Eastern Province.',
    whoWeAre: 'Who We Are',
    whoWeAreText: 'We are a passionate group of developers, students, and tech enthusiasts who are dedicated to sharing knowledge and building a strong local tech ecosystem.',
    whatWeDo: 'What We Do',
    whatWeDoText: 'We organize a variety of events, including tech talks, workshops, study jams, and our annual flagship event, DevFest. These events cover a wide range of technologies, from mobile and web development to cloud and AI.',
    teamMembers: 'Meet the Team',
    codeOfConductSummaryTitle: 'Our Community, Our Commitment',
    codeOfConductSummary: 'We are committed to providing a friendly, safe and welcoming environment for all. Please take a moment to read our full Code of Conduct.',
    linkToFullPage: 'Read the full Code of Conduct',

    // Team Members
    teamMemberName1: 'Nilesh Khedkar',
    teamMemberRole1: 'GDG Organizer',
    teamMemberName2: 'To Be Decided',
    teamMemberRole2: 'Team Member',
    teamMemberName3: 'To Be Decided',
    teamMemberRole3: 'Team Member',
    teamMemberName4: 'To Be Decided',
    teamMemberRole4: 'Team Member',
    
    // Volunteer Page
    volunteerTitle: 'Become a Volunteer',
    volunteerIntro: 'Join our team and help us build a thriving developer community. We are looking for passionate individuals to help with event organization, content creation, and more.',
    applyNow: 'Apply Now',
    formName: 'Full Name',
    formEmail: 'Email Address',
    formSkills: 'Your Skills & Experience',
    formInterests: 'Areas of Interest',
    interestPM: 'Project Management',
    interestCM: 'Community Management',
    interestSponsorship: 'Sponsorship & Partnerships',
    interestStudent: 'Student Ambassador',
    submitApplication: 'Submit Application',
    applicationSubmitted: 'Thank you for your application!',
    
    // Placeholder Page
    pageUnderConstruction: 'This page is under construction. Stay tuned!',

    // Categories
    categoryAIML: 'AI/ML',
    categoryMobile: 'Mobile',
    categoryWeb: 'Web',
    categoryCloud: 'Cloud',
  },
  ar: {
    // App Identity
    appName: 'GDG الظهران',

    // Navigation
    [Tab.Home]: 'الرئيسية',
    [Tab.Explore]: 'استكشف',
    [Tab.Events]: 'الفعاليات',
    [Tab.Profile]: 'ملفي',
    languageToggle: 'EN',
    
    // Home Page
    welcomeBanner: 'مرحبًا بكم في GDG الظهران',
    welcomeGoodMorning: 'صباح الخير!',
    welcomeGoodEvening: 'مساء الخير!',
    quickActions: 'إجراءات سريعة',
    yourGamification: 'تقدمك',
    xp: 'نقطة خبرة',
    level: 'المستوى',
    rank: 'الترتيب',
    upcomingEventsTitle: 'الفعاليات القادمة',
    featuredContributors: 'المساهمون المميزون',
    trendingDiscussions: 'النقاشات الشائعة',
    latestContent: 'أحدث المحتوى',
    latestNews: 'آخر الأخبار',
    
    // Explore Page
    exploreTitle: 'استكشف',
    articles: 'مقالات',
    videos: 'فيديوهات',
    guides: 'أدلة',
    projects: 'مشاريع',
    resources: 'مصاندر',
    jobBoard: 'وظائف',
    challenges: 'تحديات',
    discussions: 'نقاشات',

    // Community & Content Creation
    whatToCreate: 'ماذا تود أن تنشئ؟',
    postDiscussion: 'انشر نقاشًا',
    createArticle: 'انشر مقالاً',
    createVideo: 'انشر فيديو',
    createProject: 'شارك مشروعًا',

    createDiscussion: 'إنشاء نقاش',
    whatsOnYourMind: 'بماذا تفكر؟',
    post: 'نشر',
    
    createArticleTitle: 'إنشاء مقال جديد',
    articleTitle: 'عنوان المقال',
    articleContent: 'اكتب محتوى مقالك هنا...',
    publishArticle: 'نشر المقال',

    createVideoTitle: 'مشاركة فيديو',
    videoUrl: 'رابط الفيديو (مثال: يوتيوب، فيميو)',
    shareVideo: 'مشاركة الفيديو',
    
    createProjectTitle: 'مشاركة مشروع',
    projectUrl: 'رابط المشروع (مثال: GitHub, Behance)',
    projectDescription: 'صف مشروعك باختصار',
    shareProject: 'مشاركة المشروع',

    // Events Page
    eventsPageTitle: 'الفعاليات',
    upcoming: 'القادمة',
    past: 'السابقة',

    // Profile Page
    profileTitle: 'ملفي الشخصي',
    myBadges: 'أوسمتي',
    myContributions: 'مساهماتي',
    myCheckIns: 'تسجيل حضوري',
    savedItems: 'المحفوظات',
    editProfile: 'تعديل الملف الشخصي',

    // Gamification
    badgeCommunityHelper: 'مساعد المجتمع',
    badgeChallengeChampion: 'بطل التحديات',
    badgeTopContributor: 'مساهم مميز',
    
    // Generic
    viewAll: 'عرض الكل',

    // Hero Section
    heroTitle: 'مجموعة مطوري جوجل – الظهران',
    heroSubtitle: 'بناء مهارات المطورين، توسيع الشبكات، وإطلاق مشاريع تقنية محلية.',
    joinCommunity: 'انضم للمجتمع',
    viewEvents: 'عرض الفعاليات',

    // Stats
    membersJoined: 'عضو انضم',
    projectsBuilt: 'مشروع مكتمل',
    
    // Events
    rsvp: 'تسجيل',
    eventTitle1: 'مهرجان المطورين (DevFest) الظهران 2024',
    eventDate1: '15 ديسمبر 2024 | 9:00 صباحًا',
    eventLocation1: 'جامعة الملك فهد، الظهران',
    eventSpeaker1: 'متحدثون متنوعون',
    eventCategory1: 'الذكاء الاصطناعي',
    eventTitle2: 'مقدمة في Gemini API',
    eventDate2: '22 نوفمبر 2024 | 6:00 مساءً',
    eventLocation2: 'عبر الإنترنت',
    eventSpeaker2: 'أحمد المنصوري',
    eventCategory2: 'الذكاء الاصطناعي',
    eventTitle3: 'ورشة عمل Flutter',
    eventDate3: '30 أكتوبر 2024 | 7:00 مساءً',
    eventLocation3: 'ذا جراج، الخبر',
    eventSpeaker3: 'فاطمة الزهراء',
    eventCategory3: 'تطبيقات الجوال',
    eventTitle4: 'تعمق في أداء الويب',
    eventDate4: '10 سبتمبر 2024 | 5:00 مساءً',
    eventLocation4: 'عبر الإنترنت',
    eventSpeaker4: 'يوسف الحربي',
    eventCategory4: 'الويب',

    // RSVP Modal
    rsvpModalTitle: 'التسجيل في هذه الفعالية',
    rsvpModalText: 'سيتم توجيهك إلى صفحة التسجيل الخاصة بنا لتأكيد حضورك. نتطلع لرؤيتك هناك!',
    rsvpModalGoogleForm: 'الانتقال إلى نموذج جوجل',
    rsvpModalClose: 'إغلاق',

    // Content
    articleTitle1: 'إتقان إدارة الحالة في فلاتر',
    articleTitle2: 'دليل لواجهة Gemini API لمطوري الويب',
    postTitle1: 'ما هي أفضل الممارسات للنشر على Google Cloud Run؟',
    postTitle2: 'هل سيحضر أحد لقاء مطوري الويب القادم؟',

    // Footer
    footerText: `© ${new Date().getFullYear()} مجموعة مطوري جوجل – الظهران`,
    privacyPolicy: 'سياسة الخصوصية',
    codeOfConduct: 'مدونة السلوك',
    
    // FIX: Add missing translations
    // About Page
    aboutTitle: 'حول GDG الظهران',
    missionStatement: 'مهمتنا',
    missionText: 'أن نكون منصة للمطورين للتواصل والتعلم والنمو معًا، مما يعزز مجتمعًا تقنيًا نابضًا بالحياة في المنطقة الشرقية.',
    whoWeAre: 'من نحن',
    whoWeAreText: 'نحن مجموعة شغوفة من المطورين والطلاب وعشاق التكنولوجيا المكرسين لمشاركة المعرفة وبناء نظام بيئي تقني محلي قوي.',
    whatWeDo: 'ماذا نفعل',
    whatWeDoText: 'ننظم مجموعة متنوعة من الفعاليات، بما في ذلك المحادثات التقنية وورش العمل والجلسات الدراسية وفعاليتنا السنوية الرئيسية DevFest. تغطي هذه الفعاليات مجموعة واسعة من التقنيات، من تطوير تطبيقات الجوال والويب إلى السحابة والذكاء الاصطناعي.',
    teamMembers: 'تعرف على الفريق',
    codeOfConductSummaryTitle: 'مجتمعنا، التزامنا',
    codeOfConductSummary: 'نحن ملتزمون بتوفير بيئة ودية وآمنة ومرحبة للجميع. يرجى قضاء بعض الوقت لقراءة مدونة السلوك الكاملة الخاصة بنا.',
    linkToFullPage: 'اقرأ مدونة السلوك الكاملة',

    // Team Members
    teamMemberName1: 'نيليش كيدكر',
    teamMemberRole1: 'منظم GDG',
    teamMemberName2: 'سيتم تحديده لاحقاً',
    teamMemberRole2: 'عضو فريق',
    teamMemberName3: 'سيتم تحديده لاحقاً',
    teamMemberRole3: 'عضو فريق',
    teamMemberName4: 'سيتم تحديده لاحقاً',
    teamMemberRole4: 'عضو فريق',

    // Volunteer Page
    volunteerTitle: 'كن متطوعًا',
    volunteerIntro: 'انضم إلى فريقنا وساعدنا في بناء مجتمع مطورين مزدهر. نحن نبحث عن أفراد متحمسين للمساعدة في تنظيم الفعاليات وإنشاء المحتوى والمزيد.',
    applyNow: 'قدم الآن',
    formName: 'الاسم الكامل',
    formEmail: 'البريد الإلكتروني',
    formSkills: 'مهاراتك وخبراتك',
    formInterests: 'مجالات الاهتمام',
    interestPM: 'إدارة المشاريع',
    interestCM: 'إدارة المجتمع',
    interestSponsorship: 'الرعاية والشراكات',
    interestStudent: 'سفير الطلاب',
    submitApplication: 'إرسال الطلب',
    applicationSubmitted: 'شكرًا لتقديم طلبك!',

    // Placeholder Page
    pageUnderConstruction: 'هذه الصفحة قيد الإنشاء. ترقبوا!',

    // Categories
    categoryAIML: 'الذكاء الاصطناعي',
    categoryMobile: 'تطبيقات الجوال',
    categoryWeb: 'الويب',
    categoryCloud: 'السحابة',
  },
};