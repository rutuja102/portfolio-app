import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-forgot',
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './forgot.html',
  styleUrls: ['./forgot.css']
})
export class Forgot {
otpForm: any;
resetPassword: any;
resetForm: any;
validateOtp() {
throw new Error('Method not implemented.');
}
emailForm: any;
sendOtp() {
throw new Error('Method not implemented.');
}

}
