import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity('todos')
export class Todos extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: string;

    @Column({
        type: "varchar",
        length: 200
    })
    title: string;

    @Column({
        default: false
    })
    completed: boolean;
}