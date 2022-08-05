---
title: "Caching SSH keys"
date: "2022-08-02"
description: "Enter passphrase(s) once per session."
---

This is a basically an even shorter read of [this](https://wiki.archlinux.org/title/SSH_keys#SSH_agents) Arch Linux Wiki article.

To have your ssh agent remember keys throughout your current session, do the following:

### `~/.ssh/config`
```
Host *
    AddKeysToAgent yes
```


If your ssh agent isn't initiated at startup, here's what I prefer to use as a config file with `systemd`.

### `~/.config/systemd/user/ssh-agent.service`

```conf
[Unit]
Description=SSH key agent

[Service]
Type=simple
Environment=SSH_AUTH_SOCK=%t/ssh-agent.socket
Environment=DISPLAY=:0
ExecStart=/usr/bin/ssh-agent -D -a $SSH_AUTH_SOCK

[Install]
WantedBy=default.target
```

Do the following to start the agent now, and enable it on startup.
```
$ systemctl enable --user ssh-agent.service
$ systemctl start --user ssh-agent.service
```
