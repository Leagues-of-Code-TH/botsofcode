<div align="center">
<h1>BotsOfCode 
<img src="images/loc.jpg" alt="drawing" width="30"/>
</h1>


A discord bot for managing tasks on 
[Leagues of Code's Discord Server](https://www.leaguesofcode.com/th)
</div>

# 🏗 Development
You'll need a redis database otherwise use [Docker Compose](#🐋-docker)

check out the `.env` file and replace everything with your own configuration


```
npm install
npm run dev 
```

If you want to use [Nodemon](https://nodemon.io/) to auto-reload while in development:

```
npm run watch
```

# 💻 Production

```
npm install --production
npm run build
npm run start
```

# 🐋 Docker

To start your application:


```
docker-compose up -d
```

To shut down your application:

```
docker-compose down
```

To view your application's logs:

```
docker-compose logs
```

For the full command list please view the [Docker Documentation](https://docs.docker.com/engine/reference/commandline/cli/).

# 📜 Documentation

- [discordx.js.org](https://discordx.js.org)
- [Tutorials (dev.to)](https://dev.to/oceanroleplay/series/14317)