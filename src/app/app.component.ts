import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  images = [
    {
      title: 'At the beach',
      url:
        'https://images.unsplash.com/photo-1548263594-a71ea65a8598?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80',
    },

    {
      title: 'At the sunrise',
      url:
        'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3VucmlzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60',
    },

    {
      title: 'At the top of hill',
      url:
        'https://images.unsplash.com/photo-1435224897636-12e50e8a06dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dG9wJTIwb2YlMjBoaWxsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60',
    },

    {
      title: 'At the forest',
      url:
        'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60',
    },

    {
      title: 'At the rockside',
      url:
        'https://images.unsplash.com/photo-1653635284308-cd64d08731ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9ja3NpZGV8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60',
    },

    {
      title: 'At the valley',
      url:
        'https://images.unsplash.com/photo-1536048810607-3dc7f86981cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmFsbGV5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60',
    },
  ];
}
