import Arme from './Arme'

it('constructor Arme', () => {
    expect(new Arme().getMinAtk).toBeLessThan(11);
    expect(new Arme().getMinAtk).toBeGreaterThan(0);
    expect(new Arme().getMaxAtk).toBeLessThan(21);
    expect(new Arme().getMaxAtk).toBeGreaterThan(0)
    expect(new Arme().getCritChance).toBeLessThan(21)
    expect(new Arme().getCritChance).toBeGreaterThan(0)
})