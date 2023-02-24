const student = {
    id: 2041,
    name: {
        firstName: 'Mim',
        lastName: 'Khatun'
    },
    result : [
        {CC: 3101, CT: 'IWT', cgpa: 3.4},
        {CC: 3103, CT: 'CA', cgpa: 3.43},
        {CC: 3105, CT: 'math', cgpa: 3.55},
        {CC: 3107, CT: 'english', cgpa: 3.5},
        {CC: 3109, CT: 'physics', cgpa: 3.33}
    ]
}

console.log(student.result[2]?.cgpa);