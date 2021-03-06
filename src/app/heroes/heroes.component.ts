import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero.model'
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit  {

  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private HeroService: HeroService,
    private messageService: MessageService
    ){}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.HeroService.getHeroes().subscribe(heroes => this.heroes = heroes);

  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Select hero id=${hero.id}`);

  }
}
