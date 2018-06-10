import {Injectable} from "@angular/core";

@Injectable()
export class LanguageService{
    
    public lang : string;

    

    // getLanguage():string{
    //     if (localStorage){
    //         return localStorage['lang'] || "pl";
    //     }
    //     else{
    //         return "pl";
    //     }
    // }

    // setLanguage(language: string){
    //     if (localStorage){
    //         localStorage['lang'] = language;
    //     }
    // }
}