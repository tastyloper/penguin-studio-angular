import { Injectable, Inject} from '@angular/core';
import { Observable, of } from 'rxjs';
import { DOCUMENT } from '@angular/common';

import { Item } from '../models/item';
import { WINDOW } from './window.service';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  ITEMS: Item[] = [
    {
      id: 1,
      type: 'music',
      img: 'assets/images/portfolio/music-cover-1.jpg',
      desc: 'BTS Love Yourself Her 5th album',
      isScroll: false
    },
    {
      id: 2,
      type: 'music',
      img: 'assets/images/portfolio/music-cover-2.jpg',
      desc: 'COME BACK HOME 앨범',
      isScroll: false
    },
    {
      id: 3,
      type: 'music',
      img: 'assets/images/portfolio/music-cover-3.jpg',
      desc: 'FACE YOURSELF 앨범',
      isScroll: false
    },
    {
      id: 4,
      type: 'music',
      img: 'assets/images/portfolio/music-cover-4.png',
      desc: '불후의명곡 커버',
      isScroll: false
    },
    {
      id: 5,
      type: 'music',
      img: 'assets/images/portfolio/music-cover-5.jpg',
      desc: 'HOPEWORLD 커버',
      isScroll: false
    },
    {
      id: 6,
      type: 'music',
      img: 'assets/images/portfolio/music-cover-6.jpg',
      desc: `LoveYourself 'Tear' 커버`,
      isScroll: false
    },
    {
      id: 7,
      type: 'music',
      img: 'assets/images/portfolio/music-cover-7.jpg',
      desc: '다음이 있을까 앨범',
      isScroll: false
    },
    {
      id: 8,
      type: 'music',
      img: 'assets/images/portfolio/music-cover-8.jpg',
      desc: '입술자국 앨범',
      isScroll: false
    },
    {
      id: 9,
      type: 'concert',
      img: 'assets/images/portfolio/concert-cover-1.jpg',
      desc: 'MMA 2017',
      isScroll: false
    },
    {
      id: 10,
      type: 'concert',
      img: 'assets/images/portfolio/concert-cover-2.jpg',
      desc: '2017 BTS HOME PARTY cover',
      isScroll: false
    },
    {
      id: 11,
      type: 'concert',
      img: 'assets/images/portfolio/concert-cover-3.jpg',
      desc: '2017 BTS LIVE WINGS TOUR cover',
      isScroll: false
    },
    {
      id: 12,
      type: 'concert',
      img: 'assets/images/portfolio/concert-cover-4.jpg',
      desc: '2017 골든디스크',
      isScroll: false
    },
    {
      id: 13,
      type: 'concert',
      img: 'assets/images/portfolio/concert-cover-5.jpg',
      desc: 'BTS 4TH MUSTER cover',
      isScroll: false
    },
    {
      id: 14,
      type: 'ad',
      img: 'https://img.youtube.com/vi/V0ZwH6MYc6Q/maxresdefault.jpg',
      desc: '삼성 갤럭시 S7 유연석, 이광수, 조윤우 편',
      isScroll: false
    },
    {
      id: 15,
      type: 'ad',
      img: 'https://img.youtube.com/vi/gqGAf2EaIBs/maxresdefault.jpg',
      desc: '삼성 투모로우 솔루션 지우편',
      isScroll: false
    },
    {
      id: 16,
      type: 'ad',
      img: 'https://img.youtube.com/vi/RWMpdlGRXcA/maxresdefault.jpg',
      desc: '피자헛 유민상편',
      isScroll: false
    },
    {
      id: 17,
      type: 'ad',
      img: 'https://img.youtube.com/vi/628_eqUL6GI/maxresdefault.jpg',
      desc: '정관장 황진단',
      isScroll: false
    },
    {
      id: 18,
      type: 'ad',
      img: 'https://img.youtube.com/vi/lGjDAbrs4uo/maxresdefault.jpg',
      desc: '질레트 류준열편',
      isScroll: false
    },
    {
      id: 19,
      type: 'ad',
      img: 'https://img.youtube.com/vi/ZSHcOIWZm7k/maxresdefault.jpg',
      desc: '티볼리 에어 TVC, RCM',
      isScroll: false
    },
    {
      id: 20,
      type: 'ad',
      img: 'https://img.youtube.com/vi/JjW65KyA9CQ/maxresdefault.jpg',
      desc: '판시딜 카운셀러편',
      isScroll: false
    },
    {
      id: 21,
      type: 'ad',
      img: 'https://img.youtube.com/vi/IlK_l92b2wI/maxresdefault.jpg',
      desc: 'IBK기업은행 희망음악회편 시장',
      isScroll: false
    },
    {
      id: 22,
      type: 'ad',
      img: 'https://img.youtube.com/vi/8Wn9bHn-wnw/maxresdefault.jpg',
      desc: 'IBK기업은행 희망음악회편 지하철',
      isScroll: false
    },
    {
      id: 23,
      type: 'ad',
      img: 'https://img.youtube.com/vi/E3BGVL7U4dg/maxresdefault.jpg',
      desc: '르꼬끄 골프 이보미편',
      isScroll: false
    },
    {
      id: 24,
      type: 'ad',
      img: 'https://img.youtube.com/vi/Exh3MOaOu14/maxresdefault.jpg',
      desc: '토니모리 안정환, 김성주편',
      isScroll: false
    }
  ];

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window
  ) {}

  get items(): Observable<Item[]> {
    return of([...this.ITEMS]);
  }
}
