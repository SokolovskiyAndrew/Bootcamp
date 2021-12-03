import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogFormControls } from '../../enums';
import { Blog } from '../../../../core/interfaces';

type FormValue = Omit<Blog, 'id' | 'likesCount'>;

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnInit {
  @Input() set initialFormConfig(formConfig: Blog | null) {
    if (formConfig) {
      this.patchForm(formConfig);
    } else {
      this.initForm();
    }
  }
  @Output() submitForm = new EventEmitter<FormValue>();

  form: FormGroup;
  formControls = BlogFormControls;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  isControlValid(controlName: BlogFormControls): boolean {
    return true;
  }

  submit(): void {
    if (this.form.invalid) {
      return void 0;
    }

    this.submitForm.emit(this.form.getRawValue());
  }

  private initForm(): void {
    this.form = this.fb.group({
      [this.formControls.Title]: this.fb.control('', [Validators.required, Validators.min(50)]),
      [this.formControls.Description]: this.fb.control('', [Validators.required, Validators.min(250)]),
      [this.formControls.CreatedAt]: this.fb.control(null, Validators.required),
      [this.formControls.Author]: this.fb.control(null, Validators.required)
    });
  }

  private patchForm(formConfig: Blog): void {
    this.form.patchValue({
      [this.formControls.Title]: formConfig.title,
      [this.formControls.Description]: formConfig.description,
      [this.formControls.CreatedAt]: formConfig.createdAt,
      [this.formControls.Author]: formConfig.author
    });
  }
}
