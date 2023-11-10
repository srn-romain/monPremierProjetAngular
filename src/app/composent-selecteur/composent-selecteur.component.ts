import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router} from '@angular/router';


@Component({
  selector: 'app-composent-selecteur',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './composent-selecteur.component.html',
  styleUrl: './composent-selecteur.component.css'
})
export class ComposentSelecteurComponent implements OnInit{

  constructor(public router:Router){
  }

  ngOnInit():void{
  }
}
