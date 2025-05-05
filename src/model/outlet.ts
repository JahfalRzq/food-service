import { IsString,IsUppercase } from "class-validator";
import { Entity,PrimaryGeneratedColumn,Column,CreateDateColumn,UpdateDateColumn,DeleteDateColumn, OneToMany } from "typeorm";
import { user } from "./user";
import { menu } from "./menu";
import { transaction } from "./transaction";


@Entity()
export class outlet{

    @PrimaryGeneratedColumn('uuid')
    public id : string

    
    @Column({
        default: null,
        nullable: true
    })
    @IsString()
    public nameOutlet: string


    @Column({
        default: null,
        nullable: true
    })
    @IsString()
    public addresOutlet: string


    @Column({
        default: null,
        nullable: true
    })
    @IsString()
    public imageOutlet: string

    @Column({
        default: null,
        nullable: true
    })
    @IsString()
    public noTelpOutlet: string
    

    @CreateDateColumn()
    public createdAt: Date

    @UpdateDateColumn()
    public updatedAt: Date

    @DeleteDateColumn()
    public deletedAt: Date

    @OneToMany (() => user, (users) => users.outlets)
    public users : user

    
    @OneToMany (() => menu, (menus) => menus.outlets)
    public menus : menu

    @OneToMany (() => transaction, (transactions) => transactions.outlets)
    public transactions : transaction



}