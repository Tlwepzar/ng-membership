import { Component } from '@angular/core'

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr/>
            <h2>{{event.name}}</h2>
            <div>Date: {{event.date}}</div>
            <div>Time: {{event.time}}</div>
            <div>Price: \R{{event.price}} or {{event.entry}} </div>
            <div>
                <span> Location: {{event.location.address}}</span>
                <span>&nbsp;</span>
                <span> {{event.location.city}}, {{event.location.country}}</span>
            </div>
    </div>
    `
})
export class EventsListComponent {
    event = {
        id: 1,
        name: 'LasTown Connect',
        date: '26/06/2020',
        time: '10:00 am',
        price: 99.99,
        entry: 'free for everyone under the age of 16 yrs old',
        imageURL: '/assets/images/angularconnect-shield.png',
        location: {
            address: '90909 Gugulethu Scheme,',
            city: 'Kwa-Thema, 1575',
            country: 'South Africa'
        }
    }
}