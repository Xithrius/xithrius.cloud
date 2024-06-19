---
title: "Possible solution to fixing libvirt disconnects"
date: "2024-06-18"
---

Although the virtual network may be working in your KVM/QEMU instance manager, you still might not get a connection through. This is a recent problem on (at least) arch, possibly due to some package upgrade.

This might solve the issue:

```bash
sudo systemctl start iptables.service
sudo systemctl enable iptables.service
sudo systemctl restart libvirtd.service
```

source: https://bbs.archlinux.org/viewtopic.php?id=296590
