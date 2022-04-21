import { IsEmail, IsNotEmpty } from "class-validator"

export class ContactSheetDto{
  @IsNotEmpty()
  track_no: string

  @IsNotEmpty()
  direct : string

  @IsNotEmpty()
  date:string

  @IsNotEmpty()
  index : string

  @IsNotEmpty()
  type : string

  @IsNotEmpty()
  instrument : string

  @IsNotEmpty()
  lease_royalty : string

  @IsNotEmpty()
  acres : number

  @IsNotEmpty()
  offer : string

  @IsNotEmpty()
  address : string

  @IsNotEmpty()
  city : string

  @IsNotEmpty()
  state : string

  @IsNotEmpty()
  zip : number

  @IsNotEmpty()
  phone_number : number

  @IsNotEmpty()
  @IsEmail()
  email : string

  @IsNotEmpty()
  mailer_sent : string

  @IsNotEmpty()
  notes : string

  @IsNotEmpty()
  new_well_info: string

  @IsNotEmpty()
  section: string

  @IsNotEmpty()
  township: string

  @IsNotEmpty()
  range : string

  @IsNotEmpty()
  operator : string

}
