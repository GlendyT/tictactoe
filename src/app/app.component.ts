import { Component } from '@angular/core';
import { BoardComponent } from './board/board.component';
import { RouterOutlet } from '@angular/router';
import { GameService } from './game.service';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BoardComponent, NgIf, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tiktaktoe';
  constructor (public gameService: GameService){ }

  resetGame() {
    this.gameService.newGame();
  }
}
