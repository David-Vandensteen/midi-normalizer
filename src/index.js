export default class MidiNormalizer {
  static controller(controller, { base } = { base: 0 }) {
    if (controller >= 127 + base) return 127;
    if (controller <= 0 + base) return 0;
    return controller - base;
  }

  static channel(channel, { base } = { base: 0 }) {
    if (channel >= 15 + base) return 15;
    if (channel <= 0 + base) return 0;
    return channel - base;
  }

  static value(value) {
    if (value >= 127) return 127;
    if (value <= 0) return 0;
    return value;
  }
}

export { MidiNormalizer };
