import { IsString } from "class-validator";

export class CreateMovieDto{ 
    @IsString()
    readonly title: string;
    @IsString()
    readonly director: string;
}