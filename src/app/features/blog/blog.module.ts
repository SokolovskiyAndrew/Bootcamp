import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent, BlogListItemComponent, BlogFormComponent, BlogNewComponent } from './components';
import { CounterWithIconModule } from '../../shared/components/counter-with-icon/counter-with-icon.module';

@NgModule({
  declarations: [BlogListComponent, BlogListItemComponent, BlogFormComponent, BlogNewComponent],
  exports: [BlogListComponent],
  imports: [CommonModule, CounterWithIconModule]
})
export class BlogModule {}
