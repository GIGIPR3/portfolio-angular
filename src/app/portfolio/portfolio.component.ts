import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  cards = [
    {
      titolo:'Seven Yacht Vieste', img: '../../assets/sevenyacht.webp', collegamento:'https://www.sevenyacht-vieste.com/'
    },
    {
      titolo:'Spotify Clone', img: '../../assets/spotify.webp', collegamento:''
    },
    {
      titolo:'Whatsapp Clone', img: '../../assets/boolzap2.webp', collegamento:''
    },
    {
      titolo:'Discord WebSite Clone', img: '../../assets/discord.webp', collegamento:''
    },
    {
      titolo:'Dropbox Website Clone', img: '../../assets/dropbox.webp', collegamento:''
    },
    {
      titolo:'Zoom Web App Clone', img: '../../assets/zoom.webp', collegamento:''
    },

  ]

}
