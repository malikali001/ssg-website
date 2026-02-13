
export interface Award {
    id: string;
    title: string;
    organization: string;
    year: string;
    category: string; // e.g., "Winner", "Finalist", "Finalist"
    description: string;
    aboutAward?: string;
    whyEarned?: string;
    awardImage?: string;
    ownerImage?: string;
    featured?: boolean; // For homepage preview
}

export const awards: Award[] = [
    {
        id: "uk-ospa-2018",
        title: "Outstanding Young Security Professional",
        organization: "UK OSPA Awards",
        year: "2018",
        category: "Finalist",
        description: "Recognized for exceptional leadership and contribution to the security industry at a young age.",
        aboutAward: "The Outstanding Security Performance Awards (OSPAs) recognize and reward companies and individuals across the security sector.",
        whyEarned: "Demonstrated innovative approaches to security management and team leadership.",
        ownerImage: "/images/awards/Ahmad.jpg",
        awardImage: "/images/awards/ospa-finalist-2019-300x293.png",
        featured: true
    },
    {
        id: "acs-champion-2018",
        title: "ACS Champion of the Year",
        organization: "SIA ACS Pacesetters",
        year: "2018",
        category: "Finalist",
        description: "Acknowledged for setting high standards in the Approved Contractor Scheme.",
        awardImage: "/images/awards/image1-300x111.jpg",
        featured: true
    },
    {
        id: "acs-pacesetters-2018",
        title: "ACS Pacesetters Award",
        organization: "SIA ACS Pacesetters",
        year: "2018",
        category: "Winner",
        description: "Awarded to security companies in the top 15% of the SIA benchmarking.",
        ownerImage: "/images/awards/image1.jpeg",
        awardImage: "/images/awards/image2.jpeg",
        featured: true
    },
    {
        id: "acs-officer-distinction-2018",
        title: "Security Officer Distinction Award",
        organization: "SIA ACS Pacesetters",
        year: "2018",
        category: "Winner",
        description: "Recognizing individual officers who have gone above and beyond in their duties.",
        ownerImage: "/images/awards/image5.png",
        awardImage: "/images/awards/image4-322x200.jpeg",
        featured: false
    },
    {
        id: "ssg-officer-waseem-azam",
        title: "Community Recognition Award",
        organization: "Tamworth Borough Council",
        year: "2018",
        category: "Winner",
        description: "SSG Officer Waseem Azam presenting his award with Tamworth Borough Council Management.",
        awardImage: "/images/awards/image5-1024x768.jpeg",
        featured: false
    }
];
