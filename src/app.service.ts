import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const x: number[] = [ Math.random(), Math.random(), Math.random() ];
    const sum = x.reduce((a, b) => a + b, 0);
    return `Hello World! --- ${sum} -----`;
  }
}
