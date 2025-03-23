type NewComponentPropsType = {
    students: Array<StudentType>
    // students: StudentType[]
}
type StudentType = {
    id: number
    name: string
    age: number
}

export const NewComponent = (props: NewComponentPropsType) => {

    return (
        <ul>
            {props.students.map((objectStudentType) => (
                <li key={objectStudentType.id}>
                    <span>{objectStudentType.name}</span>
                    <span>{objectStudentType.age}</span>
                </li>
            ))}
        </ul>
    );
}
