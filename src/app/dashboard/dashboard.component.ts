
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private heroeService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void{
    this.heroeService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes.slice(0,4)));
  }
}
