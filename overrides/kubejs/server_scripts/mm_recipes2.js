ServerEvents.recipes(event =>{
    let rem = (item) => {event.remove({output:item})};
    let infus = (output,input,infusion_type) =>{event.recipes.mekanismMetallurgicInfusing(output,input,infusion_type)}
    let enrich = (output,input) => {event.recipes.mekanism.enriching(output,input)}
    rem('mekanismgenerators:fission_reactor_casing');
    event.shaped('4x mekanismgenerators:fission_reactor_casing',[' L ','LCL',' L '],{L:'mekanism:nugget_lead',C:'mekanism:steel_casing'})
    enrich('micromekanism:enriched_glowstone','glowstone_dust')
    rem('mekanismgenerators:bio_generator')
    event.shaped(
        'mekanismgenerators:bio_generator',
        [
            'RAR',
            'BCB',
            'IAI'
        ],
        {
            R:'minecraft:redstone',
            A:'mekanism:alloy_infused',
            B:'mekanism:bio_fuel',
            C:'mekanism:basic_control_circuit',
            I:'minecraft:iron_nugget'
        }
    )
    rem('mekanism:basic_tier_installer')
    event.shaped(
        'mekanism:basic_tier_installer',
        [
            'RCR',
            'IPI',
            'RCR'
        ],
        {
            R:'minecraft:redstone',
            C:'mekanism:basic_control_circuit',
            I:'minecraft:iron_nugget',
            P:'#minecraft:planks'
        }
    )
})