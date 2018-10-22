import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleize'
})
export class TitleizePipe implements PipeTransform {
  static skipWords = ['of', 'the', 'in', 'a', 'or'];

  transform(data: string, args?: string[] | boolean): string {

    // this is a guard statement, so this pipe won't run if data like null or undefined is not passed through and throw an error

    if (typeof data !== 'string') {
      return data;
    }

    // this ternary allows us to use either the provided skipWords or a custom array that client can provide inside the html {{}}
    // -- see task-list component.html for an example of how to specify own array
    const skipWords = Array.isArray(args) ? args : TitleizePipe.skipWords;
    const processSkipWords = args !== false;

    return data.replace(/\w[^-\s]*/g, (word, index: number) => {
      if (processSkipWords && index && skipWords.includes(word.toLowerCase())) {
        return word.toLowerCase();
    }
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    });
  }
}
