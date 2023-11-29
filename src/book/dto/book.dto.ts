import { IsNotEmpty, IsString, IsInt } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";


export class CreateBookDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    id: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ default: 'author' })
    author: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ default: 'title' })
    title: string;


    @IsNotEmpty()
    @IsInt()
    @ApiProperty({ default: 'title' })
    price: number;


}