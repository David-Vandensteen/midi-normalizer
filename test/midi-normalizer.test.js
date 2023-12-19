import { expect } from 'chai';
import { describe, it } from 'mocha';

import { MidiNormalizer } from '#src/index';

describe('MIDINormalizer', () => {
  describe('#controller()', () => {
    it('should return the controller value if it is within range', () => {
      const controller = 50;
      expect(MidiNormalizer.controller(controller)).to.equal(50);
    });

    it('should return 0 if the controller value is less than 0', () => {
      const controller = -10;
      expect(MidiNormalizer.controller(controller)).to.equal(0);
    });

    it('should return 127 if the controller value is greater than 127', () => {
      const controller = 150;
      expect(MidiNormalizer.controller(controller)).to.equal(127);
    });

    it('should return 127 if the controller value is 128 with base 1', () => {
      const controller = 128;
      expect(MidiNormalizer.controller(controller, { base: 1 })).to.equal(127);
    });
  });

  describe('#channel()', () => {
    it('should return the channel value if it is within range', () => {
      const channel = 5;
      expect(MidiNormalizer.channel(channel)).to.equal(5);
    });

    it('should return 0 if the channel value is less than 0', () => {
      const channel = -2;
      expect(MidiNormalizer.channel(channel)).to.equal(0);
    });

    it('should return 15 if the channel value is greater than 15', () => {
      const channel = 20;
      expect(MidiNormalizer.channel(channel)).to.equal(15);
    });

    it('should return 0 if the channel value is 1 with base 1', () => {
      const channel = 1;
      expect(MidiNormalizer.channel(channel, { base: 1 })).to.equal(0);
    });

    it('should return 15 if the channel value is 16 with base 1', () => {
      const channel = 16;
      expect(MidiNormalizer.channel(channel, { base: 1 })).to.equal(15);
    });
  });

  describe('#value()', () => {
    it('should return the value if it is within range', () => {
      const value = 100;
      expect(MidiNormalizer.value(value)).to.equal(100);
    });

    it('should return 0 if the value is less than 0', () => {
      const value = -5;
      expect(MidiNormalizer.value(value)).to.equal(0);
    });

    it('should return 127 if the value is greater than 127', () => {
      const value = 200;
      expect(MidiNormalizer.value(value)).to.equal(127);
    });
  });
});
