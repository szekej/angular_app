import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css'],
  standalone: true,
  imports: [MatCardModule, MatTableModule, CommonModule],
})
export class DataDisplayComponent implements OnInit {
  data: any[] = []; 
  error: string = ''; 
  columnsToDisplay: string[] = ['id', 'userId', 'title', 'body']; // Kolumny tabeli

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.apiService.getData().subscribe(
      (response) => {
        this.data = response; 
      },
      (error) => {
        this.error = 'Nie udało się pobrać danych. Spróbuj ponownie później.';
        console.error(error);
      }
    );
  }
}
