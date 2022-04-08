import chop from './../karateChop';
describe(`Karate Chop`, () => {
  describe('length of target is zero', () => {
    it(`should return -1`, () => {
      expect(chop(3, [])).toEqual(-1);
    });
  });
  describe('length of target is one', () => {
    describe('target not contains point', () => {
      it('should return -1', () => {
        expect(chop(3, [1])).toEqual(-1);
      });
    });
    describe('target contains point', () => {
      it(`should return -1`, () => {
        expect(chop(1, [1])).toEqual(0);
      });
    });
  });
  describe('length of target is more than 1', () => {
    describe('length of target is odd', () => {
      describe('target not contains point', () => {
        describe('point is the least', () => {
          it('should return -1', () => {
            expect(chop(0, [1, 3, 5])).toEqual(-1);
          });
        });
        describe('point is the largest', () => {
          it('should return -1', () => {
            expect(chop(6, [1, 3, 5])).toEqual(-1);
          });
        });
        describe('point is more than middle', () => {
          it('should return -1', () => {
            expect(chop(4, [1, 3, 5])).toEqual(-1);
          });
        });
        describe('point is less than middle', () => {
          it('should return -1', () => {
            expect(chop(2, [1, 3, 5])).toEqual(-1);
          });
        });
      });
      describe('target contains point', () => {
        describe('point is at the top', () => {
          it('should return 0', () => {
            expect(chop(1, [1, 3, 5])).toEqual(0);
          });
        });
        describe('point is at the end', () => {
          it('should return length - 1', () => {
            expect(chop(5, [1, 3, 5])).toEqual(2);
          });
        });
        describe('point is in middle', () => {
          it('should return middle index', () => {
            expect(chop(3, [1, 3, 5])).toEqual(1);
          });
        });
      });
    });
    describe('length of target is even', () => {
      describe('target not contains point', () => {
        describe('point is the least', () => {
          it('should return -1', () => {
            expect(chop(0, [1, 3, 5, 7])).toEqual(-1);
          });
        });
        describe('point is the largest', () => {
          it('should return -1', () => {
            expect(chop(8, [1, 3, 5, 7])).toEqual(-1);
          });
        });
        describe('point is the middle', () => {
          it('should return -1', () => {
            expect(chop(4, [1, 3, 5, 7])).toEqual(-1);
          });
        });
        describe('point is more than middle', () => {
          it('should return -1', () => {
            expect(chop(6, [1, 3, 5, 7])).toEqual(-1);
          });
        });
        describe('point is less than middle', () => {
          it('should return -1', () => {
            expect(chop(2, [1, 3, 5, 7])).toEqual(-1);
          });
        });
      });
      describe('target contains point', () => {
        describe('point is at the top', () => {
          it('should return 0', () => {
            expect(chop(1, [1, 3, 5, 7])).toEqual(0);
          });
        });
        describe('point is at the end', () => {
          it('should return length - 1', () => {
            expect(chop(7, [1, 3, 5, 7])).toEqual(3);
          });
        });
        describe('point is less than middle', () => {
          it('should return target index', () => {
            expect(chop(3, [1, 3, 5, 7])).toEqual(1);
          });
        });
        describe('point is more than middle', () => {
          it('should return target index', () => {
            expect(chop(5, [1, 3, 5, 7])).toEqual(2);
          });
        });
      });
    });
  });
});
