import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { singleSpaPropsSubject } from 'src/single-spa/single-spa-props';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  singleSpaProps: any;
  form: FormControl;

  ngOnInit(): void {
    this.form = new FormControl('',Validators.required);

    singleSpaPropsSubject.subscribe(
      props => {
        (this.singleSpaProps = props)
      }
    );
  }

  onSubmit() {
    console.log(this.singleSpaProps)
    console.log(this.form.value)
    this.singleSpaProps.pushToList(this.form.value);
    this.form.reset();
  }

}
