import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Course {
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    course: string;

    constructor(course?: string)
    {
        this.course = course;
    }


}