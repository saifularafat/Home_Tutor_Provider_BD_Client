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


export const StudentGender = [
    "Male", 'Female', "Kids", "Others"
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


