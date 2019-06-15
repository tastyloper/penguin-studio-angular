import { Injectable, Inject} from '@angular/core';
import { Item } from "./portfolio/item";
import { Observable, of } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';
import { WINDOW } from "./window.service";

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  ITEMS: Item[] = [
    {
      img: 'assets/images/portfolio/music-cover-1.jpg',
      alt: 'BTS Love Yourself Her 5th album',
      desc: 'BTS Love Yourself Her 5th album',
      subject: 'music',
      isScroll: false
    },
    {
      img: 'assets/images/portfolio/music-cover-2.jpg',
      alt: 'COME BACK HOME 앨범',
      desc: 'COME BACK HOME 앨범',
      subject: 'music',
      isScroll: false
    },
    {
      img: 'assets/images/portfolio/music-cover-3.jpg',
      alt: 'COME BACK HOME 앨범',
      desc: 'COME BACK HOME 앨범',
      subject: 'music',
      isScroll: false
    },
    {
      img: 'assets/images/portfolio/music-cover-4.png',
      alt: 'COME BACK HOME 앨범',
      desc: 'COME BACK HOME 앨범',
      subject: 'music',
      isScroll: false
    },
    {
      img: 'assets/images/portfolio/music-cover-5.jpg',
      alt: 'COME BACK HOME 앨범',
      desc: 'COME BACK HOME 앨범',
      subject: 'music',
      isScroll: false
    },
    {
      img: 'assets/images/portfolio/music-cover-6.jpg',
      alt: 'COME BACK HOME 앨범',
      desc: 'COME BACK HOME 앨범',
      subject: 'music',
      isScroll: false
    },
    {
      img: 'assets/images/portfolio/music-cover-7.jpg',
      alt: 'COME BACK HOME 앨범',
      desc: 'COME BACK HOME 앨범',
      subject: 'music',
      isScroll: false
    },
    {
      img: 'assets/images/portfolio/music-cover-8.jpg',
      alt: 'COME BACK HOME 앨범',
      desc: 'COME BACK HOME 앨범',
      subject: 'music',
      isScroll: false
    },
    {
      img: 'assets/images/portfolio/concert-cover-1.jpg',
      alt: 'COME BACK HOME 앨범',
      desc: 'COME BACK HOME 앨범',
      subject: 'concert',
      isScroll: false
    },
    {
      img: 'assets/images/portfolio/concert-cover-2.jpg',
      alt: 'COME BACK HOME 앨범',
      desc: 'COME BACK HOME 앨범',
      subject: 'concert',
      isScroll: false
    },
    {
      img: 'assets/images/portfolio/concert-cover-3.jpg',
      alt: 'COME BACK HOME 앨범',
      desc: 'COME BACK HOME 앨범',
      subject: 'concert',
      isScroll: false
    },
    {
      img: 'assets/images/portfolio/concert-cover-4.jpg',
      alt: 'COME BACK HOME 앨범',
      desc: 'COME BACK HOME 앨범',
      subject: 'concert',
      isScroll: false
    },
    {
      img: 'assets/images/portfolio/concert-cover-5.jpg',
      alt: 'COME BACK HOME 앨범',
      desc: 'COME BACK HOME 앨범',
      subject: 'concert',
      isScroll: false
    },
    {
      img: 'https://img.youtube.com/vi/V0ZwH6MYc6Q/maxresdefault.jpg',
      alt: '삼성 갤럭시 S7 유연석, 이광수, 조윤우 편',
      desc: '삼성 갤럭시 S7 유연석, 이광수, 조윤우 편',
      subject: 'ad',
      isScroll: false
    },
    {
      img: 'https://img.youtube.com/vi/gqGAf2EaIBs/maxresdefault.jpg',
      alt: '삼성 투모로우 솔루션 지우편',
      desc: '삼성 투모로우 솔루션 지우편',
      subject: 'ad',
      isScroll: false
    },
    
  ]

  constructor(
    @Inject(BrowserModule) private document: Document,
    @Inject(WINDOW) private window
  ) { }

  getItems(): Observable<Item[]> {
    return of(this.ITEMS);
  }

  setIsScroll(): void {
    this.ITEMS.forEach(item => {
      const number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
      if (number > 50) {
        item.isScroll = true;
      } else if (item.isScroll && number < 10) {
        item.isScroll = false;
      }
    });
  }
}
