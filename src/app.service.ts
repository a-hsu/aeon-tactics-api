import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    console.log('called again dank');
    // Testing News Call
    return {
      aeons: [
        {
          id: '1',
          name: 'Karn',
          class: 'Tank',
          image: 's3image',
          stats: {
            hp: 100,
            mana: 100,
            od: 100,
            str: 60,
            spd: 1.0,
          },
          abilities: [
            {
              type: 'mana',
              name: 'Come At Me!',
              desc: 'Karn taunts the front enemy for one turn and deals damage to the attacker',
              selfStatus: 'NONE',
              afflictStatus: 'TAUNT',
            },
          ],
        },
      ],
      articles: [
        {
          id: '1',
          title: 'article 1',
          subtitle: 'the best subtitle the best subtitle',
          content: 'goodbye',
        },
        {
          id: '2',
          title: 'article 2',
          subtitle: 'the best subtitle',
          content: 'hello',
        },
        {
          id: '3',
          title: 'article 3 article 3 article 3 article 3',
          subtitle: 'the best subtitle the best subtitle',
          content: 'salute',
        },
        {
          id: '4',
          title: 'article 4',
          subtitle: 'the best subtitle',
          content: 'good morning',
        },
        {
          id: '5',
          title: 'article 5',
          subtitle: 'the best subtitle the best subtitle the best subtitle',
          content: 'hello world',
        },
      ],
    };
  }
}
