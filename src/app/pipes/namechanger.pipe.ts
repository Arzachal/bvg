import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namechanger'
})
export class NameChangerPipe implements PipeTransform {

  transform(value: string): string {
    return value
        .replace('strategy', 'Strategy')
        .replace('adventure-rpg', 'Adventure/RPG')
        .replace('action-fps', 'Action/FPS')
        .replace('racing', 'Racing');
  }
}
