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
      desc: 'BTS Love Yourself Her 5th album',
      subject: 'music',
      isScroll: false
    },
    {
      img: 'assets/images/portfolio/music-cover-2.jpg',
      desc: 'COME BACK HOME 앨범',
      subject: 'music',
      isScroll: false
    },
    {
      img: 'assets/images/portfolio/music-cover-3.jpg',
      desc: 'FACE YOURSELF 앨범',
      subject: 'music',
      isScroll: false
    },
    {
      img: 'assets/images/portfolio/music-cover-4.png',
      desc: '불후의명곡 커버',
      subject: 'music',
      isScroll: false
    },
    {
      img: 'assets/images/portfolio/music-cover-5.jpg',
      desc: 'HOPEWORLD 커버',
      subject: 'music',
      isScroll: false
    },
    {
      img: 'assets/images/portfolio/music-cover-6.jpg',
      desc: `LoveYourself 'Tear' 커버`,
      subject: 'music',
      isScroll: false
    },
    {
      img: 'assets/images/portfolio/music-cover-7.jpg',
      desc: '다음이 있을까 앨범',
      subject: 'music',
      isScroll: false
    },
    {
      img: 'assets/images/portfolio/music-cover-8.jpg',
      desc: '입술자국 앨범',
      subject: 'music',
      isScroll: false
    },
    {
      img: 'assets/images/portfolio/concert-cover-1.jpg',
      desc: 'MMA 2017',
      subject: 'concert',
      isScroll: false
    },
    {
      img: 'assets/images/portfolio/concert-cover-2.jpg',
      desc: '2017 BTS HOME PARTY cover',
      subject: 'concert',
      isScroll: false
    },
    {
      img: 'assets/images/portfolio/concert-cover-3.jpg',
      desc: '2017 BTS LIVE WINGS TOUR cover',
      subject: 'concert',
      isScroll: false
    },
    {
      img: 'assets/images/portfolio/concert-cover-4.jpg',
      desc: '2017 골든디스크',
      subject: 'concert',
      isScroll: false
    },
    {
      img: 'assets/images/portfolio/concert-cover-5.jpg',
      desc: 'BTS 4TH MUSTER cover',
      subject: 'concert',
      isScroll: false
    },
    {
      img: 'https://img.youtube.com/vi/V0ZwH6MYc6Q/maxresdefault.jpg',
      desc: '삼성 갤럭시 S7 유연석, 이광수, 조윤우 편',
      subject: 'ad',
      isScroll: false
    },
    {
      img: 'https://img.youtube.com/vi/gqGAf2EaIBs/maxresdefault.jpg',
      desc: '삼성 투모로우 솔루션 지우편',
      subject: 'ad',
      isScroll: false
    },
    {
      img: 'https://img.youtube.com/vi/RWMpdlGRXcA/maxresdefault.jpg',
      desc: '피자헛 유민상편',
      subject: 'ad',
      isScroll: false
    },
    {
      img: 'https://img.youtube.com/vi/628_eqUL6GI/maxresdefault.jpg',
      desc: '정관장 황진단',
      subject: 'ad',
      isScroll: false
    },
    {
      img: 'https://img.youtube.com/vi/lGjDAbrs4uo/maxresdefault.jpg',
      desc: '질레트 류준열편',
      subject: 'ad',
      isScroll: false
    },
    {
      img: 'https://img.youtube.com/vi/ZSHcOIWZm7k/maxresdefault.jpg',
      desc: '티볼리 에어 TVC, RCM',
      subject: 'ad',
      isScroll: false
    },
    {
      img: 'https://img.youtube.com/vi/JjW65KyA9CQ/maxresdefault.jpg',
      desc: '판시딜 카운셀러편',
      subject: 'ad',
      isScroll: false
    },
    {
      img: 'https://img.youtube.com/vi/IlK_l92b2wI/maxresdefault.jpg',
      desc: 'IBK기업은행 희망음악회편 시장',
      subject: 'ad',
      isScroll: false
    },
    {
      img: 'https://img.youtube.com/vi/8Wn9bHn-wnw/maxresdefault.jpg',
      desc: 'IBK기업은행 희망음악회편 지하철',
      subject: 'ad',
      isScroll: false
    },
    {
      img: 'https://img.youtube.com/vi/E3BGVL7U4dg/maxresdefault.jpg',
      desc: '르꼬끄 골프 이보미편',
      subject: 'ad',
      isScroll: false
    },
    {
      img: 'https://img.youtube.com/vi/Exh3MOaOu14/maxresdefault.jpg',
      desc: '토니모리 안정환, 김성주편',
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
