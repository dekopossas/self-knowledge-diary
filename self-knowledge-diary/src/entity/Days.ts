import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class Days {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    feeling: number;

    @Column()
    because: string;

    @Column()
    behaviors: string;

    @Column()
    be_better: string;
    
    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    updated_at: Date;
    

}
