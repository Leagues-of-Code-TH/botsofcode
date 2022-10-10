# Todo list
This file is for marking things to do. Pat always forget what to do.

- [ ] Fix Discord bot status

## Verify Command
- [ ] Use redis for caching user verify
  - [ ] Connect with `docker-compose`
  - [ ] Store `uid: realname`   
    - [ ] TTL redis starts with commmand
    - [ ] command expires
  - [ ] Query (💀this here) when button is pressed
- [ ] Give role
- [ ] Store `completed: true`
- [ ] Send realname + class to channel

## ~~Poll Command~~ (`title`, `optinal args**`)
- [X] Get input
- [X] Send announcement to channel
- [X] Add reactions
- 
## ~~Announce Command~~(`title`, `description`)
- [X] Get input (used modal)
- [X] Send announcement to channel (reply with @everyone)

- [X] Build and run on Raspberry Pi
- [X] Removed unused commands