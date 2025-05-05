import { IsString,IsUppercase } from "class-validator";
import { Entity,PrimaryGeneratedColumn,Column,CreateDateColumn,UpdateDateColumn,DeleteDateColumn, OneToMany, ManyToMany, ManyToOne, JoinColumn } from "typeorm";
import { outlet } from "./outlet";

export enum menuType{
    MAINCOURSE = 'MAINCOURSE',
    BEVERAGE = 'BEVERAGE',
    DESSERT = 'DESSERT',
    TOPPING = 'TOPPING',
}

@Entity()
export class menu{

    @PrimaryGeneratedColumn('uuid')
    public id : string

    
    @Column({
        default: null,
        nullable: true
    })
    @IsString()
    public nameMenu: string

    @Column({
        type: 'enum',
        enum: menuType,
    })
    @IsString()
    @IsUppercase()
    public type: menuType

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

    @ManyToOne (() => outlet, (outlets) => outlets.menus)
    @JoinColumn()
    public outlets : outlet


}