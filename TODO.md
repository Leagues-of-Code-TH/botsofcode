# Todo list
This file is for marking things to do. Pat always forget what to do.

## General
- [ ] Update document if it already exists **important**
- [X] Change `/verify` to verify with email instead of real name
- [ ] ~~Delete button selection when successfully verified~~

## Verify Command
- [X] Use redis for caching user verify
  - [ ] ~~Connect with `docker-compose`~~
  - [X] Store `discord id`, `real name`, `date created`   
    - [X] TTL redis starts with commmand
    - [X] command expires
  - [X] checks on google sheets
- [X] Give role
- [ ] Store `completed: true`

## Multiple servers integration
- [ ] #welcome channel id of both server
- [ ] read and `/verify` for different servers
  - [ ] Give different role selections
  - [ ] Read different Google Sheets

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