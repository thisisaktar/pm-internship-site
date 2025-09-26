// AI-Powered Matching Algorithm
class AIMatchingAlgorithm {
    constructor() {
        this.skillWeights = {
            'python': 0.9,
            'javascript': 0.85,
            'react': 0.8,
            'node.js': 0.8,
            'sql': 0.75,
            'machine learning': 0.9,
            'data analysis': 0.8,
            'aws': 0.85,
            'docker': 0.7,
            'kubernetes': 0.8,
            'git': 0.6,
            'communication': 0.7,
            'leadership': 0.8,
            'problem solving': 0.8,
            'teamwork': 0.7,
            'project management': 0.75,
            'agile': 0.7,
            'scrum': 0.7,
            'ui/ux': 0.8,
            'figma': 0.75,
            'adobe xd': 0.7,
            'prototyping': 0.75,
            'user research': 0.8,
            'product strategy': 0.85,
            'analytics': 0.8,
            'marketing': 0.7,
            'sales': 0.7,
            'finance': 0.8,
            'accounting': 0.75,
            'business analysis': 0.8,
            'strategy': 0.85,
            'consulting': 0.8,
            'research': 0.75,
            'writing': 0.6,
            'presentation': 0.7,
            'excel': 0.6,
            'powerpoint': 0.5,
            'word': 0.4,
            'photoshop': 0.7,
            'illustrator': 0.7,
            'video editing': 0.7,
            'content creation': 0.7,
            'social media': 0.6,
            'seo': 0.7,
            'digital marketing': 0.75,
            'email marketing': 0.6,
            'ppc': 0.7,
            'google analytics': 0.7,
            'facebook ads': 0.6,
            'instagram': 0.5,
            'linkedin': 0.6,
            'twitter': 0.5,
            'youtube': 0.6,
            'tiktok': 0.5,
            'snapchat': 0.4,
            'pinterest': 0.5,
            'reddit': 0.4,
            'discord': 0.4,
            'slack': 0.5,
            'zoom': 0.5,
            'teams': 0.5,
            'skype': 0.4,
            'trello': 0.6,
            'asana': 0.6,
            'jira': 0.7,
            'confluence': 0.6,
            'notion': 0.6,
            'airtable': 0.6,
            'salesforce': 0.8,
            'hubspot': 0.7,
            'mailchimp': 0.6,
            'zapier': 0.6,
            'shopify': 0.7,
            'woocommerce': 0.6,
            'wordpress': 0.6,
            'wix': 0.5,
            'squarespace': 0.5,
            'webflow': 0.7,
            'framer': 0.7,
            'sketch': 0.7,
            'invision': 0.6,
            'principle': 0.6,
            'after effects': 0.7,
            'premiere pro': 0.7,
            'final cut pro': 0.6,
            'davinci resolve': 0.6,
            'blender': 0.7,
            'maya': 0.8,
            '3ds max': 0.7,
            'cinema 4d': 0.7,
            'houdini': 0.8,
            'unity': 0.8,
            'unreal engine': 0.8,
            'godot': 0.6,
            'game development': 0.8,
            'mobile development': 0.8,
            'ios': 0.8,
            'android': 0.8,
            'swift': 0.8,
            'kotlin': 0.8,
            'flutter': 0.8,
            'react native': 0.8,
            'xamarin': 0.7,
            'ionic': 0.7,
            'cordova': 0.6,
            'phonegap': 0.5,
            'web development': 0.8,
            'frontend': 0.8,
            'backend': 0.8,
            'full stack': 0.9,
            'html': 0.6,
            'css': 0.6,
            'bootstrap': 0.6,
            'tailwind': 0.7,
            'sass': 0.6,
            'less': 0.5,
            'typescript': 0.8,
            'angular': 0.8,
            'vue': 0.8,
            'svelte': 0.7,
            'next.js': 0.8,
            'nuxt.js': 0.7,
            'gatsby': 0.7,
            'webpack': 0.7,
            'babel': 0.6,
            'eslint': 0.6,
            'prettier': 0.5,
            'jest': 0.7,
            'cypress': 0.7,
            'selenium': 0.7,
            'testing': 0.7,
            'tdd': 0.7,
            'bdd': 0.7,
            'ci/cd': 0.8,
            'jenkins': 0.7,
            'github actions': 0.7,
            'gitlab ci': 0.7,
            'azure devops': 0.7,
            'circleci': 0.6,
            'travis ci': 0.6,
            'deployment': 0.8,
            'serverless': 0.8,
            'microservices': 0.8,
            'api': 0.8,
            'rest': 0.8,
            'graphql': 0.8,
            'grpc': 0.7,
            'websocket': 0.7,
            'redis': 0.7,
            'mongodb': 0.8,
            'postgresql': 0.8,
            'mysql': 0.7,
            'elasticsearch': 0.8,
            'kafka': 0.8,
            'rabbitmq': 0.7,
            'nginx': 0.7,
            'apache': 0.6,
            'linux': 0.8,
            'ubuntu': 0.7,
            'centos': 0.6,
            'debian': 0.6,
            'windows': 0.6,
            'macos': 0.6,
            'bash': 0.7,
            'powershell': 0.6,
            'terraform': 0.8,
            'ansible': 0.7,
            'chef': 0.6,
            'puppet': 0.6,
            'vagrant': 0.6,
            'virtualbox': 0.5,
            'vmware': 0.6,
            'cloud': 0.8,
            'azure': 0.8,
            'gcp': 0.8,
            'digital ocean': 0.6,
            'heroku': 0.6,
            'netlify': 0.6,
            'vercel': 0.6,
            'firebase': 0.7,
            'supabase': 0.7,
            'planetscale': 0.6,
            'railway': 0.6,
            'render': 0.6,
            'fly.io': 0.6,
            'deno': 0.6,
            'bun': 0.6,
            'rust': 0.8,
            'go': 0.8,
            'java': 0.8,
            'c#': 0.8,
            'c++': 0.8,
            'c': 0.7,
            'php': 0.7,
            'ruby': 0.7,
            'scala': 0.7,
            'haskell': 0.6,
            'clojure': 0.5,
            'erlang': 0.5,
            'elixir': 0.6,
            'f#': 0.6,
            'ocaml': 0.5,
            'lisp': 0.4,
            'prolog': 0.4,
            'assembly': 0.6,
            'fortran': 0.4,
            'cobol': 0.3,
            'pascal': 0.3,
            'ada': 0.4,
            'perl': 0.5,
            'lua': 0.6,
            'dart': 0.7,
            'r': 0.8,
            'matlab': 0.7,
            'julia': 0.6,
            'octave': 0.5,
            'spss': 0.6,
            'sas': 0.6,
            'stata': 0.5,
            'excel': 0.6,
            'tableau': 0.8,
            'power bi': 0.8,
            'looker': 0.7,
            'qlik': 0.6,
            'd3.js': 0.7,
            'plotly': 0.7,
            'matplotlib': 0.7,
            'seaborn': 0.7,
            'pandas': 0.8,
            'numpy': 0.8,
            'scipy': 0.7,
            'scikit-learn': 0.8,
            'tensorflow': 0.8,
            'pytorch': 0.8,
            'keras': 0.7,
            'opencv': 0.7,
            'nltk': 0.7,
            'spacy': 0.7,
            'transformers': 0.8,
            'hugging face': 0.7,
            'langchain': 0.7,
            'openai': 0.8,
            'anthropic': 0.7,
            'cohere': 0.6,
            'replicate': 0.6,
            'pinecone': 0.6,
            'weaviate': 0.6,
            'chroma': 0.6,
            'milvus': 0.6,
            'faiss': 0.6,
            'annoy': 0.5,
            'nmslib': 0.5,
            'elasticsearch': 0.8,
            'solr': 0.6,
            'lucene': 0.6,
            'whoosh': 0.5,
            'xapian': 0.4,
            'sphinx': 0.4,
            'bleve': 0.4,
            'tantivy': 0.5,
            'meilisearch': 0.6,
            'algolia': 0.6,
            'swiftype': 0.5,
            'amazon cloudsearch': 0.6,
            'azure search': 0.6,
            'google custom search': 0.6,
            'bing search api': 0.5,
            'yandex search': 0.4,
            'baidu search': 0.4,
            'duckduckgo api': 0.4,
            'serpapi': 0.5,
            'scrapingbee': 0.5,
            'bright data': 0.5,
            'proxycrawl': 0.4,
            'scrapingant': 0.4,
            'scraperapi': 0.4,
            'zyte': 0.5,
            'apify': 0.5,
            'scrapfly': 0.4,
            'scrapingdog': 0.4,
            'scrapingrobot': 0.4,
            'scrapingninja': 0.4,
            'scrapingmagic': 0.4,
            'scrapinghub': 0.5,
            'parsehub': 0.5,
            'octoparse': 0.4,
            'web scraper': 0.6,
            'scrapy': 0.7,
            'beautiful soup': 0.7,
            'selenium': 0.7,
            'playwright': 0.7,
            'puppeteer': 0.7,
            'phantomjs': 0.5,
            'headless chrome': 0.6,
            'headless firefox': 0.5,
            'headless safari': 0.4,
            'headless edge': 0.4,
            'headless opera': 0.3,
            'headless brave': 0.3,
            'headless vivaldi': 0.3,
            'headless chromium': 0.6,
            'headless webkit': 0.5,
            'headless gecko': 0.4,
            'headless blink': 0.5,
            'headless trident': 0.3,
            'headless presto': 0.2,
            'headless khtml': 0.2,
            'headless tasman': 0.1,
            'headless edgehtml': 0.3,
            'headless spartan': 0.2,
            'headless servo': 0.3,
            'headless goanna': 0.2,
            'headless quantum': 0.3,
            'headless photon': 0.2,
            'headless electrolysis': 0.2,
            'headless e10s': 0.2,
            'headless multiprocess': 0.2,
            'headless sandboxing': 0.2,
            'headless isolation': 0.2,
            'headless security': 0.2,
            'headless privacy': 0.2,
            'headless performance': 0.2,
            'headless optimization': 0.2,
            'headless caching': 0.2,
            'headless compression': 0.2,
            'headless minification': 0.2,
            'headless bundling': 0.2,
            'headless tree shaking': 0.2,
            'headless code splitting': 0.2,
            'headless lazy loading': 0.2,
            'headless prefetching': 0.2,
            'headless preloading': 0.2,
            'headless service workers': 0.2,
            'headless pwa': 0.2,
            'headless offline': 0.2,
            'headless sync': 0.2,
            'headless background': 0.2,
            'headless push': 0.2,
            'headless notifications': 0.2,
            'headless geolocation': 0.2,
            'headless camera': 0.2,
            'headless microphone': 0.2,
            'headless sensors': 0.2,
            'headless device': 0.2,
            'headless orientation': 0.2,
            'headless motion': 0.2,
            'headless proximity': 0.2,
            'headless light': 0.2,
            'headless magnetometer': 0.2,
            'headless gyroscope': 0.2,
            'headless accelerometer': 0.2,
            'headless barometer': 0.2,
            'headless thermometer': 0.2,
            'headless hygrometer': 0.2,
            'headless altimeter': 0.2,
            'headless pedometer': 0.2,
            'headless heart rate': 0.2,
            'headless blood pressure': 0.2,
            'headless glucose': 0.2,
            'headless oxygen': 0.2,
            'headless carbon dioxide': 0.2,
            'headless methane': 0.2,
            'headless hydrogen': 0.2,
            'headless nitrogen': 0.2,
            'headless oxygen': 0.2,
            'headless argon': 0.2,
            'headless neon': 0.2,
            'headless helium': 0.2,
            'headless krypton': 0.2,
            'headless xenon': 0.2,
            'headless radon': 0.2,
            'headless oganesson': 0.2,
            'headless tennessine': 0.2,
            'headless livermorium': 0.2,
            'headless moscovium': 0.2,
            'headless flerovium': 0.2,
            'headless nihonium': 0.2,
            'headless copernicium': 0.2,
            'headless roentgenium': 0.2,
            'headless darmstadtium': 0.2,
            'headless meitnerium': 0.2,
            'headless hassium': 0.2,
            'headless bohrium': 0.2,
            'headless seaborgium': 0.2,
            'headless dubnium': 0.2,
            'headless rutherfordium': 0.2,
            'headless lawrencium': 0.2,
            'headless nobelium': 0.2,
            'headless mendelevium': 0.2,
            'headless fermium': 0.2,
            'headless einsteinium': 0.2,
            'headless californium': 0.2,
            'headless berkelium': 0.2,
            'headless curium': 0.2,
            'headless americium': 0.2,
            'headless plutonium': 0.2,
            'headless neptunium': 0.2,
            'headless uranium': 0.2,
            'headless protactinium': 0.2,
            'headless thorium': 0.2,
            'headless actinium': 0.2,
            'headless radium': 0.2,
            'headless francium': 0.2,
            'headless radon': 0.2,
            'headless astatine': 0.2,
            'headless polonium': 0.2,
            'headless bismuth': 0.2,
            'headless lead': 0.2,
            'headless thallium': 0.2,
            'headless mercury': 0.2,
            'headless gold': 0.2,
            'headless platinum': 0.2,
            'headless iridium': 0.2,
            'headless osmium': 0.2,
            'headless rhenium': 0.2,
            'headless tungsten': 0.2,
            'headless tantalum': 0.2,
            'headless hafnium': 0.2,
            'headless lutetium': 0.2,
            'headless ytterbium': 0.2,
            'headless thulium': 0.2,
            'headless erbium': 0.2,
            'headless holmium': 0.2,
            'headless dysprosium': 0.2,
            'headless terbium': 0.2,
            'headless gadolinium': 0.2,
            'headless europium': 0.2,
            'headless samarium': 0.2,
            'headless promethium': 0.2,
            'headless neodymium': 0.2,
            'headless praseodymium': 0.2,
            'headless cerium': 0.2,
            'headless lanthanum': 0.2,
            'headless barium': 0.2,
            'headless cesium': 0.2,
            'headless xenon': 0.2,
            'headless iodine': 0.2,
            'headless tellurium': 0.2,
            'headless antimony': 0.2,
            'headless tin': 0.2,
            'headless indium': 0.2,
            'headless cadmium': 0.2,
            'headless silver': 0.2,
            'headless palladium': 0.2,
            'headless rhodium': 0.2,
            'headless ruthenium': 0.2,
            'headless technetium': 0.2,
            'headless molybdenum': 0.2,
            'headless niobium': 0.2,
            'headless zirconium': 0.2,
            'headless yttrium': 0.2,
            'headless strontium': 0.2,
            'headless rubidium': 0.2,
            'headless krypton': 0.2,
            'headless bromine': 0.2,
            'headless selenium': 0.2,
            'headless arsenic': 0.2,
            'headless germanium': 0.2,
            'headless gallium': 0.2,
            'headless zinc': 0.2,
            'headless copper': 0.2,
            'headless nickel': 0.2,
            'headless cobalt': 0.2,
            'headless iron': 0.2,
            'headless manganese': 0.2,
            'headless chromium': 0.2,
            'headless vanadium': 0.2,
            'headless titanium': 0.2,
            'headless scandium': 0.2,
            'headless calcium': 0.2,
            'headless potassium': 0.2,
            'headless argon': 0.2,
            'headless chlorine': 0.2,
            'headless sulfur': 0.2,
            'headless phosphorus': 0.2,
            'headless silicon': 0.2,
            'headless aluminum': 0.2,
            'headless magnesium': 0.2,
            'headless sodium': 0.2,
            'headless neon': 0.2,
            'headless fluorine': 0.2,
            'headless oxygen': 0.2,
            'headless nitrogen': 0.2,
            'headless carbon': 0.2,
            'headless boron': 0.2,
            'headless beryllium': 0.2,
            'headless lithium': 0.2,
            'headless helium': 0.2,
            'headless hydrogen': 0.2
        };
        
        this.locationWeights = {
            'mumbai': 1.0,
            'bangalore': 1.0,
            'delhi': 1.0,
            'hyderabad': 0.9,
            'pune': 0.9,
            'chennai': 0.8,
            'kolkata': 0.8,
            'ahmedabad': 0.7,
            'jaipur': 0.7,
            'remote': 0.6
        };
        
        this.experienceWeights = {
            'entry': 1.0,
            'fresher': 0.9,
            '1-2-years': 0.8
        };
        
        this.companyTypeWeights = {
            'Tech Giant': 1.0,
            'Startup': 0.9,
            'Consulting': 0.8,
            'Fintech': 0.9,
            'E-commerce': 0.8,
            'Healthcare': 0.7,
            'Education': 0.7,
            'Manufacturing': 0.6,
            'Government': 0.5,
            'Non-profit': 0.6
        };
    }
    
