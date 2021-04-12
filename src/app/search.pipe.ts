import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(foodArray: any[], searchItem:String): any{
    if(!searchItem)
    {
      return foodArray;
    }
    else{
      return foodArray.filter(searchObj=>searchObj.fooditemname.toLowerCase().indexOf(searchItem.toLowerCase())!==-1)
    }
  }

}
