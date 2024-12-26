import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  imports: [CommonModule, TitleComponent],
  // ESTAR AL PENDIENTE DE LOS CAMBIOS DENTRO DE LA APLICACIÓN
  changeDetection: ChangeDetectionStrategy.OnPush,
  template:  `
    <app-title [title]="currentFramework()"></app-title>

    <pre>{{frameworkAsSignal() | json}}</pre>
    <pre>{{frameworkAsProperty | json}}</pre>

  `
})
export default class ChangeDetectionComponent {

  public currentFramework = computed(
    () => `Change detection - ${this.frameworkAsSignal().name}`
  );

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016
  });

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016
  };

  constructor(){
    setTimeout(() => {

      //this.frameworkAsProperty.name = 'React';

      this.frameworkAsSignal.update(value => ({
        ...value,
        name: 'React'

        // value.name = 'React';
        // return {...value};

      }));

      console.log("Hecho");
    }, 3000);
  }

}
