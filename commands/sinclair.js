const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('sinclair')
        .setDescription('Calculate Sinclair score (weightlifting).')
        .addNumberOption((option) =>
            option.setName('total').setDescription('Total').setRequired(true)
        )
        .addNumberOption((option) =>
            option
                .setName('bodyweight')
                .setDescription('Bodyweight')
                .setRequired(true)
        ),
    async execute(interaction) {
        const total = interaction.options.getNumber('total')
        const bodyweight = interaction.options.getNumber('bodyweight')
        const sinclair =
            total * 10 ** (0.722762521 * Math.log10(bodyweight / 193.609) ** 2)
        const printSinclair = Math.round(sinclair * 100) / 100
        if (total && bodyweight)
            return interaction.reply(`Total: ${total} kg, bodyweight: ${bodyweight} kg.\nYour sinclair score is: ${printSinclair}`)
        return interaction.reply(`Missing inputs`)
    },
}