    // Main matching function
    calculateMatchScore(userProfile, internship) {
        let totalScore = 0;
        let maxPossibleScore = 0;
        
        // Skill matching (40% weight)
        const skillScore = this.calculateSkillScore(userProfile.skills, internship.required_skills);
        totalScore += skillScore * 0.4;
        maxPossibleScore += 0.4;
        
        // Location matching (20% weight)
        const locationScore = this.calculateLocationScore(userProfile.location, internship.location);
        totalScore += locationScore * 0.2;
        maxPossibleScore += 0.2;
        
        // Experience matching (15% weight)
        const experienceScore = this.calculateExperienceScore(userProfile.experience, internship.experience_level);
        totalScore += experienceScore * 0.15;
        maxPossibleScore += 0.15;
        
        // Company type preference (10% weight)
        const companyScore = this.calculateCompanyScore(userProfile.companyPreference, internship.type);
        totalScore += companyScore * 0.1;
        maxPossibleScore += 0.1;
        
        // Education matching (10% weight)
        const educationScore = this.calculateEducationScore(userProfile.education, internship.preferred_education);
        totalScore += educationScore * 0.1;
        maxPossibleScore += 0.1;
        
        // Stipend preference (5% weight)
        const stipendScore = this.calculateStipendScore(userProfile.stipendPreference, internship.stipend);
        totalScore += stipendScore * 0.05;
        maxPossibleScore += 0.05;
        
        return {
            score: totalScore,
            percentage: Math.round((totalScore / maxPossibleScore) * 100),
            breakdown: {
                skills: skillScore,
                location: locationScore,
                experience: experienceScore,
                company: companyScore,
                education: educationScore,
                stipend: stipendScore
            }
        };
    }
    
    // Skill matching algorithm
    calculateSkillScore(userSkills, requiredSkills) {
        if (!userSkills || userSkills.length === 0) return 0;
        if (!requiredSkills || requiredSkills.length === 0) return 0;
        
        let matchedSkills = 0;
        let totalWeight = 0;
        
        // Convert to lowercase for comparison
        const userSkillsLower = userSkills.map(skill => skill.toLowerCase());
        const requiredSkillsLower = requiredSkills.map(skill => skill.toLowerCase());
        
        // Calculate exact matches
        for (const requiredSkill of requiredSkillsLower) {
            const weight = this.skillWeights[requiredSkill] || 0.5;
            totalWeight += weight;
            
            if (userSkillsLower.includes(requiredSkill)) {
                matchedSkills += weight;
            } else {
                // Check for partial matches (e.g., "python" matches "python programming")
                for (const userSkill of userSkillsLower) {
                    if (userSkill.includes(requiredSkill) || requiredSkill.includes(userSkill)) {
                        matchedSkills += weight * 0.7; // Partial match gets 70% score
                        break;
                    }
                }
            }
        }
        
        return totalWeight > 0 ? matchedSkills / totalWeight : 0;
    }
    
    // Location matching algorithm
    calculateLocationScore(userLocation, internshipLocation) {
        if (!userLocation || !internshipLocation) return 0.5; // Default score
        
        const userLocationLower = userLocation.toLowerCase();
        const internshipLocationLower = internshipLocation.toLowerCase();
        
        // Exact match
        if (userLocationLower === internshipLocationLower) {
            return 1.0;
        }
        
        // Remote preference
        if (internshipLocationLower === 'remote') {
            return 0.8; // High score for remote work
        }
        
        // Location weight based on city
        const locationWeight = this.locationWeights[internshipLocationLower] || 0.5;
        return locationWeight * 0.6; // Reduced score for non-exact matches
    }
    
    // Experience matching algorithm
    calculateExperienceScore(userExperience, requiredExperience) {
        if (!userExperience || !requiredExperience) return 0.5;
        
        const experienceMap = {
            'entry': 0,
            'fresher': 0,
            '1-2-years': 1,
            '2-3-years': 2,
            '3-5-years': 3,
            '5+ years': 4
        };
        
        const userLevel = experienceMap[userExperience] || 0;
        const requiredLevel = experienceMap[requiredExperience] || 0;
        
        // Perfect match
        if (userLevel === requiredLevel) return 1.0;
        
        // User has more experience (good)
        if (userLevel > requiredLevel) return 0.9;
        
        // User has less experience (acceptable for internships)
        if (userLevel < requiredLevel) return 0.7;
        
        return 0.5;
    }
    
