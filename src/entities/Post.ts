export abstract class Post {
  private readonly id: number;
  protected constructor(id) {
    this.id = id;
  }

  get ID(): number {
    return this.id;
  }
}

export class EmptyPost extends Post {
  constructor(id) {
    super(id);
  }
}

export class PostWithNumber extends Post {
  private readonly body: number;

  constructor(id, body) {
    super(id);
    this.body = body;
  }

  getBody(): number {
    return this.body;
  }
}

export class PostWithText extends Post {
  private readonly body: string;

  constructor(id, body) {
    super(id);
    this.body = body;
  }
  getBody(): string {
    return this.body;
  }
}
