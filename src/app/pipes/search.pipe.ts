import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchFor: string): any{
  	if(!searchFor || !value) return value;

  	return value.filter(video=>{
  		return video.title.indexOf(searchFor)>=0;
  	})
  }

}
