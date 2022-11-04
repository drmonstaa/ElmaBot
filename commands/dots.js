const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dots')
        .setDescription('Calculate DOTS score (powerlifting).')
        .addNumberOption((option) =>
            option.setName('total').setDescription('Total').setRequired(true)
        )
        .addNumberOption((option) =>
            option
                .setName('bodyweight')
                .setDescription('Bodyweight')
                .setRequired(true)
        )
        .addStringOption((option) =>
            option
                .setName('unit')
                .setDescription('Input "lbs" or "kg"')
                .setRequired(true)
        ),
    async execute(interaction) {
        let total = interaction.options.getNumber('total')
        let bodyweight = interaction.options.getNumber('bodyweight')
        const unit = interaction.options.getString('unit').toLowerCase()
        if (unit === 'lbs' || unit === 'lb') {
            total /= 2.205
            bodyweight /= 2.205
        } else if (unit !== 'kg') 
            return interaction.reply(`${unit} is an invalid unit.\nhttps://tenor.com/view/d4dj-kys-gif-26159398`)
        
        const dots =
            total *
            (500 /
                (-0.000001093 * bodyweight ** 4 +
                    0.0007391293 * bodyweight ** 3 +
                    -0.1918759221 * bodyweight ** 2 +
                    24.0900756 * bodyweight +
                    -307.75076))
        const printDots = Math.round(dots * 100) / 100
        if (unit === 'lbs') {
            total *= 2.205
            bodyweight *= 2.205
        }
        if (total && bodyweight)
            return interaction.reply(`Total: ${total} ${unit}, bodyweight: ${bodyweight} ${unit}.\nYour DOTS score is: ${printDots}`)
        return interaction.reply(`Missing inputs`)
    },
}
