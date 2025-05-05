import { IsString,IsUppercase } from "class-validator";
import { Entity,PrimaryGeneratedColumn,Column,CreateDateColumn,UpdateDateColumn,DeleteDateColumn, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { order } from "./order";
import { outlet } from "./outlet";


@Entity()
export class transaction{

    @PrimaryGeneratedColumn('uuid')
    public id : string

    @Column({
        nullable: false
    })
    @IsString()
    public qris_content	: string

    @Column({
        nullable: false
    })
    @IsString()
    public qris_request_date	: string
    
    @Column({
        nullable: false
    })
    @IsString()
    public qris_invoiceid: string

    @Column({
        nullable: false
    })
    @IsString()
    public cliTrxNumber	: string

    @Column({
        nullable: false
    })
    @IsString()
    public cliTrxAmount	: string
    

    @CreateDateColumn()
    public createdAt: Date

    @UpdateDateColumn()
    public updatedAt: Date

    @DeleteDateColumn()
    public deletedAt: Date

    @ManyToOne (() => order, (orders) => orders.transactions)
    @JoinColumn()
    public orders : order


    @ManyToOne(() => outlet,(outlets) => outlets.transactions)
    @JoinColumn()
    public outlets : outlet




}