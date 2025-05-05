import { IsString,IsUppercase } from "class-validator";
import { Entity,PrimaryGeneratedColumn,Column,CreateDateColumn,UpdateDateColumn,DeleteDateColumn, OneToMany } from "typeorm";
import { transaction } from "./transaction";



@Entity()
export class order{

    @PrimaryGeneratedColumn('uuid')
    public id : string

    
    @Column({
        default: null,
        nullable: true
    })
    @IsString()
    public qris_invoiceid: string

        
    @Column({
        default: null,
        nullable: true
    })
    @IsString()
    public no_pesanan: string

    @Column({
        default: null,
        nullable: true
    })
    @IsString()
    public no_meja: string

    

    @CreateDateColumn()
    public createdAt: Date

    @UpdateDateColumn()
    public updatedAt: Date

    @DeleteDateColumn()
    public deletedAt: Date

    @OneToMany (() => transaction, (transactions) => transactions.orders)
    public transactions : transaction

    
    



}