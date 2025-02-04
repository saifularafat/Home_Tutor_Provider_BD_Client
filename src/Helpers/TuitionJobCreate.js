export const JobSalary = [
    ...Array.from({ length: 96 }, (_, i) => ((i + 5) * 100).toString()),
    '10000'
];

export const TuitionGender = [
    "Male", 'Female', "Male-Female", "Others"
]

export const Medium = [
    "Bangla", 'English', "Arabic", "Others"
]

export const JobCategory = [
    "Home", 'Online', "Coaching", "School",
]

export const PerWeek = [
    ...Array.from({ length: 7 }, (_, i) => ((i + 1) * 1).toString()),
    'Negotiation'
]

export const PerMonth = [
    ...Array.from({ length: 12 }, (_, i) => new Date(0, i).toLocaleString('default', { month: 'long' })),
    'Negotiation'
];

export const StudentGender = [
    "Male", 'Female', "Male-Female", "Kids", "Others"
]

export const Duration = [
    '1 hours', '1.5 hours', '2 hours', '2.5 hours', '3 hours', 'Negotiation'
];

export const FixedTime = [
    ...Array.from({ length: 25 }, (_, i) => {
        const hour = 8 + Math.floor(i / 2);
        const minute = i % 2 === 0 ? "00" : "30";
        const period = hour < 12 ? "A.M." : hour === 12 ? "P.M." : "P.M.";
        const displayHour = hour > 12 ? hour - 12 : hour;
        return `${displayHour}:${minute} ${period}`;
    }),
    'Negotiation'
];

export const universityResults = [
    "First Division",
    "Second Division",
    "Third Division",
];

export const YearRange = [
    "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "Ongoing"
];


