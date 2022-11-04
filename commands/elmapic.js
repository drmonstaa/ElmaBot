const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('elmapic')
        .setDescription('Get a random picture of Elma!'),
    async execute(interaction) {
        const elmapics = [
            'https://img3.gelbooru.com/images/a3/37/a337622ca14560faa9975da596f0d372.jpg',
            'https://img3.gelbooru.com/images/b4/96/b496e121f8180e3f69730c2fd354fbe0.jpg',
            'https://img3.gelbooru.com/images/0b/1b/0b1bf1f809df2b5e8bd37350eb75faf7.jpg',
            'https://img3.gelbooru.com/images/4f/21/4f2131ab24d24051f8c4eb300760316e.jpeg',
            'https://tenor.com/bFyiz.gif',
            'https://gfycat.com/skinnybitterlemming',
            'https://i.redd.it/i9xy98v50uo71.jpg',
            'https://pbs.twimg.com/media/E63IdBGWUAAEdas?format=jpg&name=large',
            'https://img3.gelbooru.com/images/54/a0/54a0d2f95d4933a19b4e89848ebe91a1.jpg',
            'https://rare-gallery.com/fullwalls/56011-Elma-Miss-Kobayashis-Dragon-Maid.png',
            'https://i.redd.it/d7x8a3s292371.jpg',
            'https://pbs.twimg.com/media/D7HCCykUwAA6ZrE?format=jpg&name=medium',
            'https://img3.gelbooru.com/images/c8/52/c852c0d42ad9e0c57e74679028d0bd6e.jpg',
            'https://preview.redd.it/fwigpdjrk6q81.jpg?width=1181&format=pjpg&auto=webp&s=25ff04ca1b22271c5518344f60bc7df643e472db',
            'https://preview.redd.it/6vpfngkrk6q81.jpg?width=1365&format=pjpg&auto=webp&s=56e2d496e7ac468b4ed20ab15dad54e421b38c7f',
            'https://img3.gelbooru.com/images/3e/a0/3ea0a06b4de3307f18a352debf433aaf.png',
            'https://pbs.twimg.com/media/DfNKfQLWAAE1yHD.jpg',
            'https://tenor.com/view/dragon-maid-elma-elma-eating-frenchy-gif-22411160',
            'https://tenor.com/view/elma-kobayashi-dragon-maid-cute-gif-10627132',
            'https://tenor.com/view/dragon-maid-elma-horn-gif-15939456',
            'https://tenor.com/view/elma-kobayashi-dragon-maid-animes-typing-working-gif-24915614',
            'https://tenor.com/view/elma-gif-25279954',
            'https://tenor.com/view/personal-elma-gif-23477156',
            'https://tenor.com/view/personal-elma-gif-23477161',
            'https://tenor.com/view/personal-elma-gif-23477160',
            'https://tenor.com/view/personal-elma-gif-23477155',
            'https://img3.gelbooru.com/images/e6/4e/e64eeae9967f479e90e6d4c9e1aa513a.png',
            'https://img3.gelbooru.com/images/03/35/0335efbf3004bc7d7a5f92d60af5623a.png',
            'https://img3.gelbooru.com/images/a9/c2/a9c2f45784b544336f7880e30d1f4673.jpg',
            'https://img3.gelbooru.com/images/61/00/610064d250e216e34d3622f4c122ad36.jpg',
        ]
        const elmapic = elmapics[Math.floor(Math.random() * elmapics.length)]
        return interaction.reply(`${elmapic}`)
    },
}
