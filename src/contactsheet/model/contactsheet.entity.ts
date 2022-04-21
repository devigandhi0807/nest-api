 import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
// //import {PrimaryKey, Table, Column, Model } from 'sequelize-typescript';
@Entity()
 export class ContactSheet{
  @PrimaryGeneratedColumn()
  id : number

  @Column()
  track_no: string

  @Column()
  direct : string

  @Column()
  date:string

  @Column()
  index : string

  @Column()
  type : string

  @Column()
  instrument : string

  @Column()
  lease_royalty : string

  @Column({type:'decimal',precision: 10, scale: 2 })
  acres : number

  @Column({type:'varchar'})
  offer : string

  @Column()
  address : string

  @Column({type:'varchar',length:100})
  city : string

  @Column({type:'varchar',length:100})
  state : string

  @Column({type:'varchar',length:15})
  zip : number

  @Column({type:'varchar',length:15})
  phone_number : number

  @Column({type:'varchar',length:150})
  email : string

  @Column({type:'varchar'})
  mailer_sent : string

  @Column()
  notes : string

  @Column()
  new_well_info: string

  @Column({type:'varchar',length:10})
  section: string

  @Column({type:'varchar',length:10})
  township: string

  @Column({type:'varchar',length:10})
  range : string

  @Column({type:'varchar',length:80})
  operator : string

 }
// @Table
// export class ContactSheet extends Model{
//   @PrimaryKey
//   @Column
//   id : number;

//   @Column
//   track_no: string

//   @Column
//   direct : string

//   @Column
//   date:string

//   @Column
//   index : string

//   @Column
//   type : string

//   @Column
//   instrument : string

//   @Column
//   lease_royalty : string

//   @Column
//   acres : number

//   @Column
//   offer : string

//   @Column
//   address : string

//   @Column
//   city : string

//   @Column
//   state : string

//   @Column
//   zip : number

//   @Column
//   phone_number : number

//   @Column
//   email : string

//   @Column
//   mailer_sent : string

//   @Column
//   notes : string

//   @Column
//   new_well_info: string

//   @Column
//   section: string

//   @Column
//   township: string

//   @Column
//   Range : string

//   @Column
//   operator : string

// }
