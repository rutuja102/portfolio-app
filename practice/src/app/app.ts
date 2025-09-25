import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Change } from './change/change';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],      // ✅ must include
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}