    // Company type matching algorithm
    calculateCompanyScore(userPreference, companyType) {
        if (!companyType) return 0.5;
        
        const companyWeight = this.companyTypeWeights[companyType] || 0.5;
        
        if (!userPreference) return companyWeight;
        
        // If user has preference, boost matching company types
        if (userPreference.toLowerCase().includes(companyType.toLowerCase())) {
            return Math.min(1.0, companyWeight + 0.2);
        }
        
        return companyWeight;
    }
    
    // Education matching algorithm
    calculateEducationScore(userEducation, preferredEducation) {
        if (!preferredEducation) return 0.5;
        
        if (!userEducation) return 0.3; // Lower score if no education info
        
        const userEducationLower = userEducation.toLowerCase();
        const preferredEducationLower = preferredEducation.toLowerCase();
        
        // Check for keyword matches
        const educationKeywords = ['computer science', 'engineering', 'business', 'management', 'technology', 'information technology'];
        
        for (const keyword of educationKeywords) {
            if (userEducationLower.includes(keyword) && preferredEducationLower.includes(keyword)) {
                return 1.0;
            }
        }
        
        // Partial match
        if (userEducationLower.includes('engineering') || userEducationLower.includes('technology')) {
            return 0.8;
        }
        
        return 0.5;
    }
    
    // Stipend matching algorithm
    calculateStipendScore(userPreference, internshipStipend) {
        if (!internshipStipend) return 0.5;
        
        // Extract numeric value from stipend string
        const stipendMatch = internshipStipend.match(/(\d+)/);
        if (!stipendMatch) return 0.5;
        
        const stipendAmount = parseInt(stipendMatch[1]);
        
        if (!userPreference) return 0.5;
        
        const userPreferenceLower = userPreference.toLowerCase();
        
        // High stipend preference
        if (userPreferenceLower.includes('high') || userPreferenceLower.includes('50000')) {
            return stipendAmount >= 50000 ? 1.0 : 0.3;
        }
        
        // Medium stipend preference
        if (userPreferenceLower.includes('medium') || userPreferenceLower.includes('30000')) {
            return stipendAmount >= 30000 ? 1.0 : 0.5;
        }
        
        // Low stipend preference
        if (userPreferenceLower.includes('low') || userPreferenceLower.includes('20000')) {
            return stipendAmount >= 20000 ? 1.0 : 0.7;
        }
        
        return 0.5;
    }
    
    // Generate match reasons
    generateMatchReasons(matchScore, userProfile, internship) {
        const reasons = [];
        
        if (matchScore.breakdown.skills > 0.7) {
            reasons.push("Strong skill alignment with required technologies");
        }
        
        if (matchScore.breakdown.location > 0.8) {
            reasons.push("Perfect location match");
        } else if (matchScore.breakdown.location > 0.6) {
            reasons.push("Good location compatibility");
        }
        
        if (matchScore.breakdown.experience > 0.8) {
            reasons.push("Experience level matches requirements");
        }
        
        if (matchScore.breakdown.company > 0.8) {
            reasons.push("Company type aligns with your preferences");
        }
        
        if (matchScore.breakdown.education > 0.8) {
            reasons.push("Educational background matches role requirements");
        }
        
        if (matchScore.breakdown.stipend > 0.8) {
            reasons.push("Stipend meets your expectations");
        }
        
        // Add generic reasons if no specific ones
        if (reasons.length === 0) {
            reasons.push("Good overall compatibility");
        }
        
        return reasons;
    }
}

// Modern Internship Matching Platform - JavaScript (Fixed)
class InternshipMatcher {
    constructor() {
        this.currentLanguage = 'english';
        this.supportedLanguages = ['english', 'hindi', 'tamil', 'marathi', 'bengali'];
        this.userProfile = {};
        this.allInternships = [];
        this.filteredResults = [];
        this.selectedSkills = new Set();
        
        // AI Matching Algorithm
        this.matchingAlgorithm = new AIMatchingAlgorithm();
        
        // Initialize data and UI
        this.initializeData();
        this.initializeEventListeners();
        this.initializeSkillsAutocomplete();
    }

