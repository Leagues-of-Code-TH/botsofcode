# Todo list
This file is for marking things to do. Pat always forget what to do.

## General
- [ ] Update document if it already exists **important**
- [X] Change `/verify` to verify with email instead of real name
- [X] ~~Delete button selection when successfully verified~~

## Multiple servers integration
- [X] #welcome channel id of both server
  - [X] The same event check id to send to different channels
- [X] read and `/verify` for different servers
  - [X] Give different role selections
  - [X] Read different Google Sheets

## Verify Command
- [ ] Store `completed: true`
- [X] Use redis for caching user verify
  - [X] ~~Connect with `docker-compose`~~
  - [X] Store `discord id`, `real name`, `date created`   
    - [X] TTL redis starts with commmand
    - [X] command expires
  - [X] checks on google sheets
- [X] Give role


## ~~Poll Command~~ (`title`, `optinal args**`)
- [X] Get input
- [X] Send announcement to channel
- [X] Add reactions

## ~~Announce Command~~(`title`, `description`)
- [X] Get input (used modal)
- [X] Send announcement to channel (reply with @everyone)

- [X] Build and run on Raspberry Pi
- [X] Removed unused commands
- [X] Fix Discord bot status