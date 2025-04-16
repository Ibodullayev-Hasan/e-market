import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IUser } from "../interfaces";

@Entity("users")
export class User implements IUser {

	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column("text")
	fullName: string;

	@Column("varchar", { unique: true })
	email: string;

	@Column("text")
	password: string;

	@Column("text")
	avatar: string;
}