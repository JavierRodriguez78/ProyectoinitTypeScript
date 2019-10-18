import { Course } from './Course';

export interface CourseRepository{
    create(course: Course): Promise<Course>;
}