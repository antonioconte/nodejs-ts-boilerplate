import { getRandomID } from '../utils/math';

export default class Todo {
  private readonly id: number;
  private readonly body: any;

  constructor(body) {
    this.id = getRandomID();
    this.body = body;
  }

  public getBody(): string {
    return this.body;
  }
}
