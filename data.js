const BDYC_DATA = {
    currentMonth: "February 2026",
    currentWinnersMonth: "January 2026",

    prompts: {
        month: "February 2026",
        sectors: {
            finance: {
                title: "Finance",
                prompt: "You are the VP of Finance for a mid-sized retail company. Sales are growing steadily, but profits are shrinking due to rising interest rates and higher operating costs. You have limited capital and must decide how to allocate funds between paying down debt, investing in new growth opportunities, or building cash reserves. What financial strategy would you choose, and why? How would you balance short-term stability with long-term growth?"
            },
            entrepreneurship: {
                title: "Entrepreneurship",
                prompt: "A mid-sized company is struggling because its costs are going up and there are many competitors in the market. As a strategy consultant, your job is to help stop the company from falling behind and help it succeed in the future. Create a strong plan that will beat competitors, and set the company up for long-term growth."
            },
            marketing: {
                title: "Marketing",
                prompt: "Please evaluate how modern technology companies, such as Apple, Amazon, or Microsoft, use integrated marketing and sales strategies to sustain growth in competitive global markets. Discuss the role of data analytics, digital branding, and personalized consumer experiences in shaping sales outcomes and long-term customer loyalty."
            },
            economics: {
                title: "Economics",
                prompt: "Evaluate the role of government in managing the economy. Should governments intervene more or less in markets during economic crises? Support your position with historical or modern examples."
            },
            strategy: {
                title: "Strategy",
                prompt: "You are the manager of a regional chain of coffee shops. Over the past year, customer traffic has dropped by 20%, while the cost of supplies and labor has increased. Your goal is to develop a strategy to boost sales, reduce costs, and improve overall profitability. What steps would you take, and how would you prioritize them?"
            }
        }
    },

    sectors: [
        {
            id: "finance",
            name: "Finance & Investing",
            icon: "fas fa-chart-line",
            fullDescription: "You are the VP of Finance for a mid-sized retail company. Sales are growing steadily, but profits are shrinking due to rising interest rates and higher operating costs. You have limited capital and must decide how to allocate funds between paying down debt, investing in new growth opportunities, or building cash reserves. What financial strategy would you choose, and why? How would you balance short-term stability with long-term growth?",
            color: "#014089"
        },
        {
            id: "entrepreneurship",
            name: "Entrepreneurship",
            icon: "fas fa-lightbulb",
            fullDescription: "A mid-sized company is struggling because its costs are going up and there are many competitors in the market. As a strategy consultant, your job is to help stop the company from falling behind and help it succeed in the future. Create a strong plan that will beat competitors, and set the company up for long-term growth.",
            color: "#014089"
        },
        {
            id: "marketing",
            name: "Marketing",
            icon: "fas fa-bullhorn",
            fullDescription: "Please evaluate how modern technology companies, such as Apple, Amazon, or Microsoft, use integrated marketing and sales strategies to sustain growth in competitive global markets. Discuss the role of data analytics, digital branding, and personalized consumer experiences in shaping sales outcomes and long-term customer loyalty.",
            color: "#014089"
        },
        {
            id: "economics",
            name: "Economics",
            icon: "fas fa-globe-americas",
            fullDescription: "Evaluate the role of government in managing the economy. Should governments intervene more or less in markets during economic crises? Support your position with historical or modern examples.",
            color: "#014089"
        },
        {
            id: "strategy",
            name: "Strategy",
            icon: "fas fa-chess",
            fullDescription: "You are the manager of a regional chain of coffee shops. Over the past year, customer traffic has dropped by 20%, while the cost of supplies and labor has increased. Your goal is to develop a strategy to boost sales, reduce costs, and improve overall profitability. What steps would you take, and how would you prioritize them?",
            color: "#014089"
        }
    ],

    leadership: {
        founder: {
            name: "Amrit Mann",
            title: "Founder & President/CEO",
            image: "Images/Leaders/Amrit Mann.jpg",
            bio: "Amrit Mann founded BDYC out of a deep-rooted passion for helping others and creating opportunities for young people to explore the world of business and finance. As the founder of the nonprofit Scholarly Service Society (Hightstown) and his passion project Khalsa Financial Care, both focused on community impact, he provides students with hands-on learning, guidance, and the resources to develop their skills and build meaningful portfolios. Through these initiatives, Amrit is dedicated to fostering the next generation of leaders, helping them gain real-world experience, grow their confidence, and pursue their professional goals.",
            icon: "fas fa-user",
            linkedin: "https://www.linkedin.com/in/amritmann72/"
        },
        leadDeveloper: {
            name: "Ishbir Singh",
            title: "Lead Developer",
            image: "Images/Leaders/Ishbir Singh.jpg",
            bio: "As the Lead Developer for the Business Development Youth Council, Ishbir Singh manages the website and technology infrastructure for BDYC. He is responsible for maintaining the core admin structure behind the org and brings his experiences in programming and organisation to help make an impact for young people. As a student from the UK with a strong passion for Mathematics and Computer Science, Ishbir aspires to study these subjects at University and pursue a career in Finance. He also currently acts as the Lead Developer for the Scholarly Service Society, a nonprofit organisation focused on community impact through educational initiatives.",
            icon: "fas fa-code",
            linkedin: "https://www.linkedin.com/in/ishbir-singh/"
        },
        outreachOfficer: {
            name: "Justin Velecela",
            title: "Outreach Officer",
            image: "Images/Leaders/Justin Velecela.png",
            bio: "As an outreach officer at the Business Development Youth Council, Justin Velecela is focused on expanding the organization by recruiting new monthly members to participate in competitive business events. He joined BYDC to gain hands-on experience in the business field while helping students nationwide apply critical thinking and real-world problem-solving skills through monthly competitions. Justin is actively involved in leadership and academic activities that strengthen his communication, organization, and outreach abilities. He is motivated by a strong interest in business, finance, and building opportunities that allow students to grow and succeed..",
            icon: "fas fa-bullhorn",
            linkedin: "https://www.linkedin.com/in/justin-velecela/"
        },
        vicePresidents: [
            {
                sector: "Finance & Investing",
                name: "Arbaaz Grewal",
                image: "Images/Leaders/Arbaaz Grewal.jpg",
                bio: "As the Vice President of Finance and Investing at the Business Development Youth Council, Arbaaz Grewal is passionate about financial literacy and helping younger people understand the power of smart investing. He joined BDYC to connect with like minded students and develop real-world business skills. With a strong interest in finance and investing, Arbaaz aspires to pursue a future career in the field and use these skills to achieve long-term success.",
                icon: "fas fa-chart-line",
                linkedin: "https://www.linkedin.com/in/arbaaz-grewal-671543322"
            },
            {
                sector: "Entrepreneurship",
                name: "Ashish Dhir",
                image: "Images/Leaders/Ashish Dhir.png",
                bio: "As the Business Youth Development Council’s Vice President of Entrepreneurship, Ashish Dhir is passionate about driving innovation and guiding the growth of emerging business ideas. His curiosity about entrepreneurial strategies and his ability to think creatively fuel his efforts to lead startup and business plan competitions. Ashish combines his analytical mindset with a people-centered approach, aiming to inspire and equip future entrepreneurs with the skills and confidence needed to succeed in real-world business environments.",
                icon: "fas fa-lightbulb",
                linkedin: "https://www.linkedin.com/in/ashish-dhir-2768b5264"
            },
            {
                sector: "Marketing",
                name: "Vansh Patel",
                image: "Images/Leaders/Vansh Patel.jpg",
                bio: "As the Business Youth Development Council’s Vice President of Marketing, Vansh Patel portrays a keen passion and interest in understanding what truly connects people to a brand. His curiosity about consumer behavior and creative problem-solving fuels his drive to develop innovative strategies. Vansh combines his analytical thinking with a thoughtful, people-centered approach, wanting to apply his skills to real-world business settings by providing practical marketing solutions that promote both growth and authenticity.",
                icon: "fas fa-bullhorn",
                linkedin: "http://linkedin.com/in/vansh-patel-47953b395"
            },
            {
                sector: "Economics",
                name: "Nikhil Agrawal",
                image: "Images/Leaders/Nikhil Agrawal.jpg",
                bio: "As the Vice President of Economics at the Business Development Youth Council, Nikhil Agrawal focuses on making economic concepts more accessible and engaging for students. He joined BDYC to work alongside ambitious peers and to gain hands-on experience applying economic thinking to real business challenges. Driven by a deep interest in economics, finance, and technology, Nikhil hopes to build a career that blends these fields and use his expertise to guide smart decision-making and long-term growth.",
                icon: "fas fa-globe-americas",
                linkedin: "https://www.linkedin.com/in/nikhil-agrawal-2790822a4"
            },
            {
                sector: "Strategy",
                name: "Howard Stewart",
                image: "Images/Leaders/Howey Stewart.jpg",
                bio: "As the Vice President of Business Strategy, Howard Stewart focuses on seeing the bigger picture and figuring out how all the moving parts of a business come together. He’s drawn to problem-solving, long-term planning, and finding clear, realistic paths for business’ to grow. He hopes to continue building his strategic skills and eventually pursue a career where he can help organizations navigate challenges and plan for the future.",
                icon: "fas fa-chess",
                linkedin: "https://www.linkedin.com/in/howey-stewart-19642734a"
            }
        ]
    },

    currentWinners: [
        {
            sector: "Entrepreneurship",
            winnerName: "Derek Lin",
            school: "Francis Lewis High School / Junior",
            description: "Pathly - Turning Student Potential into Action",
            workLink: "https://drive.google.com/open?id=1MFOjCbiZrY9-6GDdzpX3VN6aWye8X4or",
            announced: true
        },
        {
            sector: "Economics",
            winnerName: "Ashley Adanuty",
            school: "Springbrook High School / 10th Grade",
            description: "The Rise of Gas Prices",
            workLink: "https://drive.google.com/open?id=1EZ5L8Rax1f13C9UCorbWitZqlRLl-Z5HCZ4uLi0SrnM",
            announced: true
        },
        {
            sector: "Strategy",
            winnerName: "Justin Velecela",
            school: "Hightstown High School / 11th Grade",
            description: "Leveraging Business Strategy to Drive Sustainable Economic Impact",
            workLink: "https://drive.google.com/open?id=1C7pc0C3ca4AP7vfSdX7_2lfK2NCDbPTkWlez3HeaJzY, https://drive.google.com/open?id=1BNbBOPEVK_ZIh_UjoaAopRaa10MnjeXluUmY_bIQz78",
            announced: true
        }
    ],

    archive: [
        {
            month: "January 2026",
            winners: [
                {
                    sector: "Entrepreneurship",
                    winnerName: "Derek Lin",
                    school: "Francis Lewis High School / Junior",
                    description: "Pathly - Turning Student Potential into Action",
                    workLink: "https://drive.google.com/open?id=1MFOjCbiZrY9-6GDdzpX3VN6aWye8X4or"
                },
                {
                    sector: "Economics",
                    winnerName: "Ashley Adanuty",
                    school: "Springbrook High School / 10th Grade",
                    description: "The Rise of Gas Prices",
                    workLink: "https://drive.google.com/open?id=1EZ5L8Rax1f13C9UCorbWitZqlRLl-Z5HCZ4uLi0SrnM"
                },
                {
                    sector: "Strategy",
                    winnerName: "Justin Velecela",
                    school: "Hightstown High School / 11th Grade",
                    description: "Leveraging Business Strategy to Drive Sustainable Economic Impact",
                    workLink: "https://drive.google.com/open?id=1C7pc0C3ca4AP7vfSdX7_2lfK2NCDbPTkWlez3HeaJzY, https://drive.google.com/open?id=1BNbBOPEVK_ZIh_UjoaAopRaa10MnjeXluUmY_bIQz78"
                }
            ]
        }
    ],

    links: {
        googleClassroom: "https://classroom.google.com/c/ODIzNTk2NTA0MTMx?cjc=7bi7wief",
        instagram: "https://www.instagram.com/thebdyc/",
        submitForm: "https://forms.gle/B7aSuC26dexeVLah9"
    },

    benefits: [
        {
            icon: "fas fa-trophy",
            title: "Real-World Challenges",
            description: "Participate in monthly business challenges that simulate real-world scenarios across five major sectors."
        },
        {
            icon: "fas fa-award",
            title: "Recognition & Exposure",
            description: "Get recognized on our website and social media platforms. Winners are showcased publicly."
        },
        {
            icon: "fas fa-briefcase",
            title: "Multiple Sectors",
            description: "Gain exposure to different business sectors: Finance, Entrepreneurship, Marketing, Economics, and Strategy."
        },
        {
            icon: "fas fa-users",
            title: "Global Network",
            description: "Connect with like-minded youth from across the country and around the world."
        },
        {
            icon: "fas fa-graduation-cap",
            title: "Portfolio Building",
            description: "Build an impressive portfolio for college applications and future career opportunities."
        },
        {
            icon: "fas fa-chart-line",
            title: "Skill Development",
            description: "Develop practical business skills including analysis, problem-solving, and presentation."
        }
    ],

    processSteps: [
        {
            number: 1,
            title: "Join Google Classroom",
            description: "Sign up for our Google Classroom to access all monthly challenges and updates."
        },
        {
            number: 2,
            title: "Review the Challenge",
            description: "Read the current month's challenge description and requirements carefully."
        },
        {
            number: 3,
            title: "Complete Your Project",
            description: "Work on your solution, proposal, or analysis for your chosen sector(s)."
        },
        {
            number: 4,
            title: "Submit & Wait",
            description: "Submit through our Google Form and await judging results and announcements!"
        }
    ],


    judgingCriteria: [
        {
            title: "Creativity & Innovation",
            percentage: "25%",
            description: "Original thinking and innovative approaches to the challenge."
        },
        {
            title: "Analytical Thinking",
            percentage: "25%",
            description: "Depth of analysis, use of data, and logical reasoning."
        },
        {
            title: "Practicality & Feasibility",
            percentage: "20%",
            description: "Real-world applicability and implementation potential."
        },
        {
            title: "Presentation Quality",
            percentage: "20%",
            description: "Clarity, organization, and professional presentation of ideas."
        },
        {
            title: "Sector-Specific Excellence",
            percentage: "10%",
            description: "Mastery of sector-specific concepts and best practices."
        }
    ],


    faq: [
        {
            question: "Is there a membership fee?",
            answer: "No! BDYC membership is completely free. We believe in making business education accessible to all passionate students.",
            defaultOpen: true
        },
        {
            question: "Can I compete in multiple sectors?",
            answer: "Absolutely! You can participate in one, some, or all five sectors each month. Challenge yourself across different disciplines!",
            defaultOpen: false
        },
        {
            question: "Do I need prior business experience?",
            answer: "Not at all! BDYC is designed for students of all experience levels. Our challenges help you learn and grow, whether you're a beginner or experienced.",
            defaultOpen: false
        },
        {
            question: "How are winners selected?",
            answer: "Our panel of judges evaluates submissions based on creativity, analytical thinking, practicality, presentation quality, and sector-specific excellence.",
            defaultOpen: false
        }
    ]
};


if (typeof module !== 'undefined' && module.exports) {
    module.exports = BDYC_DATA;
}
