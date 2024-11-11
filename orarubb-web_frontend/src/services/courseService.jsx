const generateId = () => Math.random().toString(36).substring(2, 10);

export const getCourses = () => {
    const courses = [];

    for (let i = 1; i <= 10; i++) {
        courses.push({
            course_instance_id: generateId(),
            course_id: generateId(),
            course_code: `MLM000${i}`,           // e.g., MLM0001, MLM0002, ...
            course_name: "Ecuatii diferentiale",
        });
        courses.push({
            course_instance_id: generateId(),
            course_id: generateId(),
            course_code: `MLM000${i}`,           // e.g., MLM0001, MLM0002, ...
            course_name: "Algebra",
        });
    }

    return courses;
};