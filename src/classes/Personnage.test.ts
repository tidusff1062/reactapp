import Personnage from './Personnage'

it('constructor Personnage', () =>{
    expect(new Personnage().getMaxHp).toBeLessThan(201);
    expect(new Personnage().getMaxHp).toBeGreaterThanOrEqual(1)
    expect(new Personnage().getDef).toBeLessThan(101);
    expect(new Personnage().getDef).toBeGreaterThan(1);
    
})