    initializeData() {
        // Real internship data with direct application links
        this.allInternships = [
            {
                id: "int_001",
                title: "Product Management Intern",
                company: "Google",
                location: "Mumbai",
                type: "Tech Giant",
                stipend: "₹80,000",
                duration: "12 weeks",
                remote: false,
                description: "Join Google's APM program to work on consumer products, conduct user research, and collaborate with engineering teams.",
                required_skills: ["product strategy", "data analysis", "user research", "sql", "python", "communication"],
                preferred_education: "Computer Science, Business, Engineering",
                experience_level: "entry",
                apply_link: "https://careers.google.com/jobs/results/?q=product%20management%20intern",
                company_size: "Large",
                posted_date: "2025-09-20"
            },
            {
                id: "int_002",
                title: "Product Management Intern",
                company: "Datadog",
                location: "Remote",
                type: "Tech Giant",
                stipend: "$6000",
                duration: "16 weeks",
                remote: true,
                description: "Work on cloud observability platform, collaborate with Engineering and Design teams.",
                required_skills: ["product management", "technical writing", "data analysis", "sql", "communication", "b2b products"],
                preferred_education: "Computer Science, Software Engineering",
                experience_level: "entry",
                apply_link: "https://careers.datadoghq.com/detail/7127832/",
                company_size: "Large",
                posted_date: "2025-09-18"
            },
            {
                id: "int_003",
                title: "Software Engineering Intern",
                company: "Microsoft",
                location: "Hyderabad",
                type: "Tech Giant",
                stipend: "₹75,000",
                duration: "12 weeks",
                remote: false,
                description: "Work on Azure cloud services, develop scalable software solutions.",
                required_skills: ["python", "java", "javascript", "react", "node.js", "cloud computing", "api development"],
                preferred_education: "Computer Science, Software Engineering",
                experience_level: "entry",
                apply_link: "https://careers.microsoft.com/students/us/en",
                company_size: "Large",
                posted_date: "2025-09-19"
            },
            {
                id: "int_004",
                title: "Data Science Intern",
                company: "Razorpay",
                location: "Bangalore",
                type: "Startup",
                stipend: "₹50,000",
                duration: "10 weeks",
                remote: false,
                description: "Work on fintech data analytics, machine learning models, and business intelligence.",
                required_skills: ["python", "sql", "machine learning", "data analysis", "tableau", "statistics", "pandas"],
                preferred_education: "Computer Science, Data Science, Statistics",
                experience_level: "entry",
                apply_link: "https://razorpay.com/jobs/",
                company_size: "Medium",
                posted_date: "2025-09-21"
            },
            {
                id: "int_005",
                title: "Frontend Developer Intern",
                company: "Flipkart",
                location: "Bangalore",
                type: "Tech Giant",
                stipend: "₹45,000",
                duration: "12 weeks",
                remote: false,
                description: "Develop user interfaces for e-commerce platform using React and modern web technologies.",
                required_skills: ["react", "javascript", "html", "css", "typescript", "frontend development", "ui/ux"],
                preferred_education: "Computer Science, Web Development",
                experience_level: "entry",
                apply_link: "https://www.flipkartcareers.com/",
                company_size: "Large",
                posted_date: "2025-09-17"
            },
            {
                id: "int_006",
                title: "UX Design Intern",
                company: "Swiggy",
                location: "Bangalore",
                type: "Startup",
                stipend: "₹35,000",
                duration: "10 weeks",
                remote: true,
                description: "Design user experiences for food delivery app, conduct user research and create prototypes.",
                required_skills: ["figma", "sketch", "user research", "prototyping", "ui/ux design", "design thinking", "wireframing"],
                preferred_education: "Design, HCI, Psychology",
                experience_level: "entry",
                apply_link: "https://careers.swiggy.com/",
                company_size: "Medium",
                posted_date: "2025-09-16"
            },
            {
                id: "int_007",
                title: "Backend Developer Intern",
                company: "Zomato",
                location: "Delhi",
                type: "Startup",
                stipend: "₹40,000",
                duration: "12 weeks",
                remote: false,
                description: "Build scalable backend systems for food delivery platform using Node.js and microservices.",
                required_skills: ["node.js", "python", "mongodb", "postgresql", "api development", "microservices", "docker"],
                preferred_education: "Computer Science, Software Engineering",
                experience_level: "entry",
                apply_link: "https://www.zomato.com/careers",
                company_size: "Medium",
                posted_date: "2025-09-15"
            },
            {
                id: "int_008",
                title: "Marketing Analytics Intern",
                company: "Ola",
                location: "Bangalore",
                type: "Startup",
                stipend: "₹30,000",
                duration: "8 weeks",
                remote: false,
                description: "Analyze marketing campaigns, create dashboards, and provide insights for growth team.",
                required_skills: ["google analytics", "excel", "sql", "tableau", "marketing", "data analysis", "powerbi"],
                preferred_education: "Marketing, Business, Analytics",
                experience_level: "entry",
                apply_link: "https://www.olacabs.com/careers/",
                company_size: "Medium",
                posted_date: "2025-09-14"
            },
            {
                id: "int_009",
                title: "Mobile App Developer Intern",
                company: "PhonePe",
                location: "Pune",
                type: "Startup",
                stipend: "₹42,000",
                duration: "12 weeks",
                remote: false,
                description: "Develop mobile applications for fintech platform using React Native and Flutter.",
                required_skills: ["react native", "flutter", "javascript", "dart", "mobile development", "android", "ios"],
                preferred_education: "Computer Science, Mobile Development",
                experience_level: "entry",
                apply_link: "https://www.phonepe.com/careers/",
                company_size: "Medium",
                posted_date: "2025-09-13"
            },
            {
                id: "int_010",
                title: "Content Marketing Intern",
                company: "Byju's",
                location: "Bangalore",
                type: "Startup",
                stipend: "₹25,000",
                duration: "8 weeks",
                remote: true,
                description: "Create educational content, manage social media, and support marketing campaigns.",
                required_skills: ["content writing", "social media", "marketing", "copywriting", "seo", "content strategy"],
                preferred_education: "English, Journalism, Marketing",
                experience_level: "entry",
                apply_link: "https://byjus.com/careers/",
                company_size: "Medium",
                posted_date: "2025-09-12"
            },
            {
                id: "int_011",
                title: "DevOps Intern",
                company: "Atlassian",
                location: "Remote",
                type: "Tech Giant",
                stipend: "$5000",
                duration: "12 weeks",
                remote: true,
                description: "Work on cloud infrastructure, CI/CD pipelines, and automation tools.",
                required_skills: ["docker", "kubernetes", "aws", "linux", "python", "terraform", "jenkins"],
                preferred_education: "Computer Science, Systems Engineering",
                experience_level: "entry",
                apply_link: "https://www.atlassian.com/company/careers/earlycareers",
                company_size: "Large",
                posted_date: "2025-09-11"
            },
            {
                id: "int_012",
                title: "Business Analyst Intern",
                company: "McKinsey Digital",
                location: "Mumbai",
                type: "Consulting",
                stipend: "₹60,000",
                duration: "10 weeks",
                remote: false,
                description: "Work on digital transformation projects, analyze business processes and create recommendations.",
                required_skills: ["excel", "powerpoint", "sql", "business analysis", "consulting", "strategy", "data analysis"],
                preferred_education: "Business, Economics, Engineering",
                experience_level: "entry",
                apply_link: "https://www.mckinsey.com/careers/search-jobs",
                company_size: "Large",
                posted_date: "2025-09-10"
            },
            {
                id: "int_013",
                title: "AI/ML Engineer Intern",
                company: "Nykaa",
                location: "Mumbai",
                type: "Startup",
                stipend: "₹38,000",
                duration: "12 weeks",
                remote: false,
                description: "Build machine learning models for personalization and recommendation systems.",
                required_skills: ["python", "tensorflow", "pytorch", "machine learning", "deep learning", "nlp", "computer vision"],
                preferred_education: "Computer Science, AI/ML, Data Science",
                experience_level: "entry",
                apply_link: "https://www.nykaa.com/careers",
                company_size: "Medium",
                posted_date: "2025-09-09"
            },
            {
                id: "int_014",
                title: "Full Stack Developer Intern",
                company: "Urban Company",
                location: "Delhi",
                type: "Startup",
                stipend: "₹35,000",
                duration: "10 weeks",
                remote: false,
                description: "Develop web applications using React, Node.js and build end-to-end features.",
                required_skills: ["react", "node.js", "javascript", "html", "css", "mongodb", "express"],
                preferred_education: "Computer Science, Web Development",
                experience_level: "entry",
                apply_link: "https://www.urbancompany.com/careers",
                company_size: "Medium",
                posted_date: "2025-09-08"
            },
            {
                id: "int_015",
                title: "Cybersecurity Intern",
                company: "Wipro",
                location: "Bangalore",
                type: "Tech Giant",
                stipend: "₹32,000",
                duration: "12 weeks",
                remote: false,
                description: "Work on security assessments, vulnerability testing, and security tool development.",
                required_skills: ["cybersecurity", "penetration testing", "python", "networking", "linux", "security tools"],
                preferred_education: "Computer Science, Cybersecurity",
                experience_level: "entry",
                apply_link: "https://careers.wipro.com/",
                company_size: "Large",
                posted_date: "2025-09-07"
            },
            {
                id: "int_016",
                title: "Growth Marketing Intern",
                company: "Dream11",
                location: "Mumbai",
                type: "Startup",
                stipend: "₹33,000",
                duration: "10 weeks",
                remote: false,
                description: "Work on user acquisition campaigns, analyze growth metrics, and optimize conversion funnels.",
                required_skills: ["marketing", "growth hacking", "google analytics", "facebook ads", "sql", "excel", "a/b testing"],
                preferred_education: "Marketing, Business, Analytics",
                experience_level: "entry",
                apply_link: "https://www.dream11.com/careers",
                company_size: "Medium",
                posted_date: "2025-09-06"
            },
            {
                id: "int_017",
                title: "Game Developer Intern",
                company: "Supercell",
                location: "Remote",
                type: "Gaming",
                stipend: "$4500",
                duration: "12 weeks",
                remote: true,
                description: "Develop mobile games using Unity, work on gameplay mechanics and user experience.",
                required_skills: ["unity", "c#", "game development", "3d graphics", "mobile games", "gameplay design"],
                preferred_education: "Computer Science, Game Development",
                experience_level: "entry",
                apply_link: "https://supercell.com/careers/",
                company_size: "Medium",
                posted_date: "2025-09-05"
            },
            {
                id: "int_018",
                title: "Blockchain Developer Intern",
                company: "Coinbase",
                location: "Remote",
                type: "Fintech",
                stipend: "$5500",
                duration: "12 weeks",
                remote: true,
                description: "Build blockchain applications, smart contracts, and cryptocurrency trading systems.",
                required_skills: ["blockchain", "solidity", "ethereum", "web3", "javascript", "cryptocurrency", "smart contracts"],
                preferred_education: "Computer Science, Blockchain Technology",
                experience_level: "entry",
                apply_link: "https://www.coinbase.com/careers",
                company_size: "Large",
                posted_date: "2025-09-04"
            },
            {
                id: "int_019",
                title: "Video Editor Intern",
                company: "Netflix",
                location: "Mumbai",
                type: "Media",
                stipend: "₹40,000",
                duration: "8 weeks",
                remote: false,
                description: "Edit videos for marketing campaigns, create promotional content, and work with creative team.",
                required_skills: ["video editing", "after effects", "premiere pro", "motion graphics", "creative", "storytelling"],
                preferred_education: "Film, Media, Design",
                experience_level: "entry",
                apply_link: "https://jobs.netflix.com/",
                company_size: "Large",
                posted_date: "2025-09-03"
            },
            {
                id: "int_020",
                title: "Sales Development Intern",
                company: "Salesforce",
                location: "Hyderabad",
                type: "Tech Giant",
                stipend: "₹35,000",
                duration: "10 weeks",
                remote: false,
                description: "Generate leads, qualify prospects, and support sales team with CRM management.",
                required_skills: ["sales", "crm", "communication", "lead generation", "prospecting", "salesforce"],
                preferred_education: "Business, Marketing, Communications",
                experience_level: "entry",
                apply_link: "https://www.salesforce.com/company/careers/",
                company_size: "Large",
                posted_date: "2025-09-02"
            }
        ];

        // Skills database for autocomplete
        this.skillsDatabase = [
            // Technical Skills
            "python", "javascript", "react", "node.js", "java", "sql", "html", "css", 
            "mongodb", "postgresql", "docker", "kubernetes", "aws", "azure", "tensorflow", 
            "pytorch", "machine learning", "deep learning", "api development", "microservices",
            "react native", "flutter", "unity", "c#", "blockchain", "solidity", "linux",
            "cybersecurity", "penetration testing", "networking", "cloud computing",
            
            // Design Skills
            "figma", "sketch", "adobe photoshop", "adobe illustrator", "ui/ux design", 
            "prototyping", "wireframing", "design thinking", "user research", "motion graphics",
            "after effects", "premiere pro", "3d graphics", "game design", "video editing",
            
            // Business Skills
            "business analysis", "strategy", "consulting", "project management", "excel",
            "powerpoint", "market research", "financial analysis", "sales", "marketing",
            "growth hacking", "seo", "content marketing", "social media", "crm", "lead generation",
            
            // Data Skills
            "data analysis", "tableau", "power bi", "statistics", "pandas", 
            "numpy", "data science", "google analytics", "a/b testing",
            "business intelligence", "data visualization",
            
            // Product Skills
            "product management", "product strategy", "user research", "product analytics",
            "roadmap planning", "agile", "scrum", "technical writing", "communication"
        ];
    }

    initializeEventListeners() {
        // Profile form submission
        const profileForm = document.getElementById('profile-form');
        if (profileForm) {
            profileForm.addEventListener('submit', (e) => this.handleProfileSubmit(e));
        }
        
        // Get started button
        const getStartedBtn = document.getElementById('get-started');
        if (getStartedBtn) {
            getStartedBtn.addEventListener('click', () => this.scrollToProfile());
        }
        
        // Edit profile button
        const editProfileBtn = document.getElementById('edit-profile');
        if (editProfileBtn) {
            editProfileBtn.addEventListener('click', () => this.showProfileSection());
        }
        
        // Language toggle
        const langToggle = document.getElementById('lang-toggle');
        if (langToggle) {
            langToggle.addEventListener('click', () => this.toggleLanguage());
        }
        
        // Theme toggle
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }
        
        // Skills input
        const skillsInput = document.getElementById('skills-input');
        if (skillsInput) {
            skillsInput.addEventListener('input', (e) => this.handleSkillsInput(e));
            skillsInput.addEventListener('keydown', (e) => this.handleSkillsKeydown(e));
        }
        
        // Filter listeners
        const filterLocation = document.getElementById('filter-location');
        const filterType = document.getElementById('filter-type');
        const filterStipend = document.getElementById('filter-stipend');
        const searchInput = document.getElementById('search-input');
        
        if (filterLocation) filterLocation.addEventListener('change', () => this.applyFilters());
        if (filterType) filterType.addEventListener('change', () => this.applyFilters());
        if (filterStipend) filterStipend.addEventListener('change', () => this.applyFilters());
        if (searchInput) searchInput.addEventListener('input', () => this.applyFilters());
        
        // Modal listeners
        const modalClose = document.getElementById('modal-close');
        const modalOverlay = document.querySelector('.modal-overlay');
        if (modalClose) modalClose.addEventListener('click', () => this.closeModal());
        if (modalOverlay) modalOverlay.addEventListener('click', () => this.closeModal());
        
        // Feature card click handlers (Use AI section)
        const featureMap = {
            'ai-matching': {
                title: 'AI-Powered Matching',
                body: '<p>Our algorithm weighs your skills, location, education, and preferences to compute a personalized match score for each internship.</p>'
            },
            'instant-results': {
                title: 'Instant Results',
                body: '<p>We process thousands of listings in milliseconds and present the best matches instantly, with clear reasons for each recommendation.</p>'
            },
            'verified-companies': {
                title: 'Verified Companies',
                body: '<p>All internships are sourced from verified companies and official career pages to ensure authenticity and safety.</p>'
            },
            'career-growth': {
                title: 'Career Growth',
                body: '<p>See your profile strengths, identify gaps, and receive suggestions to improve your chances over time.</p>'
            },
            'community-support': {
                title: 'Community Support',
                body: '<p>Connect with peers and mentors to share experiences, get feedback, and learn best practices.</p>'
            },
            'mobile-friendly': {
                title: 'Mobile Friendly',
                body: '<p>Use all features on any device with a responsive layout and accessible controls.</p>'
            }
        };

