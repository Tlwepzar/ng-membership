import { Component } from '@angular/core'

@Component({
  template: `
    <h1>Edit Your Profile</h1>
    <hr>
    <div class="col-md-6">
      <h3>[Edit profile form will go here]</h3>
      <br />
      <br />
      <button type="submit" class="btn btn-primary">Save</button>
      <button id="cancel" type="button" class="btn btn-default">Cancel</button>
    </div>
  `,
  styles: [`
  #cancel {margin-left: 230px;}
  `
  ]
})
export class ProfileComponent {
       
}