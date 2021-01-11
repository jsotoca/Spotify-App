import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'domSanitizer'
})
export class DomSanitizerPipe implements PipeTransform {

  constructor(
    private domSanitizer:DomSanitizer
  ){}

  transform(value: string, domain?:string): SafeResourceUrl {
    let url:string;
    url = (domain)? `${domain}${value}` : value;
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
