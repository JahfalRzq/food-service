import { IsString,IsUppercase } from "class-validator";
import { Entity,PrimaryGeneratedColumn,Column,CreateDateColumn,UpdateDateColumn,DeleteDateColumn, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { menu } from "./menu";



@Entity()
export class listPesanan{

    @PrimaryGeneratedColumn('uuid')
    public id : string

    @Column({
        default: null,
        nullable: true
    })
    @IsString()
    public listMenu: string
 

    @CreateDateColumn()
    public createdAt: Date

    @UpdateDateColumn()
    public updatedAt: Date

    @DeleteDateColumn()
    public deletedAt: Date

    @ManyToOne (() => menu, (menus) => menus.lists)
    @JoinColumn()
    public menus : menu
    


}