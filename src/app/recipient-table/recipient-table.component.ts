import { Component, Input, ChangeDetectionStrategy, OnChanges, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserData } from '../user-data';

@Component({
  selector: 'app-recipient-table',
  templateUrl: './recipient-table.component.html',
  styleUrls: ['./recipient-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipientTableComponent implements AfterViewInit, OnChanges {

  @Input() data: UserData[] = [];
  @Input() text: string = '';

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<UserData> = new MatTableDataSource(this.data);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnChanges(){
    this.dataSource.data = this.data;
    this.dataSource.filter = this.text.trim().toLocaleLowerCase();
  }
}
