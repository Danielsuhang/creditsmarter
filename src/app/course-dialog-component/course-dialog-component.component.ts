import { Component, OnInit, Inject } from '@angular/core';


import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-course-dialog-component',
    templateUrl: 'course-dialog-component.component.html',
    // styleUrls: ['.course-dialog-component/course-dialog-component.component.css']
})
export class CourseDialogComponentComponent {

    constructor(
        public dialogRef: MatDialogRef<CourseDialogComponentComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
        this.dialogRef.close();
    }
    onNavigate() {
        window.open("https://www.capitalone.com/", "_blank");
    }
}

