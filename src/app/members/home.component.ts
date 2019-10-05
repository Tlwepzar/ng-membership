import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    template: `
    <h1> Welcome Comrades </h1>
    <hr>
    <img src="assets/images/home.png" alt="home.png">
    `,
    styles: [` 
    h1 { text-align: center; }
    img { width: 1150px;}
    `]
})

export class HomeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}