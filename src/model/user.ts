import { IsString,IsUppercase } from "class-validator";
import { Entity,PrimaryGeneratedColumn,Column,CreateDateColumn,UpdateDateColumn,DeleteDateColumn, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import bcrypt from 'bcryptjs';
import { outlet } from "./outlet";

export enum UserRole {
    SUPERADMIN = 'SUPERADMIN',
    ADMIN = 'ADMIN',
    // KASIR = 'KASIR',
    // DAPUR = 'DAPUR',
}

@Entity()
export class user{

    @PrimaryGeneratedColumn('uuid')
    public id : string

    
    @Column({
        default: null,
        nullable: true
    })
    @IsString()
    public namaLengkap: string


    @Column({
        default: null,
        nullable: true
    })
    @IsString()
    public userName: string

    @Column({
        default: null,
        nullable: true
    })
    @IsString()
    public password: string


    @Column({
        type: 'enum',
        enum: UserRole,
    })
    @IsString()
    @IsUppercase()
    public role: UserRole

    @Column({
        default: null,
        nullable: true
    })
    @IsString()
    public image: string

    @Column({
        default: null,
        nullable: true
    })
    @IsString()
    public noTelp: string
    

    @CreateDateColumn()
    public createdAt: Date

    @UpdateDateColumn()
    public updatedAt: Date

    @DeleteDateColumn()
    public deletedAt: Date


    public hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8)
    }

    public checkIfPasswordMatch(unencryptedPassword: string): boolean {
        return bcrypt.compareSync(unencryptedPassword, this.password)
    }

    @ManyToOne (() => outlet, (outlets) => outlets.users)
    @JoinColumn()
    public outlets : outlet
}