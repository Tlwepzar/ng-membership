import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    template: `
    <h1> Welcome Comrades </h1>
    <hr>
    <img src="assets/images/marching.png" alt="home.png">
    `,
    styles: [` 
    h1 { text-align: center; }
    img { width: 70%; margin-left: 15%;}
    `]
})

export class HomeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}