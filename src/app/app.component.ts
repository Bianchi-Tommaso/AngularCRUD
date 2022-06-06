import { Component } from '@angular/core';
import { Employee } from './types/Employee';
import { DialogData } from './types/DialogData';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from './modals/ DialogOverviewExampleDialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  data:any =
  [
    {id: 10001,birthDate: "1953-09-01",firstName: "Georgi",lastName: "Facello",gender: "M",hireDate: "1986-06-25"},
    {id: 10002,birthDate: "1964-06-01",firstName: "Bezalel",lastName: "Simmel",gender: "F",hireDate: "1985-11-20"},
    {id: 10003,birthDate: "1959-12-02",firstName: "Parto",lastName: "Bamford",gender: "M",hireDate: "1986-08-27T22:00:00.000+0000"},
    {id: 10004,birthDate: "1954-04-30",firstName: "Chirstian",lastName: "Koblick",gender: "M",hireDate: "1986-11-30"},
    {id: 10005,birthDate: "1955-01-20",firstName: "Kyoichi",lastName: "Maliniak",gender: "M",hireDate: "1989-09-11T22:00:00.000+0000"}
  ];

  elMod: Employee | null = null;

  id: number = 0;
  constructor(public dialog: MatDialog) {}

  Aggiungi():void
  {
    
    this.elMod = new Employee;
    this.elMod.id = this.id;
    this.id = this.data.id;
    this.data.push(this.elMod);

    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: new DialogData(this.elMod)
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  Modifica(employee:Employee):void
  {
    this.elMod = employee;
  }

  Elimina(employee:number):void
  {
    this.data.splice(employee, 1);
  }

  openDialog(employeeToEdit:Employee): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: new DialogData(employeeToEdit)
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  closeEdit():void 
  {
    this.elMod = null;
  }
}


