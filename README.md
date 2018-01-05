# Vuetify Discord Chat Bot
Forked from [https://github.com/An-Idiots-Guide/guidebot](https://github.com/An-Idiots-Guide/guidebot).

## Requirements

- `git` command line ([Windows](https://git-scm.com/download/win)|[Linux](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)|[MacOS](https://git-scm.com/download/mac)) installed
- `node` [Version 8.0.0 or higher](https://nodejs.org)

You also need your bot's token. This is obtained by creating an application in
the Developer section of discordapp.com. Check the [first section of this page](https://anidiots.guide/getting-started/the-long-version.html) 
for more info.

## Downloading

In a command prompt in your projects folder (wherever that may be) run the following:

`git clone https://github.com/An-Idiots-Guide/guidebot.git`

Once finished: 

- In the folder from where you ran the git command, run `cd guidebot` and then run `npm install`
- Edit `config.js` and fill in all the relevant details as indicated in the file's comments.
- Rename now-secrets.json.example to now-secrets.json and add your bots token. (Only used for local deploy)

## Deploy to Zeit
- Add secret key with the command: `now secret add bot-token TOKEN HERE`
- If alias already exists, run: `now` else run: `npm run alias`

## Starting the bot

To start the bot, in the command prompt, run the following command:
`node index.js`

## Inviting to a guild

To add the bot to your guild, you have to get an oauth link for it. 

You can use this site to help you generate a full OAuth Link, which includes a calculator for the permissions:
[https://finitereality.github.io/permissions-calculator/?v=0](https://finitereality.github.io/permissions-calculator/?v=0)
