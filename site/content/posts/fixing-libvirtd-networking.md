---
title: "Fixing virtmanager virtualized network not connecting"
date: "2024-07-14"
---

Although the virtual network may be working in your KVM/QEMU instance manager, you still might not get a connection through. Here is a solution:

On your host system, change `firewall_backend` in `/etc/libvirt/network.conf` from `nftables` to `iptables`.

If you want to be extra sure in your changes, restart the `iptables` and `libvirtd` services:

```sh
sudo systemctl restart libvirtd.service
sudo systemctl restart iptables.service
```

source: https://bbs.archlinux.org/viewtopic.php?id=291898