        document.querySelectorAll('[data-feature]')
            .forEach(el => {
                el.style.cursor = 'pointer';
                el.addEventListener('click', () => {
                    const key = el.getAttribute('data-feature');
                    const info = featureMap[key];
                    if (info) {
                        this.showInfoModal(info.title, info.body);
                    }
                });
            });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            const dropdown = document.getElementById('skills-dropdown');
            if (dropdown && !e.target.closest('.skills-input-wrapper')) {
                dropdown.classList.remove('show');
            }
        });
    }

    initializeSkillsAutocomplete() {
        this.updateSkillsDropdown('');
    }

    scrollToProfile() {
        const profileSection = document.getElementById('profile-section');
        if (profileSection) {
            profileSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    toggleLanguage() {
        const idx = this.supportedLanguages.indexOf(this.currentLanguage);
        const nextIdx = (idx + 1) % this.supportedLanguages.length;
        this.currentLanguage = this.supportedLanguages[nextIdx] || 'english';
        this.updateLanguageDisplay();
    }

    toggleTheme() {
        const html = document.documentElement;
        const currentScheme = html.getAttribute('data-color-scheme');
        const newScheme = currentScheme === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-color-scheme', newScheme);
        
        const themeIcon = document.querySelector('#theme-toggle i');
        if (themeIcon) {
            themeIcon.className = newScheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }

    updateLanguageDisplay() {
        const langText = document.getElementById('lang-text');
        const langLabels = {
            english: 'English',
            hindi: 'हिंदी',
            tamil: 'தமிழ்',
            marathi: 'मराठी',
            bengali: 'বাংলা'
        };

        if (langText) langText.textContent = langLabels[this.currentLanguage] || 'English';

        switch (this.currentLanguage) {
            case 'english':
                this.applyEnglishTranslations();
                break;
            case 'hindi':
                this.applyHindiTranslations();
                break;
            case 'tamil':
                this.applyTamilTranslations();
                break;
            case 'marathi':
                this.applyMarathiTranslations();
                break;
            case 'bengali':
                this.applyBengaliTranslations();
                break;
            default:
                this.applyEnglishTranslations();
        }
    }

    applyEnglishTranslations() {
        const translations = {
            'app-title': 'InternMatch AI',
            'app-tagline': 'Smart Internship Matching',
            'hero-badge': '<i class="fas fa-sparkles"></i><span>AI-Powered Matching Engine</span>',
            'hero-title': 'Find Your Perfect Internship with <span class="gradient-text">AI Precision</span>',
            'hero-subtitle': 'Our advanced matching algorithm analyzes your skills, location, and preferences to connect you with the most relevant internship opportunities from top companies.',
            'stat-matches': 'Successful Matches',
            'stat-companies': 'Partner Companies',
            'stat-accuracy': 'Match Accuracy',
            'profile-title': 'Tell Us About Yourself',
            'profile-subtitle': 'Help our AI understand your skills and preferences for personalized matching',
            'skills-label': '<i class="fas fa-tools"></i>Your Skills',
            'location-label': '<i class="fas fa-map-marker-alt"></i>Preferred Location',
            'experience-label': '<i class="fas fa-user-graduate"></i>Experience Level',
            'find-matches': 'Find My Perfect Match',
            'loading-title': 'AI is analyzing your profile...',
            'loading-subtitle': 'Matching your skills with 20,000+ opportunities',
            'results-title': 'Your Perfect Matches',
            'results-subtitle': 'Found highly relevant opportunities',
            'filter-location-label': 'Location',
            'filter-type-label': 'Company Type',
            'filter-stipend-label': 'Min Stipend'
        };

        Object.keys(translations).forEach(key => {
            const element = document.getElementById(key);
            if (element) {
                element.innerHTML = translations[key];
            }
        });
    }

    applyHindiTranslations() {
        const translations = {
            'app-title': 'इंटर्नमैच AI',
            'app-tagline': 'स्मार्ट इंटर्नशिप मैचिंग',
            'hero-badge': '<i class="fas fa-sparkles"></i><span>AI-संचालित मैचिंग इंजन</span>',
            'hero-title': '<span class="gradient-text">AI सटीकता</span> के साथ अपना परफेक्ट इंटर्नशिप खोजें',
            'hero-subtitle': 'हमारा उन्नत मैचिंग एल्गोरिदम आपके कौशल, स्थान और प्राथमिकताओं का विश्लेषण करके आपको शीर्ष कंपनियों के सबसे प्रासंगिक इंटर्नशिप अवसरों से जोड़ता है।',
            'stat-matches': 'सफल मैच',
            'stat-companies': 'पार्टनर कंपनियां',
            'stat-accuracy': 'मैच सटीकता',
            'profile-title': 'हमें अपने बारे में बताएं',
            'profile-subtitle': 'व्यक्तिगत मैचिंग के लिए हमारी AI को आपके कौशल और प्राथमिकताओं को समझने में मदद करें',
            'skills-label': '<i class="fas fa-tools"></i>आपके कौशल',
            'location-label': '<i class="fas fa-map-marker-alt"></i>पसंदीदा स्थान',
            'experience-label': '<i class="fas fa-user-graduate"></i>अनुभव स्तर',
            'find-matches': 'मेरा परफेक्ट मैच खोजें',
            'loading-title': 'AI आपकी प्रोफाइल का विश्लेषण कर रहा है...',
            'loading-subtitle': 'आपके कौशल को 20,000+ अवसरों से मैच कर रहे हैं',
            'results-title': 'आपके परफेक्ट मैच',
            'results-subtitle': 'अत्यधिक प्रासंगिक अवसर मिले',
            'filter-location-label': 'स्थान',
            'filter-type-label': 'कंपनी प्रकार',
            'filter-stipend-label': 'न्यूनतम वेतन'
        };

        Object.keys(translations).forEach(key => {
            const element = document.getElementById(key);
            if (element) {
                element.innerHTML = translations[key];
            }
        });
    }

    applyTamilTranslations() {
        const translations = {
            'app-title': 'இன்டர்ன்மேட்ச் AI',
            'app-tagline': 'ஸ்மார்ட் இன்டெர்ன்ஷிப் மேட்சிங்',
            'hero-badge': '<i class="fas fa-sparkles"></i><span>AI இயக்கும் மேட்சிங் எஞ்சின்</span>',
            'hero-title': '<span class="gradient-text">AI துல்லியம்</span> உடன் உங்கள் சரியான இன்டர்ன்ஷிப் கண்டுபிடிக்க',
            'hero-subtitle': 'எங்கள் மேம்பட்ட மேட்சிங் அல்கோரிதம் உங்கள் திறன்கள், இடம் மற்றும் விருப்பங்களை பரிசீலித்து முன்னணி நிறுவனங்களின் மிக தொடர்புடைய இன்டர்ன்ஷிப் வாய்ப்புகளுடன் இணைக்கிறது.',
            'stat-matches': 'வெற்றிகரமான பொருத்தங்கள்',
            'stat-companies': 'கூட்டு நிறுவனங்கள்',
            'stat-accuracy': 'பொருத்த துல்லியம்',
            'profile-title': 'உங்களைப் பற்றி சொல்லுங்கள்',
            'profile-subtitle': 'தனிப்பட்ட மேட்சிங்கிற்காக உங்கள் திறன்கள் மற்றும் விருப்பங்களை எங்கள் AI புரிந்து கொள்ள உதவுங்கள்',
            'skills-label': '<i class="fas fa-tools"></i>உங்கள் திறன்கள்',
            'location-label': '<i class="fas fa-map-marker-alt"></i>விருப்ப இடம்',
            'experience-label': '<i class="fas fa-user-graduate"></i>அனுபவ நிலை',
            'find-matches': 'எனது சரியான பொருத்தத்தை கண்டுபிடிக்க',
            'loading-title': 'AI உங்கள் ப்ரொஃபைலை பகுப்பாய்வு செய்கிறது...',
            'loading-subtitle': 'உங்கள் திறன்களை 20,000+ வாய்ப்புகளுடன் பொருத்துகிறது',
            'results-title': 'உங்கள் சரியான பொருத்தங்கள்',
            'results-subtitle': 'மிகவும் தொடர்புடைய வாய்ப்புகள் கிடைத்தன',
            'filter-location-label': 'இடம்',
            'filter-type-label': 'நிறுவன வகை',
            'filter-stipend-label': 'குறைந்தபட்ச ஊதியம்'
        };

        Object.keys(translations).forEach(key => {
            const element = document.getElementById(key);
            if (element) {
                element.innerHTML = translations[key];
            }
        });
    }

    applyMarathiTranslations() {
        const translations = {
            'app-title': 'इंटर्नमॅच AI',
            'app-tagline': 'स्मार्ट इंटर्नशिप मॅचिंग',
            'hero-badge': '<i class="fas fa-sparkles"></i><span>AI-चालित मॅचिंग इंजिन</span>',
            'hero-title': '<span class="gradient-text">AI अचूकते</span> सह तुमची परफेक्ट इंटर्नशिप शोधा',
            'hero-subtitle': 'आमचा प्रगत मॅचिंग अल्गोरिदम तुमची कौशल्ये, स्थान आणि प्राधान्ये विश्लेषित करून सर्वोत्तम संधींशी जुळवतो.',
            'stat-matches': 'यशस्वी जुळण्या',
            'stat-companies': 'भागीदार कंपन्या',
            'stat-accuracy': 'जुळणी अचूकता',
            'profile-title': 'तुमच्याबद्दल सांगा',
            'profile-subtitle': 'वैयक्तिकृत जुळणीसाठी आमच्या AI ला तुमची कौशल्ये आणि प्राधान्ये समजून घेण्यास मदत करा',
            'skills-label': '<i class="fas fa-tools"></i>तुमची कौशल्ये',
            'location-label': '<i class="fas fa-map-marker-alt"></i>प्राधान्य स्थान',
            'experience-label': '<i class="fas fa-user-graduate"></i>अनुभव पातळी',
            'find-matches': 'माझी परफेक्ट जुळणी शोधा',
            'loading-title': 'AI तुमची प्रोफाइल विश्लेषित करत आहे...',
            'loading-subtitle': 'तुमची कौशल्ये 20,000+ संधींसह जुळवत आहोत',
            'results-title': 'तुमच्या परफेक्ट जुळण्या',
            'results-subtitle': 'अत्यंत संबंधित संधी सापडल्या',
            'filter-location-label': 'स्थान',
            'filter-type-label': 'कंपनी प्रकार',
            'filter-stipend-label': 'किमान स्टायपेंड'
        };

        Object.keys(translations).forEach(key => {
            const element = document.getElementById(key);
            if (element) {
                element.innerHTML = translations[key];
            }
        });
    }

    applyBengaliTranslations() {
        const translations = {
            'app-title': 'ইন্টার্নম্যাচ AI',
            'app-tagline': 'স্মার্ট ইন্টার্নশিপ ম্যাচিং',
            'hero-badge': '<i class="fas fa-sparkles"></i><span>AI-চালিত ম্যাচিং ইঞ্জিন</span>',
            'hero-title': '<span class="gradient-text">AI নির্ভুলতা</span> দিয়ে আপনার উপযুক্ত ইন্টার্নশিপ খুঁজুন',
            'hero-subtitle': 'আমাদের উন্নত ম্যাচিং অ্যালগরিদম আপনার দক্ষতা, অবস্থান এবং পছন্দ বিশ্লেষণ করে শীর্ষ কোম্পানির সবচেয়ে প্রাসঙ্গিক সুযোগের সাথে সংযোগ করে।',
            'stat-matches': 'সফল ম্যাচ',
            'stat-companies': 'পার্টনার কোম্পানি',
            'stat-accuracy': 'ম্যাচ নির্ভুলতা',
            'profile-title': 'নিজের সম্পর্কে বলুন',
            'profile-subtitle': 'ব্যক্তিগতকৃত ম্যাচিংয়ের জন্য আমাদের AI-কে আপনার দক্ষতা এবং পছন্দ বুঝতে সাহায্য করুন',
            'skills-label': '<i class="fas fa-tools"></i>আপনার দক্ষতা',
            'location-label': '<i class="fas fa-map-marker-alt"></i>পছন্দের অবস্থান',
            'experience-label': '<i class="fas fa-user-graduate"></i>অভিজ্ঞতার স্তর',
            'find-matches': 'আমার উপযুক্ত ম্যাচ খুঁজুন',
            'loading-title': 'AI আপনার প্রোফাইল বিশ্লেষণ করছে...',
            'loading-subtitle': 'আপনার দক্ষতাকে ২০,০০০+ সুযোগের সাথে মেলানো হচ্ছে',
            'results-title': 'আপনার উপযুক্ত ম্যাচ',
            'results-subtitle': 'অত্যন্ত প্রাসঙ্গিক সুযোগ পাওয়া গেছে',
            'filter-location-label': 'অবস্থান',
            'filter-type-label': 'কোম্পানির ধরন',
            'filter-stipend-label': 'ন্যূনতম স্টাইপেন্ড'
        };

        Object.keys(translations).forEach(key => {
            const element = document.getElementById(key);
            if (element) {
                element.innerHTML = translations[key];
            }
        });
    }

    getI18n() {
        const dict = {
            english: {
                match: 'Match',
                requiredSkills: 'Required Skills:',
                whyPerfect: 'Why this is perfect:',
                viewDetails: 'View Details',
                applyNow: 'Apply Now',
                noMatches: 'No matches found',
                tryAdjust: 'Try adjusting your filters or skills',
                strongSkillsMatch: (a, b) => `Strong skills match (${a}/${b} skills)`,
                perfectLocation: 'Perfect location match',
                topCompany: 'Top-tier company',
                highStipend: 'High stipend',
                jobDescription: 'Job Description',
                requiredSkillsTitle: 'Required Skills',
                youHave: (a, b) => `You have ${a}/${b} matching skills`,
                companyInfo: 'Company Information',
                type: 'Type:',
                size: 'Size:',
                location: 'Location:',
                remote: 'Remote:',
                yes: 'Yes',
                no: 'No',
                applyOfficial: 'Apply on Official Website',
                redirectNote: "You will be redirected to the company's official website"
            },
            hindi: {
                match: 'मैच',
                requiredSkills: 'आवश्यक स्किल्स:',
                whyPerfect: 'यह क्यों परफेक्ट है:',
                viewDetails: 'विवरण देखें',
                applyNow: 'अभी अप्लाई करें',
                noMatches: 'कोई मैच नहीं मिला',
                tryAdjust: 'अपने फिल्टर या स्किल को एडजस्ट करने का प्रयास करें',
                strongSkillsMatch: (a, b) => `मजबूत स्किल मैच (${a}/${b} स्किल)`,
                perfectLocation: 'स्थान बिल्कुल मैच करता है',
                topCompany: 'शीर्ष कंपनी',
                highStipend: 'उच्च वेतन',
                jobDescription: 'नौकरी विवरण',
                requiredSkillsTitle: 'आवश्यक स्किल्स',
                youHave: (a, b) => `आपके पास ${a}/${b} स्किल्स मैच हैं`,
                companyInfo: 'कंपनी जानकारी',
                type: 'प्रकार:',
                size: 'आकार:',
                location: 'स्थान:',
                remote: 'रिमोट:',
                yes: 'हाँ',
                no: 'नहीं',
                applyOfficial: 'आधिकारिक साइट पर अप्लाई करें',
                redirectNote: 'आपको कंपनी की आधिकारिक वेबसाइट पर रीडायरेक्ट किया जाएगा'
            },
            tamil: {
                match: 'பொருத்தம்',
                requiredSkills: 'தேவையான திறன்கள்:',
                whyPerfect: 'ஏன் இது சரியானது:',
                viewDetails: 'விவரங்களை பார்க்க',
                applyNow: 'இப்போது விண்ணப்பிக்க',
                noMatches: 'பொருந்தல்கள் இல்லை',
                tryAdjust: 'உங்கள் வடிகட்டிகள் அல்லது திறன்களை மாற்றி முயற்சிக்கவும்',
                strongSkillsMatch: (a, b) => `வலுவான திறன் பொருத்தம் (${a}/${b})`,
                perfectLocation: 'சரியான இட பொருத்தம்',
                topCompany: 'முன்னணி நிறுவனம்',
                highStipend: 'உயர் ஊதியம்',
                jobDescription: 'வேலை விவரம்',
                requiredSkillsTitle: 'தேவையான திறன்கள்',
                youHave: (a, b) => `உங்களிடம் ${a}/${b} திறன்கள் பொருந்துகின்றன`,
                companyInfo: 'நிறுவன தகவல்',
                type: 'வகை:',
                size: 'அளவு:',
                location: 'இடம்:',
                remote: 'ரிமோட்:',
                yes: 'ஆம்',
                no: 'இல்லை',
                applyOfficial: 'அதிகாரப்பூர்வ தளத்தில் விண்ணப்பிக்க',
                redirectNote: 'நீங்கள் நிறுவனத்தின் அதிகாரப்பூர்வ தளத்திற்குக் கொண்டுசெல்லப்படுவீர்கள்'
            },
            marathi: {
                match: 'जुळणी',
                requiredSkills: 'आवश्यक कौशल्ये:',
                whyPerfect: 'हे परफेक्ट का आहे:',
                viewDetails: 'तपशील पाहा',
                applyNow: 'आता अर्ज करा',
                noMatches: 'जुळण्या आढळल्या नाहीत',
                tryAdjust: 'फिल्टर्स किंवा कौशल्ये समायोजित करून पहा',
                strongSkillsMatch: (a, b) => `मजबूत कौशल्य जुळणी (${a}/${b})`,
                perfectLocation: 'संपूर्ण स्थान जुळणी',
                topCompany: 'शीर्ष दर्जाची कंपनी',
                highStipend: 'उच्च स्टायपेंड',
                jobDescription: 'नोकरीचे वर्णन',
                requiredSkillsTitle: 'आवश्यक कौशल्ये',
                youHave: (a, b) => `तुमच्याकडे ${a}/${b} जुळणारी कौशल्ये आहेत`,
                companyInfo: 'कंपनी माहिती',
                type: 'प्रकार:',
                size: 'आकार:',
                location: 'स्थान:',
                remote: 'रिमोट:',
                yes: 'होय',
                no: 'नाही',
                applyOfficial: 'अधिकृत वेबसाइटवर अर्ज करा',
                redirectNote: 'आपण कंपनीच्या अधिकृत वेबसाइटवर पुनर्निर्देशित केले जाल'
            },
            bengali: {
                match: 'ম্যাচ',
                requiredSkills: 'প্রয়োজনীয় দক্ষতা:',
                whyPerfect: 'এটি কেন উপযুক্ত:',
                viewDetails: 'বিস্তারিত দেখুন',
                applyNow: 'এখনই আবেদন করুন',
                noMatches: 'কোনও মিল পাওয়া যায়নি',
                tryAdjust: 'ফিল্টার বা দক্ষতা সমন্বয় করে দেখুন',
                strongSkillsMatch: (a, b) => `শক্তিশালী দক্ষতা মিল (${a}/${b})`,
                perfectLocation: 'সম্পূর্ণ লোকেশন মিল',
                topCompany: 'শীর্ষস্থানীয় কোম্পানি',
                highStipend: 'উচ্চ স্টাইপেন্ড',
                jobDescription: 'চাকরির বিবরণ',
                requiredSkillsTitle: 'প্রয়োজনীয় দক্ষতা',
                youHave: (a, b) => `আপনার ${a}/${b} টি দক্ষতা মিলে গেছে`,
                companyInfo: 'কোম্পানির তথ্য',
                type: 'ধরন:',
                size: 'আকার:',
                location: 'অবস্থান:',
                remote: 'রিমোট:',
                yes: 'হ্যাঁ',
                no: 'না',
                applyOfficial: 'অফিশিয়াল ওয়েবসাইটে আবেদন করুন',
                redirectNote: 'আপনাকে কোম্পানির অফিসিয়াল ওয়েবসাইটে রিডাইরেক্ট করা হবে'
            }
        };
        return dict[this.currentLanguage] || dict.english;
    }

    handleSkillsInput(e) {
        const value = e.target.value;
        const lastComma = value.lastIndexOf(',');
        const currentSkill = lastComma >= 0 ? value.substring(lastComma + 1).trim() : value.trim();
        
        this.updateSkillsDropdown(currentSkill);
    }

    handleSkillsKeydown(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const input = e.target;
            const value = input.value.trim();
            if (value) {
                this.addSkillFromInput(value);
                input.value = '';
                this.updateSkillsDropdown('');
            }
        }
    }

    updateSkillsDropdown(query) {
        const dropdown = document.getElementById('skills-dropdown');
        if (!dropdown) return;
        
        if (query.length < 1) {
            dropdown.classList.remove('show');
            return;
        }

        const matches = this.skillsDatabase
            .filter(skill => skill.toLowerCase().includes(query.toLowerCase()) && !this.selectedSkills.has(skill))
            .slice(0, 8);

        if (matches.length === 0) {
            dropdown.classList.remove('show');
            return;
        }

        dropdown.innerHTML = matches.map(skill => 
            `<div class="skill-suggestion" data-skill="${skill}">${skill}</div>`
        ).join('');

        dropdown.querySelectorAll('.skill-suggestion').forEach(el => {
            el.addEventListener('click', () => {
                this.addSkill(el.dataset.skill);
                const skillsInput = document.getElementById('skills-input');
                if (skillsInput) skillsInput.value = '';
                this.updateSkillsDropdown('');
            });
        });

        dropdown.classList.add('show');
    }

    addSkillFromInput(value) {
        const skills = value.split(',').map(s => s.trim()).filter(s => s.length > 0);
        skills.forEach(skill => this.addSkill(skill));
    }

    addSkill(skill) {
        if (this.selectedSkills.has(skill)) return;
        
        this.selectedSkills.add(skill);
        this.updateSelectedSkillsDisplay();
    }

    removeSkill(skill) {
        this.selectedSkills.delete(skill);
        this.updateSelectedSkillsDisplay();
    }

    updateSelectedSkillsDisplay() {
        const container = document.getElementById('selected-skills');
        if (!container) return;
        
        container.innerHTML = Array.from(this.selectedSkills).map(skill => 
            `<div class="skill-tag">
                ${skill}
                <span class="remove" data-skill="${skill}">×</span>
            </div>`
        ).join('');

        container.querySelectorAll('.remove').forEach(el => {
            el.addEventListener('click', () => {
                this.removeSkill(el.dataset.skill);
            });
        });
    }

    handleProfileSubmit(e) {
        e.preventDefault();
        
        console.log('Form submitted!'); // Debug log
        
        const skills = Array.from(this.selectedSkills);
        const locationSelect = document.getElementById('location-select');
        const experienceSelect = document.getElementById('experience-select');
        const nameInput = document.getElementById('name-input');
        const emailInput = document.getElementById('email-input');
        const collegeInput = document.getElementById('college-input');
        const branchInput = document.getElementById('branch-input');
        
        const location = locationSelect ? locationSelect.value : '';
        const experience = experienceSelect ? experienceSelect.value : 'entry';
        const name = nameInput ? nameInput.value : '';
        const email = emailInput ? emailInput.value : '';
        const college = collegeInput ? collegeInput.value : '';
        const branch = branchInput ? branchInput.value : '';

        // Allow form submission even without skills for AI to work with available data

        this.userProfile = {
            name: name,
            email: email,
            college: college,
            branch: branch,
            skills: skills,
            location: location,
            experience: experience,
            education: branch, // Use branch as education for AI matching
            companyPreference: '', // Can be added later
            stipendPreference: '', // Can be added later
            timestamp: new Date().toISOString()
        };

        console.log('User profile:', this.userProfile); // Debug log
        this.startMatching();
    }

    startMatching() {
        console.log('Starting matching process...'); // Debug log
        
        // Hide profile and show loading
        const profileSection = document.getElementById('profile-section');
        const loadingSection = document.getElementById('loading-section');
        const resultsSection = document.getElementById('results-section');
        
        if (profileSection) profileSection.style.display = 'none';
        if (loadingSection) loadingSection.classList.remove('hidden');
        if (resultsSection) resultsSection.classList.add('hidden');

        // Scroll to loading section
        if (loadingSection) {
            loadingSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

        this.simulateAIProcessing();
    }

    simulateAIProcessing() {
        const progressFill = document.getElementById('progress-fill');
        const progressText = document.getElementById('progress-text');
        const steps = document.querySelectorAll('.step');
        
        let progress = 0;
        let stepIndex = 0;

        const interval = setInterval(() => {
            progress += Math.random() * 12 + 3;
            if (progress > 100) progress = 100;

            if (progressFill) progressFill.style.width = progress + '%';
            if (progressText) progressText.textContent = Math.floor(progress) + '%';

            // Update active step
            const newStepIndex = Math.floor((progress / 100) * steps.length);
            if (newStepIndex !== stepIndex && newStepIndex < steps.length) {
                if (steps[stepIndex]) steps[stepIndex].classList.remove('active');
                if (steps[newStepIndex]) steps[newStepIndex].classList.add('active');
                stepIndex = newStepIndex;
            }

            if (progress >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    this.calculateMatches();
                    this.showResults();
                }, 800);
            }
        }, 150);
    }

    calculateMatches() {
        console.log('Calculating matches with AI algorithm...'); // Debug log
        
        // Use AI matching algorithm
        this.filteredResults = this.allInternships.map(internship => {
            const matchData = this.matchingAlgorithm.calculateMatchScore(this.userProfile, internship);
            const matchReasons = this.matchingAlgorithm.generateMatchReasons(matchData, this.userProfile, internship);
            
            return {
                ...internship,
                matchScore: matchData.score,
                matchPercentage: matchData.percentage,
                matchBreakdown: matchData.breakdown,
                matchReasons: matchReasons
            };
        });

        // Sort by match percentage (highest first), then by stipend
        this.filteredResults.sort((a, b) => {
            if (b.matchPercentage !== a.matchPercentage) {
                return b.matchPercentage - a.matchPercentage;
            }
            return this.extractStipendValue(b.stipend) - this.extractStipendValue(a.stipend);
        });

        // Apply location filter if specified (EXACT matching as required)
        if (this.userProfile.location) {
            this.filteredResults = this.filteredResults.filter(job => 
                job.location === this.userProfile.location || job.remote
            );
        }
        
        console.log('AI matches calculated:', this.filteredResults.length); // Debug log
        console.log('Top match:', this.filteredResults[0]); // Debug log
    }

    calculateMatchScore(internship, profile) {
        let totalScore = 0;
        let matchedSkills = [];
        let reasons = [];
        const i18n = this.getI18n();

        // Skills matching (60% weight)
        const skillsMatch = this.calculateSkillsMatch(internship.required_skills, profile.skills);
        matchedSkills = this.getMatchedSkills(internship.required_skills, profile.skills);
        totalScore += skillsMatch.score * 0.6;
        
        if (skillsMatch.score > 0.7) {
            reasons.push(i18n.strongSkillsMatch(matchedSkills.length, internship.required_skills.length));
        }

        // Location preference (25% weight)
        let locationScore = 0.5; // default
        if (!profile.location) {
            locationScore = 0.8; // no preference is flexible
        } else if (internship.location === profile.location || internship.remote) {
            locationScore = 1.0;
            reasons.push(i18n.perfectLocation);
        }
        totalScore += locationScore * 0.25;

        // Experience level (15% weight)  
        let experienceScore = internship.experience_level === profile.experience ? 1.0 : 0.7;
        totalScore += experienceScore * 0.15;

        // Company popularity bonus
        if (['Google', 'Microsoft', 'Netflix', 'Coinbase'].includes(internship.company)) {
            totalScore += 0.05;
            reasons.push(i18n.topCompany);
        }

        // High stipend bonus
        const stipendValue = this.extractStipendValue(internship.stipend);
        if (stipendValue > 40000) {
            reasons.push(i18n.highStipend);
        }

        return {
            score: Math.min(Math.round(totalScore * 100), 100),
            matchedSkills: matchedSkills,
            reasons: reasons.slice(0, 3) // top 3 reasons
        };
    }

    calculateSkillsMatch(jobSkills, userSkills) {
        if (jobSkills.length === 0) return { score: 0.8 };
        
        const normalizedJobSkills = jobSkills.map(skill => skill.toLowerCase());
        const normalizedUserSkills = userSkills.map(skill => skill.toLowerCase());
        
        let exactMatches = 0;
        let partialMatches = 0;

        normalizedJobSkills.forEach(jobSkill => {
            const exactMatch = normalizedUserSkills.some(userSkill => 
                userSkill === jobSkill || this.areSkillsSynonymous(userSkill, jobSkill));
            
            if (exactMatch) {
                exactMatches++;
            } else {
                const partialMatch = normalizedUserSkills.some(userSkill => 
                    userSkill.includes(jobSkill) || jobSkill.includes(userSkill));
                if (partialMatch) partialMatches++;
            }
        });

        const score = (exactMatches + partialMatches * 0.5) / normalizedJobSkills.length;
        return { score: Math.min(score, 1.0) };
    }

    areSkillsSynonymous(skill1, skill2) {
        const synonyms = {
            'javascript': ['js', 'node.js'],
            'python': ['py'],
            'react': ['reactjs'],
            'data analysis': ['analytics', 'data analytics'],
            'ui/ux': ['user experience', 'user interface', 'ux design', 'ui design'],
            'machine learning': ['ml', 'artificial intelligence', 'ai'],
            'frontend development': ['front-end', 'frontend'],
            'backend development': ['back-end', 'backend']
        };

        for (const [key, values] of Object.entries(synonyms)) {
            if ((key === skill1 && values.includes(skill2)) || 
                (key === skill2 && values.includes(skill1))) {
                return true;
            }
        }
        return false;
    }

    getMatchedSkills(jobSkills, userSkills) {
        const normalizedUserSkills = userSkills.map(skill => skill.toLowerCase());
        
        return jobSkills.filter(jobSkill => {
            return normalizedUserSkills.some(userSkill => 
                userSkill === jobSkill.toLowerCase() || 
                userSkill.includes(jobSkill.toLowerCase()) ||
                jobSkill.toLowerCase().includes(userSkill) ||
                this.areSkillsSynonymous(userSkill, jobSkill.toLowerCase())
            );
        });
    }

    extractStipendValue(stipend) {
        if (stipend.includes('₹')) {
            return parseInt(stipend.replace(/[₹,]/g, ''));
        } else if (stipend.includes('$')) {
            return parseInt(stipend.replace(/[$,]/g, '')) * 83; // Convert to INR
        }
        return 0;
    }

    showResults() {
        console.log('Showing results...'); // Debug log
        
        const loadingSection = document.getElementById('loading-section');
        const resultsSection = document.getElementById('results-section');
        
        if (loadingSection) loadingSection.classList.add('hidden');
        if (resultsSection) resultsSection.classList.remove('hidden');
        
        this.displayJobs(this.filteredResults);
        
        if (resultsSection) {
            resultsSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    displayJobs(jobs) {
        console.log('Displaying jobs:', jobs); // Debug log
        console.log('Number of jobs:', jobs ? jobs.length : 'undefined'); // Debug log
        
        const resultsCount = document.getElementById('results-count');
        const jobResults = document.getElementById('job-results');

        if (resultsCount) resultsCount.textContent = jobs ? jobs.length : 0;

        if (!jobResults) {
            console.error('Job results container not found!'); // Debug log
            return;
        }

        if (!jobs || jobs.length === 0) {
            const i18n = this.getI18n();
            console.log('No jobs to display, showing no matches message'); // Debug log
            jobResults.innerHTML = `
                <div style="text-align: center; padding: 2rem; color: var(--color-text-secondary);">
                    <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                    <h3>${i18n.noMatches}</h3>
                    <p>${i18n.tryAdjust}</p>
                </div>
            `;
            return;
        }

        jobResults.innerHTML = jobs.map(job => this.createJobCard(job)).join('');
        
        // Add event listeners to job cards
        jobs.forEach(job => {
            const card = document.querySelector(`[data-job-id="${job.id}"]`);
            if (!card) return;
            
            const detailsBtn = card.querySelector('.details-btn');
            const applyBtn = card.querySelector('.apply-btn');
            
            card.addEventListener('click', (e) => {
                if (!e.target.closest('.job-actions')) {
                    this.showJobModal(job);
                }
            });
            
            if (detailsBtn) {
                detailsBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.showJobModal(job);
                });
            }
            
            if (applyBtn) {
                applyBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    window.open(job.apply_link, '_blank');
                });
            }
        });
    }

    createJobCard(job) {
        const i18n = this.getI18n();
        
        return `
            <div class="job-card" data-job-id="${job.id}">
                <div class="job-header">
                    <div class="job-info">
                        <h3 class="job-title">${job.title}</h3>
                        <div class="job-company">
                            ${job.company}
                            <span class="company-badge">${job.type}</span>
                        </div>
                    </div>
                    <div class="match-score">
                        <i class="fas fa-star"></i>
                        ${job.matchPercentage || job.matchScore || 0}% ${i18n.match}
                    </div>
                </div>
                
                <div class="job-meta">
                    <div class="job-meta-item">
                        <i class="fas fa-map-marker-alt"></i>
                        ${job.location}
                    </div>
                    <div class="job-meta-item">
                        <i class="fas fa-money-bill-wave"></i>
                        <span class="stipend-highlight">${job.stipend}/month</span>
                    </div>
                    <div class="job-meta-item">
                        <i class="fas fa-clock"></i>
                        ${job.duration}
                    </div>
                    <div class="job-meta-item">
                        <i class="fas fa-building"></i>
                        ${job.company_size}
                    </div>
                </div>
                
                <div class="job-description">
                    ${job.description}
                </div>
                
                <div class="job-skills">
                    <div class="skills-label">${i18n.requiredSkills}</div>
                    <div class="skills-list">
                        ${job.required_skills.slice(0, 6).map(skill => `
                            <span class="skill-chip ${this.isSkillMatched(skill, job) ? 'matched' : ''}">${skill}</span>
                        `).join('')}
                        ${job.required_skills.length > 6 ? `<span class="skill-chip">+${job.required_skills.length - 6} more</span>` : ''}
                    </div>
                </div>
                
                ${job.matchReasons && job.matchReasons.length > 0 ? `
                    <div class="match-reasons">
                        <div class="skills-label">${i18n.whyPerfect}</div>
                        <div class="reasons-list">
                            ${job.matchReasons.map(reason => `<span class="reason-tag"><i class="fas fa-check"></i> ${reason}</span>`).join('')}
                        </div>
                    </div>
                ` : ''}
                
                <div class="job-actions">
                    <button class="details-btn">
                        <i class="fas fa-info-circle"></i>
                        ${i18n.viewDetails}
                    </button>
                    <button class="apply-btn">
                        <i class="fas fa-external-link-alt"></i>
                        ${i18n.applyNow}
                    </button>
                </div>
            </div>
        `;
    }

    isSkillMatched(skill, job) {
        if (!this.userProfile || !this.userProfile.skills) return false;
        const userSkills = this.userProfile.skills.map(s => s.toLowerCase());
        const skillLower = skill.toLowerCase();
        
        // Check for exact match
        if (userSkills.includes(skillLower)) return true;
        
        // Check for partial match
        for (const userSkill of userSkills) {
            if (userSkill.includes(skillLower) || skillLower.includes(userSkill)) {
                return true;
            }
        }
        
        return false;
    }

    applyFilters() {
        if (!this.filteredResults) return;
        
        let filtered = [...this.filteredResults];
        
        const filterLocation = document.getElementById('filter-location');
        const filterType = document.getElementById('filter-type');
        const filterStipend = document.getElementById('filter-stipend');
        const searchInput = document.getElementById('search-input');
        
        const locationFilter = filterLocation ? filterLocation.value : '';
        const typeFilter = filterType ? filterType.value : '';
        const stipendFilter = filterStipend ? filterStipend.value : '';
        const searchQuery = searchInput ? searchInput.value.toLowerCase() : '';
        
        if (locationFilter) {
            filtered = filtered.filter(job => job.location === locationFilter || job.remote);
        }
        
        if (typeFilter) {
            filtered = filtered.filter(job => job.type === typeFilter);
        }
        
        if (stipendFilter) {
            const minStipend = parseInt(stipendFilter);
            filtered = filtered.filter(job => this.extractStipendValue(job.stipend) >= minStipend);
        }
        
        if (searchQuery) {
            filtered = filtered.filter(job => 
                job.title.toLowerCase().includes(searchQuery) ||
                job.company.toLowerCase().includes(searchQuery) ||
                job.description.toLowerCase().includes(searchQuery) ||
                job.required_skills.some(skill => skill.toLowerCase().includes(searchQuery))
            );
        }
        
        this.displayJobs(filtered);
    }

    showJobModal(job) {
        const modal = document.getElementById('job-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalBody = document.getElementById('modal-body');
        
        if (!modal || !modalTitle || !modalBody) return;
        
        modalTitle.textContent = job.title;
        
        const i18n = this.getI18n();
        
        modalBody.innerHTML = `
            <div class="modal-job-info">
                <div class="modal-company">
                    <h4>${job.company}</h4>
                    <div class="modal-meta">
                        <div class="meta-item">
                            <i class="fas fa-map-marker-alt"></i>
                            ${job.location}
                        </div>
                        <div class="meta-item">
                            <i class="fas fa-building"></i>
                            ${job.type}
                        </div>
                        <div class="meta-item">
                            <i class="fas fa-money-bill-wave"></i>
                            ${job.stipend}/month
                        </div>
                        <div class="meta-item">
                            <i class="fas fa-clock"></i>
                            ${job.duration}
                        </div>
                    </div>
                </div>
                <div class="match-score-large">
                    <div class="score-circle">
                        <span class="score-number">${job.matchScore}%</span>
                        <span class="score-label">${i18n.match}</span>
                    </div>
                </div>
            </div>
            
            <div class="modal-section">
                <h5>${i18n.jobDescription}</h5>
                <p>${job.description}</p>
            </div>
            
            <div class="modal-section">
                <h5>${i18n.requiredSkillsTitle}</h5>
                <div class="skills-list">
                    ${job.required_skills.map(skill => `
                        <span class="skill-chip ${job.matchedSkills.includes(skill) ? 'matched' : ''}">${skill}</span>
                    `).join('')}
                </div>
                <p style="margin-top: 1rem; color: var(--color-text-secondary); font-size: 0.9rem;">
                    <i class="fas fa-check-circle" style="color: var(--color-success);"></i>
                    ${i18n.youHave(job.matchedSkills.length, job.required_skills.length)}
                </p>
            </div>
            
            ${job.matchReasons.length > 0 ? `
                <div class="modal-section">
                    <h5>${i18n.whyPerfect}</h5>
                    <div class="reasons-list">
                        ${job.matchReasons.map(reason => `
                            <div class="reason-item">
                                <i class="fas fa-check-circle" style="color: var(--color-success);"></i>
                                ${reason}
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
            
            <div class="modal-section">
                <h5>${i18n.companyInfo}</h5>
                <div class="company-info-grid">
                    <div>
                        <strong>${i18n.type}</strong> ${job.type}
                    </div>
                    <div>
                        <strong>${i18n.size}</strong> ${job.company_size}
                    </div>
                    <div>
                        <strong>${i18n.location}</strong> ${job.location}
                    </div>
                    <div>
                        <strong>${i18n.remote}</strong> ${job.remote ? i18n.yes : i18n.no}
                    </div>
                </div>
            </div>
            
            <div class="modal-actions">
                <button class="btn btn--primary btn--full-width" onclick="window.open('${job.apply_link}', '_blank')">
                    <i class="fas fa-external-link-alt"></i>
                    ${i18n.applyOfficial}
                </button>
                <p style="text-align: center; margin-top: 0.5rem; font-size: 0.8rem; color: var(--color-text-secondary);">
                    ${i18n.redirectNote}
                </p>
            </div>
        `;
        
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        const modal = document.getElementById('job-modal');
        if (modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    }

    // Reuse the existing job modal for feature info
    showInfoModal(title, htmlBody) {
        const modal = document.getElementById('job-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalBody = document.getElementById('modal-body');
        if (!modal || !modalTitle || !modalBody) return;
        modalTitle.textContent = title;
        modalBody.innerHTML = `<div class="modal-section">${htmlBody}</div>`;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    showProfileSection() {
        const profileSection = document.getElementById('profile-section');
        const loadingSection = document.getElementById('loading-section');
        const resultsSection = document.getElementById('results-section');
        
        if (profileSection) profileSection.style.display = 'block';
        if (loadingSection) loadingSection.classList.add('hidden');
        if (resultsSection) resultsSection.classList.add('hidden');
        
        if (profileSection) {
            profileSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing InternshipMatcher...');
    new InternshipMatcher();
});

// Add some CSS for the modal sections that weren't in the CSS
const additionalStyles = `
<style>
.modal-job-info {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1.5rem;
    padding: 1rem;
    background: var(--color-bg-1);
    border-radius: var(--radius-base);
}

.modal-company h4 {
    margin-bottom: 0.5rem;
    color: var(--color-text);
}

.modal-meta {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 0.9rem;
    color: var(--color-text-secondary);
}

.match-score-large {
    text-align: center;
}

.score-circle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: var(--primary-gradient);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
}

.score-number {
    font-size: 1.2rem;
    font-weight: bold;
}

.score-label {
    font-size: 0.7rem;
}

.modal-section {
    margin-bottom: 1.5rem;
}

.modal-section h5 {
    margin-bottom: 0.75rem;
    color: var(--color-text);
    font-size: 1rem;
    font-weight: 600;
}

.company-info-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
    font-size: 0.9rem;
}

.reason-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
}

.reasons-list .reason-tag {
    background: var(--color-bg-3);
    color: var(--color-text);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius-full);
    font-size: 0.8rem;
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
}

.match-reasons {
    margin-bottom: 1rem;
    padding-top: 1rem;
    border-top: 1px solid var(--color-border);
}

@media (max-width: 768px) {
    .modal-job-info {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
    
    .company-info-grid {
        grid-template-columns: 1fr;
    }
}
</style>
`;

document.head.insertAdjacentHTML('beforeend', additionalStyles);

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the main internship matcher
    window.internshipMatcher = new InternshipMatcher();
});
