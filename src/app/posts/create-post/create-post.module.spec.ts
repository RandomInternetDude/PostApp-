import { CreatePostModule } from './create-post.module';

describe('CreatePostModule', () => {
  let createPostModule: CreatePostModule;

  beforeEach(() => {
    createPostModule = new CreatePostModule();
  });

  it('should create an instance', () => {
    expect(createPostModule).toBeTruthy();
  });
});
